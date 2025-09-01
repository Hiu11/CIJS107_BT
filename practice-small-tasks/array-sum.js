function sumNumbers(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sumNumbers([2, 4, 6]));
