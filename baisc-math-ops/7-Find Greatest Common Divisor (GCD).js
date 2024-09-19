// Find Greatest Common Divisor (GCD):
// Input: (8, 12) → Output: 4
// Hint: Use the Euclidean algorithm: repeatedly apply GCD(a, b) = GCD(b, a % b) until b == 0.





























// JavaScript Example:
// function gcd(a, b) {
//     while (b !== 0) {
//       let temp = b;
//       b = a % b;
//       a = temp;
//     }
//     return a;
//   }
  
//   console.log(gcd(8, 12));  // 4
  