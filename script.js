function toggleDarkMode() {
  const myButton = document.querySelector("#toogleBackground");
  const body = document.querySelector("body");

  if (myButton) {
    function toggleBackground() {
      body.classList.toggle("ClairSombre");
    }
    myButton.addEventListener("click", toggleBackground);
  }
}

function toggleMobileNav() {
  const buttonAction = document.querySelector(".menu");
  const navMain = document.querySelector("nav");

  if (buttonAction) {
    buttonAction.addEventListener("click", function () {
      navMain.classList.toggle("menu-open");
    });
  }
}

window.addEventListener("DOMContentLoaded", function () {
  toggleDarkMode();
  toggleMobileNav();
});
