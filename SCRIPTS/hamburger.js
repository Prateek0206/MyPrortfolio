const hamburgerIcon = document.querySelector(".js-hamburger-menu svg");
const hamMenu = document.querySelector(".js-ham-nav-links");
const closeButtonSvg = document.querySelector(".js-ham-nav-links svg");

const mainContainer = document.querySelector(".main-container");
hamburgerIcon.addEventListener("click", () => {
  hamMenu.classList.add("ham-nav-links-active");
  mainContainer.classList.add("main-container-inactive");
});

closeButtonSvg.addEventListener("click", () => {
  hamMenu.classList.remove("ham-nav-links-active");
  mainContainer.classList.remove("main-container-inactive");
});
