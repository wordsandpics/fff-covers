from pathlib import Path

from calibre.ebooks.metadata.book.base import Metadata
from calibre.utils.formatter import EvalFormatter


ROOT = Path(__file__).resolve().parents[1]


def template(name):
    text = (ROOT / "code" / "calibre-column-templates" / name).read_text()
    return text[text.index("program:") :]


def book(**values):
    metadata = Metadata("Template test")
    datatypes = {
        "chapters": "int",
        "status": "text",
        "updated": "datetime",
    }
    for name, value in values.items():
        metadata.set_user_metadata(
            f"#{name}", {"datatype": datatypes.get(name, "text"), "#value#": value}
        )
    return metadata


def render(name, **values):
    result = EvalFormatter().safe_format(template(name), {}, "TEMPLATE ERROR", book(**values))
    if result == "TEMPLATE ERROR":
        raise AssertionError(f"Calibre could not evaluate {name}")
    return result


assert render("short_chapters.txt", chapters=1) == "1 chapter"
assert render("short_chapters.txt", chapters=12) == "12 chapters"
assert render("short_status_advanced.txt", status="Completed", chapters=1) == "✅"
assert render("short_status_advanced.txt", status="Completed", chapters=9) == "✅ 9ch"
assert render("short_status_advanced.txt", status="In-Progress", chapters=8) == "8ch"
assert render(
    "short_status_advanced.txt",
    status="In-Progress",
    chapters=8,
    updated="2000-01-01T00:00:00+00:00",
) == "😴 8ch"

format_book = book(genre="Fluff", short_words="34k")
formatter = EvalFormatter()
assert formatter.safe_format("{#genre:| · |}", {}, "FORMAT ERROR", format_book) == " · Fluff"
assert formatter.safe_format("{#short_words:|| words|}", {}, "FORMAT ERROR", format_book) == "34k words"
assert formatter.safe_format("{#short_words:|Length: | words|}", {}, "FORMAT ERROR", format_book) == "Length: 34k words"
assert formatter.safe_format("{#genre:|Tags: \\n|}", {}, "FORMAT ERROR", format_book) == "Tags: \nFluff"

category_fallback = """program:
category = list_intersection(
    'Gen, F/F, F/M, M/M, Multi, Other',
    field('#ao3_category'),
    ','
);
if category then return category else return 'Gen' fi
"""
assert formatter.safe_format(
    category_fallback, {}, "FORMAT ERROR", book(ao3_category="M/M, Gen")
) == "Gen, M/M"

print("Calibre template smoke tests passed")
