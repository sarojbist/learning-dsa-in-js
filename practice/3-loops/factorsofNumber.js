const prompt = require("prompt-sync")();
let number = Number(prompt("Enter the number: "), 10);

if (isNaN(number) || (number < 0)) {
    console.log("provide a natural number dude");
} else {
    console.log("The possible factors of number are");
    let sqrRoot = Math.floor(Math.sqrt(number));
    for (let i = 1; i <= sqrRoot; i++) {
        if(number % i === 0) {
        console.log(i);
        if(i !== (number/i)) {
            console.log(number / i);
        }
       }
    }
}
