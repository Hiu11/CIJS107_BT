function searchItems(items, keyword) {
  return items.filter((item) => item.toLowerCase().includes(keyword.toLowerCase()));
}

console.log(searchItems(["React", "Router", "State"], "ro"));
