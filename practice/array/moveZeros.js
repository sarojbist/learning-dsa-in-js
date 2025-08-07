let arr = [0, 2, 4, 5, 0, 6, 8, 9, 56, 0];

let removeZeros = function (arr) {
    let p = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[p] = arr[i];
            p++;
        }
    }
    // fill  remaining positions
    for (let i = p; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}

console.log(removeZeros(arr));

// Time Complexity O(n^2)
// Space Complexity O(1)