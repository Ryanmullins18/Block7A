const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  // Update the $dark-mode variable when the button is clicked
  //$dark-mode; body.classList.contains("dark-mode");
});