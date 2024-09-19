// Find First Non-Repeating Character:
// Input: "swiss" → Output: "w"

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
