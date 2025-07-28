let arr = [4, 2, 1, 3, 8, 9, -7, 88, 77, 8, 3, 4, 5, 6, 77];

var bubbleSort = function (arr) {
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }
    return arr;
};

const sorted = bubbleSort(arr)

console.log(sorted)
