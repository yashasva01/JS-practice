let strInput = ''

function convertCase (strVal) {
    if (typeof strVal != "string") return 'The input type is not string check the input again'
    if (!isNaN(strVal) && !isNaN(parseFloat(strVal))) return 'The input is a number cant change the case of the number'
    let output = ''
    if (strVal.trim() === '') return 'Can not enter empty string'
    for (let i in strVal) {
        if (strVal[i] == strVal[i].toUpperCase()) {
            output = output + strVal[i].toLowerCase()
        }else if (strVal[i] == strVal[i].toLowerCase()) {
            output = output + strVal[i].toUpperCase()
        }
    }
    return output
}

let outMessage = convertCase(strInput)

console.log(outMessage)

changeCase = (strVal) => {
    if (typeof strVal != "string") return 'The input type is not string check the input again'
    if (!isNaN(strVal) && !isNaN(parseFloat(strVal))) return 'The input is a number cant change the case of the number'
    let output = ''
    if (strVal.trim() === '') return 'Can not enter empty string'
    for (let i in strVal) {
        if (strVal[i] == strVal[i].toUpperCase()) {
            output = output + strVal[i].toLowerCase()
        }else if (strVal[i] == strVal[i].toLowerCase()) {
            output = output + strVal[i].toUpperCase()
        }
    }
    return output
}
 
let printMessage = changeCase(strInput)
console.log(printMessage)

module.exports = {}
module.exports.changeCase = changeCase
module.exports.convertCase = convertCase