window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("topbar-onscroll", window.scrollY > 0);
});