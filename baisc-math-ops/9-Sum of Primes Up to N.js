// Sum of Primes Up to N:
// Input: 10 → Output: 17

// Hint: Use a sieve algorithm (like Sieve of Eratosthenes) to generate all primes up to n, then sum them.


























// JavaScript Example (Sieve of Eratosthenes):
// function sumOfPrimes(n) {
//     let isPrime = Array(n + 1).fill(true);
//     isPrime[0] = isPrime[1] = false;
  
//     for (let i = 2; i * i <= n; i++) {
//       if (isPrime[i]) {
//         for (let j = i * i; j <= n; j += i) {
//           isPrime[j] = false;
//         }
//       }
//     }
  
//     let sum = 0;
//     for (let i = 2; i <= n; i++) {
//       if (isPrime[i]) sum += i;
//     }
  
//     return sum;
//   }
  
//   console.log(sumOfPrimes(10));  // 17
  