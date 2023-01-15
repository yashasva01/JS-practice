let inputStr = 'CodEAcademy'

function replaceChar (strVal) {
    let output = ''
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    if (strVal.length == 0) return 'Do not enter empty string'
    if (strVal.includes(' ')){
        return 'Do not include spaces'
    }
    for (let i in strVal) {
    
        if (strVal[i] == strVal[i].toUpperCase()){
            let currentLetter = letters.indexOf(strVal[i].toLowerCase())
            let newIndex = (currentLetter + 1) % 26
            output = output + letters[newIndex].toUpperCase(0)
        }else if (strVal[i] == strVal[i].toLowerCase()) {
            let currentLetter = letters.indexOf(strVal[i])
            let newIndex = (currentLetter + 1) % 26
            output = output + letters[newIndex].toLowerCase()
        }
    }
    return output
}
console.log(replaceChar(inputStr))

let changeChar = (strVal) => {
    let output = ''
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    if (strVal.length == 0) return 'Do not enter empty string'
    if (strVal.includes(' ')){
        return 'Do not include spaces'
    }
    for (let i in strVal) {
    
        if (strVal[i] == strVal[i].toUpperCase()){
            let currentLetter = letters.indexOf(strVal[i].toLowerCase())
            let newIndex = (currentLetter + 1) % 26
            output = output + letters[newIndex].toUpperCase(0)
        }else if (strVal[i] == strVal[i].toLowerCase()) {
            let currentLetter = letters.indexOf(strVal[i])
            let newIndex = (currentLetter + 1) % 26
            output = output + letters[newIndex].toLowerCase()
        }
    }
    return output
}

console.log(changeChar(inputStr))

module.exports = {}
module.exports.replaceChar = replaceChar
module.exports.changeChar = changeChar