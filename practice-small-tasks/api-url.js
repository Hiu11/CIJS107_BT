function buildUrl(baseUrl, path) {
  return `${baseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

console.log(buildUrl("http://localhost:3000/", "/users"));
