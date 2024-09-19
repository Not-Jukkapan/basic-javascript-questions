// Find Sum of Digits:
// Input: 1234 → Output: 10
// Hint: Continuously extract the last digit using the modulus operator (% 10), then divide the number by 10 until there are no more digits left.


























// JavaScript Example:
// function sumOfDigits(num) {
//     let sum = 0;
//     while (num > 0) {
//       sum += num % 10;
//       num = Math.floor(num / 10);
//     }
//     return sum;
//   }
  
//   console.log(sumOfDigits(1234));  // 10
  