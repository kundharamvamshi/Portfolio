window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("topbar-onscroll", window.scrollY > 0);
});

function hidesidebar() {
  var sidebarEl = document.querySelector('.sidebar')
  sidebarEl.style.display = 'none'
}

function showsidebar() {
  var sidebarEl = document.querySelector('.sidebar')
  sidebarEl.style.display = 'flex'
}

const footerYear = document.getElementById('year')
const presentYear = new Date().getFullYear()
footerYear.textContent = " " + presentYear + " "
