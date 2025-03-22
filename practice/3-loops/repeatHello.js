const prompt = require("prompt-sync")();
let number;
do {
    number = Number(prompt("Enter the number: "), 10);
} while (number !== 0)