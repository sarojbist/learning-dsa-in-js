const prompt = require("prompt-sync")();
let number = Number(prompt("Enter the number: "), 10);

if(isNaN(number)) {
    console.log("provide number dude");
} else {
    if (number < 0) {
        console.log("provide positive number dude");
    } else {
        let sum = 0;
        for(let i =1; i<=number; i++ ) {
            sum += i;
        }
        console.log("the sum of n numbers is", sum)
    }
}