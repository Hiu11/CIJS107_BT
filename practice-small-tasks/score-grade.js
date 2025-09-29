function getGrade(score) {
  if (score >= 8) return "A";
  if (score >= 6.5) return "B";
  if (score >= 5) return "C";
  return "D";
}

console.log(getGrade(7));
