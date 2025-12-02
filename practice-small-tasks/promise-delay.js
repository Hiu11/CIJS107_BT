function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(100).then(() => console.log("done"));
