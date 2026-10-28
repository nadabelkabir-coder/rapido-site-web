const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 760px)');
function syncNavigation() {
  if (!toggle || !navigation) return;
  toggle.hidden = !mobile.matches;
  toggle.setAttribute('aria-expanded', 'false');
  navigation.hidden = mobile.matches;
}
if (toggle && navigation) {
  syncNavigation();
  mobile.addEventListener('change', syncNavigation);
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navigation.hidden = expanded;
  });
  navigation.addEventListener('click', (event) => {
    if (mobile.matches && event.target.closest('a')) {
      navigation.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobile.matches && !navigation.hidden) {
      navigation.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
