const prompt = require("prompt-sync")();
let unit = Number(prompt("Enter the Unit: "), 10);

// ------------------Method I --------------------------
let billAmount = 0;

if(unit > 400) {
    let applicableAmt = unit - 400;
    billAmount += applicableAmt * 13;
    unit = 400;
}
if(unit <= 400 && unit > 200) {
    let applicableAmt = unit - 200;
    billAmount += applicableAmt * 8;
    unit = 200;
}
if(unit <= 200 && unit > 100) {
    let applicableAmt = unit - 100;
    billAmount += applicableAmt * 6;
    unit = 100;
}
billAmount += unit * 4.2;
console.log("The bill is:", billAmount)

// ------------------Method I Ends--------------------------




// ------------------Method II --------------------------
// function findTotalPrice(unit) {
//     let billAmount = 0;
//     if (unit > 400) {
//         let applicableAmt = unit - 400;
//         billAmount = billAmount + 13 * applicableAmt;
//         billAmount = billAmount + findTotalPrice(unit - applicableAmt);
//     } else if (unit <= 400 && unit > 200) {
//         let applicableAmt = unit - 200; //50
//         billAmount = billAmount + 8 * applicableAmt; //0 + 50 * 8
//         billAmount = billAmount + findTotalPrice(unit - applicableAmt); // 0 + fn(250-50)
//     } else if (unit <= 200 && unit > 100) {
//         let applicableAmt = unit - 100;
//         billAmount = billAmount + 6 * applicableAmt;
//         billAmount = billAmount + findTotalPrice(unit - applicableAmt);
//     } else if (unit <= 100 && unit > 0) {
//         billAmount = billAmount + 4.2 * unit;
//     } 
//     return billAmount;
// }

// console.log("The total payable bill is: ", findTotalPrice(unit));

// ------------------Method II Ends--------------------------