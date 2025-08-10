const menuBtn = document.getElementById("menu-btn");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});
