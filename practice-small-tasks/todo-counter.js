const todos = [
  { title: "Read lesson", done: true },
  { title: "Submit homework", done: false },
];

console.log(todos.filter((todo) => todo.done).length);
