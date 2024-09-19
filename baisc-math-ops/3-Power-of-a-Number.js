// Power of a Number (Exponentiation):
// Input: (2, 3) → Output: 8

// Hint: Use a loop to multiply the base n times, or use a recursive approach. For optimization, use exponentiation by squaring for faster calculations.




























// function power(base, exp) {
//     if (exp === 0) return 1;
//     let half = power(base, Math.floor(exp / 2));
//     if (exp % 2 === 0) return half * half;
//     return base * half * half;
//   }
  
//   console.log(power(2, 3));  // 8
  