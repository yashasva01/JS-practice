let inputStr = 'codeacademy'

function countVowels(strVal) {
    let count = strVal.match(/[aeiou]/gi).length
    return count
}

console.log(countVowels(inputStr))


let numOfVowels = (strVal) => {
    let count = strVal.match(/[aeiou]/gi).length
    return count
}

console.log(numOfVowels(inputStr))