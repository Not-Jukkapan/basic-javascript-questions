// Count Number of Words in a String:
// Input: "The quick brown fox" → Output: 4

function countWords (str) {

    return str.split(' ').length

}


console.log(countWords("The quick brown fox")); // 4
console.log(countWords("The quick b rown fox")); // 5
console.log(countWords("The quick bro w n fox")); // 6
