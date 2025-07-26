let arr = [5, 6, 7, 91, 78, 94, 2, 22];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        console.log(`at ${i} arr is ${arr}`)
        if (arr[i] < arr[j]) {
            let temp;
           
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);