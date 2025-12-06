async function fetchUsers() {
  const response = await fetch("/api/users");
  return response.json();
}

fetchUsers().then(console.log);
