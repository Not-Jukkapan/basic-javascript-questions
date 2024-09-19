// Decimal to Binary Conversion:
// Input: 10 → Output: "1010"

// Hint: Repeatedly divide the number by 2, keeping track of the remainders, then reverse the order of the remainders.

























// JavaScript Example:
// function decimalToBinary(num) {
//     if (num === 0) return "0";
//     let binary = "";
//     while (num > 0) {
//       binary = (num % 2) + binary;
//       num = Math.floor(num / 2);
//     }
//     return binary;
//   }
  
//   console.log(decimalToBinary(10));  // "1010"
  