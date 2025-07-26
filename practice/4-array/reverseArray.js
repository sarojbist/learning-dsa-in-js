let arr = [5, 6, 7, 91, 78, 94, 2, 22, 91, 91, 91, 92];

// method I
// here we can create a empty array of the same length and keep adding the array elements on it
// let temp = []

// for (let i = 0; i < arr.length; i++) {
//     temp.unshift(arr[i]);
// }
// console.log(temp);


// method 2
let temp = new Array(arr.length);
let j = 0;

for (let i = arr.length - 1; i >= 0; i--) {
    temp[j] = arr[i];
    j++;
}
console.log("reversed array", temp)

// method 3
// now, I want to run loop starting from 0 index, and second loop from last index of array. I want to run upto both i and j are sae
// let i = 0
// let j = arr.length - 1;

// while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr)
