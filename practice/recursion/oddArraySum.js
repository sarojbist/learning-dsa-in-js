// Q: Write a recursive function to calculate the sum of all odd numbers in a given array.


let arr = [
    1, 2, 3, 4
];
var oddSum = function (arr, lastIndex) {
    if (lastIndex === 0) {
        // if(arr[0] % 2 == 0) {
        //     return 0;
        // } else {
        //     return arr[0];
        // }
        return arr[0] % 2 == 0 ? 0 : arr[0];
    } 

    let add = 0;
    if(arr[lastIndex] % 2 !== 0) add = arr[lastIndex];
    return add + oddSum(arr, lastIndex - 1)
};
let lastIndex = arr.length - 1;
const sum = oddSum(arr, lastIndex);
console.log(sum)

// Time Complexity: O(N)
// Space Complexity: O(N)