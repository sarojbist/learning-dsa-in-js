// Example calculations to understand the logic:
// Math.trunc(720/500) => 1 (Number of Rs 500 notes in 720)
// 700 % 500 => 200 (Remaining amount after using Rs 500 notes)

const prompt = require("prompt-sync")();
let rupees = parseInt(prompt("Enter the rupees: "), 10); // Taking user input for the amount

// Checking for Rs 500 notes
if (rupees >= 500) {
    console.log("Rs 500 notes: ", Math.trunc(rupees / 500)); // Count of Rs 500 notes
    rupees = rupees % 500; // Updating remaining amount
}

// Checking for Rs 200 notes
if (rupees >= 200 && rupees < 500) {
    console.log("Rs 200 notes: ", Math.trunc(rupees / 200)); // Count of Rs 200 notes
    rupees = rupees % 200; // Updating remaining amount
}

// Checking for Rs 100 notes
if (rupees >= 100 && rupees < 200) {
    console.log("Rs 100 notes: ", Math.trunc(rupees / 100)); // Count of Rs 100 notes
    rupees = rupees % 100; // Updating remaining amount
}

// Checking for Rs 50 notes
if (rupees >= 50 && rupees < 100) {
    console.log("Rs 50 notes: ", Math.trunc(rupees / 50)); // Count of Rs 50 notes
    rupees = rupees % 50; // Updating remaining amount
}

// Checking for Rs 20 notes
if (rupees >= 20 && rupees < 50) {
    console.log("Rs 20 notes: ", Math.trunc(rupees / 20)); // Count of Rs 20 notes
    rupees = rupees % 20; // Updating remaining amount
}

// Checking for Rs 10 notes
if (rupees >= 10 && rupees < 20) {
    console.log("Rs 10 notes: ", Math.trunc(rupees / 10)); // Count of Rs 10 notes
    rupees = rupees % 10; // Updating remaining amount
}

// Checking for Rs 5 notes
if (rupees >= 5 && rupees < 10) {
    console.log("Rs 5 notes: ", Math.trunc(rupees / 5)); // Count of Rs 5 notes
    rupees = rupees % 5; // Updating remaining amount
}

// Checking for Rs 2 coins
if (rupees >= 2 && rupees < 5) {
    console.log("Rs 2 coins: ", Math.trunc(rupees / 2)); // Count of Rs 2 coins
    rupees = rupees % 2; // Updating remaining amount
}

// Checking for Rs 1 coins (remaining amount)
if (rupees >= 1) {
    console.log("Re 1 coins: ", rupees); // Count of Rs 1 coins (remaining amount)
}
