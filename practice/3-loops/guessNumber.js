const prompt = require("prompt-sync")();
const randomNum = Math.floor(Math.random() * 100 + 1);
// console.log(randomNum)
let guessed;
do {
    guessed = Number(prompt("Guess the number between 1 and 100: "), 10);
    if (guessed >= 100 || guessed < 1 || isNaN(guessed)) {
        console.log("Try again between 1 and 100")
    } else {
        if (guessed < randomNum) {
            console.log("Too low")
        } else if (guessed > randomNum) {
            console.log("too high")
        } else {
            console.log("correct")
        }
    }
} while (guessed !== randomNum)