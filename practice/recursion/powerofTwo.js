// Q: Write a recursive function to check if a given number is a power of 2.

// Time Complexity: O(log N) ---one operation per halving
// Space Complexity: O(log N)

const isPower = function (num) {
    if (num < 1) return false;

    if (num === 1) return true;

    if (num % 2 !== 0) return false;

    return isPower(num / 2);
};

console.log(isPower(512)); // true
