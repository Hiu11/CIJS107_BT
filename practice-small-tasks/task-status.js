function getTaskStatus(done) {
  return done ? "Completed" : "In progress";
}

console.log(getTaskStatus(false));
