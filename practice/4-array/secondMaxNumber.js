let arr = [5, 6, 7, 91, 78, 94, 2, 22, 91, 91, 91, 92];

let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for (let i = 3; i < arr.length; i++) {
    if (arr[i] > max) {
        sMax = max;
        max = arr[i];
    } else if (arr[i] > sMax && max !== arr[i]) {
        sMax = arr[i];
    }
}
console.log(sMax)