let strInput = 'javaScript'

function checkScript (strVal) {
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