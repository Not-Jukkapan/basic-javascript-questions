// Count Number of Vowels in a String:
// Input: "hello" → Output: 2
// Hint: Use a loop to iterate through the string and count the vowels by checking if each character is in the set of vowels (a, e, i, o, u).

function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelsCount = 0
    for (let index = 0; index < str.length; index++) {
        if (vowels.includes(str[index])) {
            ++vowelsCount
        }

    }

    return vowelsCount
}




console.log(countVowels("hello")); // 2
console.log(countVowels("oooJes")); // 4
console.log(countVowels("asdqjlx")); // 1 
