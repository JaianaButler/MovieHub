var navbar = document.querySelector('header');

window.onscroll = function() {
  // Detect vertical scrolling
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}