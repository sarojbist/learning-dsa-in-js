// Q: Write a recursive function to calculate the factorial of a given number.

// Time Complexity: O(N)
// Space Complexity: O(N) - each recursion adds new frame in callstack

var factorial = function(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
};

console.log(factorial(50));
