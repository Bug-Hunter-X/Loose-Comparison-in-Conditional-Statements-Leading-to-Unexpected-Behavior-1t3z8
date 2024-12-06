function foo(a, b) {
  if (a === null || b === null) {
    return null; 
  }
  return a + b;
}

console.log(foo(null, 5)); //Output: null

function fooCorrected(a, b) {
  // Use strict equality (===) to avoid unexpected behavior with 0 or false
  if (a === null || b === null) {
    return null; 
  }
  if(a === 0 || b === 0 || a === false || b === false){
    return a+b;
  }
  return a + b;
}

console.log(fooCorrected(0, 5)); // Output: 5
console.log(fooCorrected(false, 5)); // Output: 5