function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause unexpected behavior when called with 0 or false
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: null
console.log(foo(0, 5)); // Output: null
console.log(foo(false, 5)); //Output: null