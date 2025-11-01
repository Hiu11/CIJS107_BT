function routeLabel(path) { return path === "/" ? "Home" : path.replace("/", ""); }
console.log(routeLabel("/profile"));
