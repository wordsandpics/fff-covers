require 'fileutils'
require 'date'
require 'kramdown'
require 'kramdown-parser-gfm'
require 'liquid'
require 'yaml'

ROOT = File.expand_path('..', __dir__)
OUTPUT = File.join(ROOT, '.site-preview')

module PreviewFilters
  def relative_url(input)
    value = input.to_s
    value.start_with?('/') ? value : "/#{value}"
  end
end

Liquid::Template.register_filter(PreviewFilters)

def split_frontmatter(text)
  match = text.match(/\A---\n(.*?)\n---\n?/m)
  return [{}, text] unless match
  [YAML.safe_load(match[1], permitted_classes: [Date], aliases: true) || {}, text[match[0].length..]]
end

def page_url(file, data)
  return data['permalink'] if data['permalink']
  relative = file.delete_prefix("#{ROOT}/").sub(/\.md\z/, '')
  relative == 'index' ? '/' : "/#{relative}/"
end

config = YAML.safe_load(File.read(File.join(ROOT, '_config.yml')), aliases: true)
layout = File.read(File.join(ROOT, '_layouts', 'default.html'))
site = config.merge('nav' => config['nav'])

FileUtils.rm_rf(OUTPUT)
FileUtils.mkdir_p(OUTPUT)
FileUtils.cp_r(File.join(ROOT, 'assets'), OUTPUT)
FileUtils.cp_r(File.join(ROOT, 'code'), OUTPUT)

files = Dir.glob(File.join(ROOT, '**', '*.md')).reject do |file|
  file.include?('/.git/') || file.include?('/tests/') || file.end_with?('/README.md') || file.end_with?('/RESTRUCTURE_PLAN.md')
end

files.each do |file|
  data, markdown = split_frontmatter(File.read(file))
  next if data['published'] == false

  url = page_url(file, data)
  page = data.merge('url' => url)
  liquid_markdown = Liquid::Template.parse(markdown).render('page' => page, 'site' => site)
  content = Kramdown::Document.new(liquid_markdown, input: 'GFM', syntax_highlighter: 'rouge').to_html
  html = Liquid::Template.parse(layout).render('page' => page, 'site' => site, 'content' => content)

  destination = url == '/' ? File.join(OUTPUT, 'index.html') : File.join(OUTPUT, url, 'index.html')
  FileUtils.mkdir_p(File.dirname(destination))
  File.write(destination, html)
end

puts "Built #{files.length} source pages in #{OUTPUT}"
