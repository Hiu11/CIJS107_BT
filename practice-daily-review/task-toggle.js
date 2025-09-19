function toggleTask(task) { return { ...task, done: !task.done }; }
console.log(toggleTask({ title: "Study", done: false }));
