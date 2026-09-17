(function () {
  'use strict';
  const body = document.body;
  const openButton = document.querySelector('.menu-button');
  const closeButton = document.querySelector('.menu-close');
  const scrim = document.querySelector('.navigation-scrim');
  const navigation = document.getElementById('site-navigation');
  if (!openButton || !closeButton || !scrim || !navigation) return;

  function setOpen(open) {
    body.classList.toggle('navigation-open', open);
    openButton.setAttribute('aria-expanded', String(open));
    if (open) closeButton.focus();
    else openButton.focus();
  }

  openButton.addEventListener('click', function () { setOpen(true); });
  closeButton.addEventListener('click', function () { setOpen(false); });
  scrim.addEventListener('click', function () { setOpen(false); });
  navigation.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && body.classList.contains('navigation-open')) setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      body.classList.remove('navigation-open');
      openButton.setAttribute('aria-expanded', 'false');
    }
  });
})();
