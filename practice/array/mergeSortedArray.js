/*
🧾 Question:
You are given two sorted arrays:
  - `arr1` of size m + n, where the first m elements are valid and the last n are empty (0s or placeholders).
  - `arr2` of size n, fully filled with sorted elements.

Write a function to merge `arr2` into `arr1` so that `arr1` becomes a single sorted array of size m + n.

Example:
Input:
  arr1 = [2, 4, 6, 8, 0, 0, 0, 0], m = 4
  arr2 = [1, 3, 7, 9], n = 4

Output:
  [1, 2, 3, 4, 6, 7, 8, 9]
*/

let arr1 = [2, 4, 6, 8, 0, 0, 0, 0];
let arr2 = [1, 3, 7, 9];

var mergeArray = function (arr1, m, arr2, n) {
    // Create a copy of the first m elements of arr1
    let arr1Copy = arr1.slice(0, m);

    let p1 = 0; // Pointer for arr1Copy
    let p2 = 0; // Pointer for arr2

    for (let i = 0; i < m + n; i++) {
        // Choose the smaller element from arr1Copy or arr2 and place into arr1
        if (p1 < m && (p2 >= n || arr1Copy[p1] < arr2[p2])) {
            arr1[i] = arr1Copy[p1];
            p1++;
        } else {
            arr1[i] = arr2[p2];
            p2++;
        }
    }

    console.log(arr1);
};

mergeArray(arr1, 4, arr2, 4);


// Time Complexity: O(m + n)
// Space Complexity: O(m)  // because we used arr1Copy of size m

