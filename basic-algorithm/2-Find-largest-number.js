// Find Largest Number in Array:
// Input: [3, 5, 7, 2, 8] → Output: 8
// Hint: Iterate through the array and track the largest element.
// Algorithm: Linear search (O(n)).


function findLargestNumber(array) {
    let maxChar = 0;
    for (let index = 0; index < array.length; index++) {
        if (maxChar < array[index]) {
            maxChar = array[index]
        }
    }
    return maxChar
}


console.log(findLargestNumber([3, 5, 7, 2, 8])); // 8
console.log(findLargestNumber([3, 15, 7, 2, 8])); // 15
console.log(findLargestNumber([3, 5, 7, 2, 8, 11, 10])); // 11
