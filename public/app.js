const menuToggler = document.getElementById("menu-toggler");
const menu = document.getElementById("menu");
menuToggler.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
