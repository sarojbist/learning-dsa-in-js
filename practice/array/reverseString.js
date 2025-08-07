let arr = ['s', 'a', 'r', 'o', 'j', '-', 'b', 'i', 's', 't'];

let reverseString = function (arr) {
    let mid = (arr.length - 1) / 2;

    for (let i = 0; i < mid; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;

    }
    return arr;
}
console.log(reverseString(arr));

// Time Complexity O(n)
// Space Complexity O(1)