let year = 2020

function isLeapYear(xYear) {
    if (xYear < 0) return 'Enter a Valid Year'
    if ((xYear % 4 == 0 && xYear % 100 != 0) || xYear % 400 == 0){
        return 'true'
    }else {
        return 'false'
    }
}

console.log(isLeapYear(year))

let checkleapYear = (xYear) => {
    if (xYear < 0) return 'Enter a Valid Year'
    return ((xYear % 4 == 0 && xYear % 100 !=0) == true || (xYear % 400 == 0) == true) ? 'true' : 'false'
}

console.log(checkleapYear(year))

module.exports = {}
module.exports.checkleapYear = checkleapYear
module.exports.isLeapYear = isLeapYear