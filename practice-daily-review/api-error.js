function getErrorMessage(error) { return error?.message || "Something went wrong"; }
console.log(getErrorMessage(null));
