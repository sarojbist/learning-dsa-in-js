const prompt = require("prompt-sync")();
let number = Number(prompt("Enter the number: "), 10);

if (isNaN(number) || (number < 0)) {
    console.log("provide a natural number dude");
} else {
    let reverse = 0;
    while (number !== 0) {
        // console.log("reverse", reverse)
        // console.log("number", number)
        reverse = reverse * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    console.log("final reversed number is: ", reverse)
}

// extract last digit of the number and run reverse = reverse *10 + last_digit_of number, where reverse number was initially 0.