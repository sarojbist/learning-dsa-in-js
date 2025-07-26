let arr = [4, 2, 1, 3];

var selectionSort = function (arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let smallest = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        if (i !== smallest) {
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;
        }
    }
    return arr;
};

const sorted = selectionSort(arr);

console.log(sorted)