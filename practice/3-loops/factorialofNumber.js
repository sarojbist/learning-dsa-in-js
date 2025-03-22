const prompt = require("prompt-sync")();
let number = Number(prompt("Enter the number: "), 10);

if(isNaN(number)) {
    console.log("provide number dude");
} else {
    if (number < 0) {
        console.log("provide positive number dude");
    } else {
        let factorial = 1;
        for(let i =1; i<=number; i++ ) {
            factorial *= i;
        }
        console.log("the sum of n numbers is", factorial)
    }
}