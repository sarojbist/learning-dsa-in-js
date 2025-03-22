const prompt = require("prompt-sync")();
let number = Number(prompt("Enter the number to be checked: "), 10);

function factorial(num) {
    if (num === 1 || num === 0) return 1;
    return num * factorial(num - 1);
}

if (isNaN(number) || (number < 0)) {
    console.log("provide a natural number dude");
} else {
    let sum = 0
    let i = 1;
    while (sum < number) {
        console.log("sum and i", sum, i);
        sum += factorial(i);
        if (sum === number) {
            console.log("yes, it is the sum of factorial values.");
            break;
        }
        i++;
    }
    if (sum !== number) {
        console.log("No, the number is not the sum of factorial values.");
    }
}

