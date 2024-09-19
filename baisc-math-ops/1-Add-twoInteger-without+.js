// Add Two Integers Without Using + Operator:
// Input: (3, 5) → Output: 8
// Hint: Use bitwise operations. The ^ (XOR) operation adds the bits of two numbers without carrying, and the & (AND) operation finds the carry.


































// function addWithoutPlus(a, b) {
//     while (b !== 0) {
//       let carry = a & b;
//       a = a ^ b;
//       b = carry << 1;
//     }
//     return a;
//   }
  
//   console.log(addWithoutPlus(3, 5));  // 8
  