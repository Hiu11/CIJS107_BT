function buildQuery(params) { return new URLSearchParams(params).toString(); }
console.log(buildQuery({ page: 1, q: "react" }));
