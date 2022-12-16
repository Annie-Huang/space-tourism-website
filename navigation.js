// when someone clicks the hamburger button
// if the nav is closed, open it
// if the nav is open, close it.

const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visiblity = nav.getAttribute('data-visible');

  // attribute value is string
  if (visiblity === 'false') {
    nav.setAttribute('data-visible', true);

    // I think it is wrong, should be set in the .mobile-nav-toggle span level
    navToggle.setAttribute('aria-expanded', true);
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});
