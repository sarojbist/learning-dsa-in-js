let arr = [1,1,2,2,3,3,4,4,5,6,6,7];

let removeDuplicates = function(arr) {
    let x = 0;

    for(i = 0; i< arr.length; i++) {
     if(arr[i] > arr[x]) {
        arr[x+1] = arr[i];
        x++;
     }
    }
    console.log(arr);
}
removeDuplicates(arr);