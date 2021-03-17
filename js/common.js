document.addEventListener("DOMContentLoaded", function () {
  let btnMenu = document.querySelector(".header__mobile-menu");
  let mobileMenu = document.querySelector(".nav-mobile");

  btnMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("nav-mobile--show");
    document.body.classList.toggle("no-scroll");
  })
});