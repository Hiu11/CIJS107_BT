function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

function readTheme() {
  return localStorage.getItem("theme") || "light";
}
