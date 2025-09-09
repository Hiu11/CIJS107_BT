const students = ["Hieu", "An", "Minh"];
const labels = students.map((name, index) => `${index + 1}. ${name}`);

console.log(labels.join("\n"));
