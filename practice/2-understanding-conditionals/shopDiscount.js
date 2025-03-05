// function showAmtAfterDis(disPer, totalAmt) {
//     console.log("Amount After Discount is", Math.round(totalAmt - ((disPer * totalAmt) / 100)));
// }

// const prompt = require("prompt-sync")();

// const num = parseInt(prompt("Enter your number: "));

// if (isNaN(num)) {
//     console.log("Provide a Number please");
// }
// else if (num > 0 && num <= 5000) {
//     showAmtAfterDis(0, num)
// } else if (num > 5000 && num <= 7000) {
//     showAmtAfterDis(5, num)
// }
// else if (num > 7000 && num <= 9000) {
//     showAmtAfterDis(10, num);
// }
// else {
//     showAmtAfterDis(20, num);
// }


// using switch
const prompt = require("prompt-sync")();

function showAmtAfterDis(disPer, totalAmt) {
    console.log("Amount After Discount is", Math.round(totalAmt - ((disPer * totalAmt) / 100)));
}

const num = parseInt(prompt("Enter your number: "), 10);

if (isNaN(num)) {
    console.log("Provide a valid number please");
} else {
    switch (true) { 
        case (num > 0 && num <= 5000):
            showAmtAfterDis(0, num);
            break;
        case (num > 5000 && num <= 7000):
            showAmtAfterDis(5, num);
            break;
        case (num > 7000 && num < 9000):
            showAmtAfterDis(10, num);
            break;
        case (num >= 9000):
            showAmtAfterDis(20, num);
            break;
        default:
            console.log("Provide a valid number please");
    }
}

