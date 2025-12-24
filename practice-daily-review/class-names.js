function classNames(...names) { return names.filter(Boolean).join(" "); }
console.log(classNames("btn", false, "active"));
