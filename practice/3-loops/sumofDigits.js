const prompt = require("prompt-sync")();
let number = Number(prompt("Enter the number: "), 10);

if (isNaN(number) || (number < 0)) {
    console.log("provide a natural number dude");
} else {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    console.log(sum)
}
