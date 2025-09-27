const students = [{ name: "Lan", score: 8 }, { name: "An", score: 9 }];
console.log(students.toSorted((a, b) => b.score - a.score));
