// Find First Non-Repeating Character:
// Input: "swiss" → Output: "w"

// Hint: Use a hash map (object) to count the frequency of characters, then iterate through the string to find the first character with a count of 1.

function checkFirstNonRepeat(str) {
    // prevChar !== currentChar
    // return currentChar
    let prevChar = '';
    let currentChar = '';
    for (let index = 0; index < str.length; index++) {
        currentChar = str[index];
        if (prevChar != currentChar && index != 0) return currentChar;
        else {
            prevChar = currentChar
        }

    }
    return currentChar
}


console.log(checkFirstNonRepeat("swiss")); // "w"
console.log(checkFirstNonRepeat("sssUiss")); // "U"
console.log(checkFirstNonRepeat("wwwsix")); // "s"
