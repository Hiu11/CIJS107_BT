function canLogin(email, password) {
  return email.includes("@") && password.length >= 6;
}

console.log(canLogin("student@example.com", "123456"));
