let number = 3333

function checkAlldigitSame(num){
    let numStr = num.toString()
    let lenNum = numStr.length

    if (lenNum < 2) return false;
    let first = numStr[0]
    //console.log(first)
    for (let i in numStr){
        if (numStr[i] === first) {
            first = numStr[i]
            continue
        }else {
            return false;
        }
    }
    return true
}
let checkNum = checkAlldigitSame(number)
console.log(checkNum)


let isSameDigits = (num) => {
    let numStr = num.toString()
    let lenNum = numStr.length

    if (lenNum < 2) return false;
    let first = numStr[0]
    //console.log(first)
    for (let i in numStr){
        if (numStr[i] === first) {
            first = numStr[i]
            continue
        }else {
            return false;
        }
    }
    return true
}
console.log(isSameDigits(number))