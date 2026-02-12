const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark") {
  body.classList.add("dark");
}

function setThemeButtonText() {
  const isDark = body.classList.contains("dark");
  themeToggle.textContent = isDark ? "Light" : "Dark";
}

setThemeButtonText();

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  setThemeButtonText();
});

document.getElementById("year").textContent = new Date().getFullYear();
