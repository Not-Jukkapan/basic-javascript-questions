// Palindrome Check:
// Input: "madam" → Output: True
// Input: "hello" → Output: False
// Hint: Reverse the string and compare it to the original. If both are the same, it's a palindrome.
// Algorithm: Use two-pointer or string reversal methods.

// Method
function palindrome(str) {
    return str === str.split('').reverse().join('')
}



console.log(palindrome("madam")); // True
console.log(palindrome("hello")); // False