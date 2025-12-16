function countCart(cart) { return cart.reduce((total, item) => total + item.quantity, 0); }
console.log(countCart([{ quantity: 2 }, { quantity: 1 }]));
