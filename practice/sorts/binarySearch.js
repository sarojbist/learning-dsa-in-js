let arr = [
    -7, 1, 2, 3, 3, 4,
    4, 5, 6, 8, 8, 9,
    77, 77, 88
];

var binarySearch = function (arr, num) {
    let left = 0;                     
    let right = arr.length - 1;    

    while (left <= right) {
        let mediumIndex = Math.floor((left + right) / 2);

        if (arr[mediumIndex] == num) return mediumIndex;

        // If the middle element is greater than target, search the left half
        else if (arr[mediumIndex] > num) right = mediumIndex - 1;

        // If the middle element is less than target, search the right half
        else left = mediumIndex + 1;

        // Log the current sub-array being searched (left to right)
        console.log("here array from left to right is", arr.slice(left, right +1), left, right + 1);
    }

    return -1;
};

const index = binarySearch(arr, 88);

console.log(index);
