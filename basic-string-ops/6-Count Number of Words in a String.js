// Count Number of Words in a String:
// Input: "The quick brown fox" → Output: 4

// Hint: Use the split() method with space as the delimiter to split the string into an array of words, then return the length of the array.

function countWords (str) {

    return str.split(' ').length

}


console.log(countWords("The quick brown fox")); // 4
console.log(countWords("The quick b rown fox")); // 5
console.log(countWords("The quick bro w n fox")); // 6
