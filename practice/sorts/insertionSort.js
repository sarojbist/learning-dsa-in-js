var insertionSort = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let prev = i - 1;

        while (prev >= 0 && arr[prev] > current) {
            arr[prev + 1] = arr[prev];
            prev--;
        }

        arr[prev + 1] = current;
    }
    return arr;
};

let arr = [2, 1, 34, 4, 5, 6, 7, 8, 8, 88, 99, 33, 5, 6, 7, 8, 5];
console.log(insertionSort(arr));



// Time Complexity: O(N^2)
// Space Complexity: O(1)