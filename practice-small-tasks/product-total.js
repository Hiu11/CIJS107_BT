const cart = [
  { name: "Notebook", price: 15000, quantity: 2 },
  { name: "Pen", price: 5000, quantity: 3 },
];

console.log(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
