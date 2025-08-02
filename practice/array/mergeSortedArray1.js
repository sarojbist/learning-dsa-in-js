
let arr1 = [2, 4, 6, 8, 11,13,14,15,16];
let arr2 = [1, 3, 7, 9];

var mergeArray = function (left, right) {
    let i = 0;
    let j = 0;
    let newArr = [];

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            newArr.push(left[i]);
            i++;
        } else {
            newArr.push(right[j]);
            j++;
        }
    }
    return [...newArr, ...left.slice(i), ...right.slice(j)]
};

const res = mergeArray(arr1, arr2);
console.log(res)