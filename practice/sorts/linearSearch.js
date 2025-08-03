var linearSearch = function (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target)
            return i;

    }
    return -1;
}

let arr = [1, 2, 34, 4, 5, 6, 7, 8, 8, 88, 99, 33, 5, 6, 7, 8, 5,];
let index = linearSearch(arr, 999);
console.log(index);