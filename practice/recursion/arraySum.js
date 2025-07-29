let arr = [
    1, 2, 3, 4, 5, -5
];

// var arraySum = function (arr, len) {
//     if(len === 1) return arr[0];
//    return arr[len-1] + arraySum(arr, len-1)
// };
// let len = arr.length;
// const sum = arraySum(arr, len);

// console.log(sum);

var arraySum = function (arr, lastIndex) {
    console.log(lastIndex)
    if (lastIndex === 0) return arr[0]

    return arr[lastIndex] + arraySum(arr, lastIndex - 1)

};
let lastIndex = arr.length - 1;
const sum = arraySum(arr, lastIndex);

console.log(sum);