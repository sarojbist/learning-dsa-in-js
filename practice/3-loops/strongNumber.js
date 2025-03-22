const prompt = require("prompt-sync")();
let number = Number(prompt("Enter the number: "), 10);

function factorial(num) {
    if (num === 1 || num === 0) return 1;
    return num * factorial(num - 1);
}

if (isNaN(number) || (number < 0)) {
    console.log("provide a natural number dude");
} else {
    let originalNumber = number; // Store the original number for comparison
    let sum = 0
    while (number > 0) {
        sum += factorial(number % 10); // Get the last digit and add its factorial
        number = Math.floor(number / 10) // Remove the last digit
    }
    if (sum === originalNumber) {
        console.log(`${originalNumber} is a Strong number.`);
    } else {
        console.log(`${originalNumber} is NOT a Strong number.`);
    }
}

