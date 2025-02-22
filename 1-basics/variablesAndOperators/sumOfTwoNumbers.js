// simple method
const a = 5;
const b = 10;

console.log("The sum of a and b is ", a + b);

// method - taking input from user
const prompt = require("prompt-sync")();
const firstNum = Number(prompt("Enter First Number: "));
const secondNum = parseInt(prompt("Enter Second Number: "));

console.log("The sum of Numbers is", firstNum + secondNum);
