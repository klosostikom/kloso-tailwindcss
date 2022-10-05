//navbar
window.onscroll = function () {
  const header = document.querySelector("nav");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navbar-menu");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
  navMenu.classList.add("shownav");
});
