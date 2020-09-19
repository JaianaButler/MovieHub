var navbar = document.querySelector('header');

window.onscroll = function() {
  // Detect vertical scrolling
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

//*** Hamburger menu function ***//
let sideNavButton = document.querySelector(".fa-bars");
let sideNav = document.querySelector(".side-nav");
let isOpen = false;

sideNavButton.addEventListener("click", toggleSideNav);

function toggleSideNav() {
  if(!isOpen) {
    isOpen = true;
    sideNav.style.width = "60%";
  } else {
    isOpen = false;
    sideNav.style.width = "0";
  }
}
