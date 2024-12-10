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

window.addEventListener("DOMContentLoaded", function () {
  toggleDarkMode();
});
