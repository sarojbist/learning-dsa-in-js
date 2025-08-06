let arr = [1, 1, 2, 2, 3];

let removeElement = function (arr, tar) {
    let x = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== tar) {
            arr[x] = arr[i];
            x++; // Move the write pointer forward
        }
        // console.log('array', arr, 'at', i)
    }

    // At this point, first 'x' elements of arr contain all values != tar
    console.log("Updated array (first k elements):", arr.slice(0, x));

    // Return count of valid (non-target) elements
    return x;
}

console.log(removeElement(arr, 1));
