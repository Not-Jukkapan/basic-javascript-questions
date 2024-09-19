// Square Root Without Built-In Function:
// Input: 25 → Output: 5
// Hint: Use binary search to find the square root, or use Newton's method (successive approximations).






























// JavaScript Example (Binary Search):
// function sqrt(num) {
//     if (num === 0) return 0;
//     let low = 1, high = num, result;
//     while (low <= high) {
//       let mid = Math.floor((low + high) / 2);
//       if (mid * mid === num) return mid;
//       if (mid * mid < num) {
//         low = mid + 1;
//         result = mid;
//       } else {
//         high = mid - 1;
//       }
//     }
//     return result;
//   }
  
//   console.log(sqrt(25));  // 5
  