// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// We can't sell first and buy later

let prices = [67, 8, 2, 3, 4, 5, 8];

let buyAndSell = function (arr) {
    let buy = 0;
    let sell = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[buy]) {
            buy = i;
        } else if (arr[i] > arr[sell] && i > buy) {
            sell = i;
        }
    }
    if (arr[buy] === arr[sell]) return -1;

    else return arr[sell] - arr[buy];

    // brute force approach
    // let buyIndex = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] < arr[buyIndex]) buyIndex = i;
    // }
    // let sellIndex = buyIndex + 1;
    // for (let j = buyIndex + 1; j < arr.length - 1 - buyIndex; j++) {
    //     if (arr[sellIndex] > arr[buyIndex]) sellIndex = j;
    // }
    // if (arr[sellIndex] - arr[buyIndex] < 0) return -1
    // else return arr[sellIndex] - arr[buyIndex];

}
console.log(buyAndSell(prices));