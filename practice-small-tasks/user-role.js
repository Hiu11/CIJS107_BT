function canOpenAdmin(user) {
  return user?.role === "admin";
}

console.log(canOpenAdmin({ role: "student" }));
