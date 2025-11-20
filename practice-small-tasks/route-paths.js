const routes = ["/", "/login", "/profile"];

console.log(routes.map((path) => ({ path, label: path === "/" ? "Home" : path.slice(1) })));
