const prompt = require("prompt-sync")();
let number = Number(prompt("Enter the number: "), 10);

if (isNaN(number) || (number < 0)) {
    console.log("provide a natural number dude");
} else {
    console.log("The prime numbers upto given numbers are");
    for (let i = 2; i <= number; i++) {
        let prime = true;
        for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            console.log(i);
        }
    }
}