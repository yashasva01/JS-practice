let inputStr = 'codeacademy';

function countVowels(strVal) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    strVal = strVal.toLowerCase();
    let count  = 0;
    for (let letter of strVal.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels(inputStr));


let numOfVowels = (strVal) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    strVal = strVal.toLowerCase();
    let count  = 0;
    for (let letter of strVal.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
};

console.log(numOfVowels(inputStr));

module.exports = {};
module.exports.countVowels = countVowels;
module.exports.numOfVowels =numOfVowels;