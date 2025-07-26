let arr = [5, 6, 7, 91, 78, 94, 2, 22, 91, 91, 91, 92];

let max = arr[0]; //assuming 1st is max array

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > max) {
        max = arr[i]; // changing max element
    }
}
console.log('The max arr element is', max)