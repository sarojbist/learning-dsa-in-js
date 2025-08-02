var merge = function (left, right) {
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

var mergeSort = function (arr) {

    if (arr.length == 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}
let arr = [3,2,88,99,3,4,5,67,1000, 7,8,9,999,3,4,5,7,8,43,3,6,6543,2,43,56,5,4,6,54,4, 200000000000000, 20000000001];
console.log(mergeSort(arr))