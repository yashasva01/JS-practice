let strInput = '      Script'

function checkScript (strVal) {
    strVal = strVal.trim()
    if (strVal.length == 0) {
        return 'Enter the string'
    }else if (strVal.includes(' ') &&  strVal.lenght !=0){
        return "Enter a one word string with out spaces"
    }else if (strVal.includes('Script')){
        return 'true'
    }else {
         return 'false'
    }
}

console.log(checkScript(strInput))

let haveScript = (strVal) => {
    strVal = strVal.trim()
    if (strVal.length == 0) {
        return 'Enter the string'
    }else if (strVal.includes(' ') &&  strVal.lenght !=0){
        return "Enter a one word string with out spaces"
    }else if (strVal.includes('Script')){
        return 'true'
    }else {
         return 'false'
    }
}

console.log(haveScript(strInput))

module.exports = {}
module.exports.checkScript = checkScript
module.exports.haveScript = haveScript