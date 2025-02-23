let num1 = 5;
let num2 = 10;

// Method 1 - Using a third variable
// This method temporarily stores one value in a third variable then swaps
function swapNumsUsingTemp(a, b) {
  let c = a; // Store value of a in c
  a = b; // Assign b to a
  b = c; // Assign c (original a) to b

  console.log("Swapped a is", a);
  console.log("Swapped b is", b);
}
swapNumsUsingTemp(num1, num2);

// Method 2 - Using arithmetic operations (Sum and Difference)
// This method swaps values without using a third variable.
function swapNumsUsingSum(a, b) {
  a = a + b; // adding both, lets say 5 + 10 = 15
  b = a - b; // a was 15, 15 - 10, 5
  a = a - b; // Now a is the original b

  console.log("Swapped a is", a);
  console.log("Swapped b is", b);
}
swapNumsUsingSum(num1, num2);

// Method 3 - Using array destructuring
// This method utilizes JavaScript ES6 array destructuring to swap values easily.
function swapNumsUsingDestructure(a, b) {
  const arr = [a, b];
  [b, a] = arr;
  console.log("Swapped a is", a);
  console.log("Swapped b is", b);
}
swapNumsUsingDestructure(num1, num2);
