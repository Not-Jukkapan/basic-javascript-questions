// Binary Search:
// Input: ([1, 3, 5, 7], 3) → Output: 1
// Hint: Only works on sorted arrays. Check the middle element; if it matches, return it, otherwise search in the left or right half.
// Algorithm: Divide and conquer (O(log n)).

// มีหัวมีท้ายมีกลาง
// เช็คกลางว่าใช่ป่าว ใช่ return
// ถ้าไม่ เช็คว่า มากกว่า หรือน้อยกว่ากลาง
// ขยับไปทางฝั่งที่เข้าเงื่อนไข

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if(array[middle] == target) return middle
        if(array[middle] < target) left = middle +1
        if(array[middle] > target) right = middle -1
    }
}

let s = []
s.length

console.log(binarySearch([1, 3, 5, 7], 3));        // 1
console.log(binarySearch([1, 2, 3, 4, 5, 7], 4));  // 3



