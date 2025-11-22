function isStudent(user) { return user?.role === "student"; }
console.log(isStudent({ role: "student" }));
