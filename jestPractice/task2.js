let number = -3333.333;

function checkAlldigitSame(num){
    if (Number.isInteger(num)){
        if (num < 0 )return 'Negative Numbers Not Supported';
        let numStr = num.toString();
        let lenNum = numStr.length;

        if (lenNum < 2) return false;
        let first = numStr[0];

        for (let i in numStr){
            if (numStr[i] === first) {
                first = numStr[i];
                continue;
            }else {
                return false;
            }
        }
        return true;
    }else {
        return 'Float Values Not Supported';
    }
}
let checkNum = checkAlldigitSame(number);
console.log(checkNum);


let isSameDigits = (num) => {
    if (Number.isInteger(num)){
        if (num < 0 )return 'Negative Numbers Not Supported';
        let numStr = num.toString();
        let lenNum = numStr.length;

        if (lenNum < 2) return false;
        let first = numStr[0];

        for (let i in numStr){
            if (numStr[i] === first) {
                first = numStr[i];
                continue;
            }else {
                return false;
            }
        }
        return true;
    }else {
        return 'Float Values Not Supported';
    }
    
};
console.log(isSameDigits(number));


module.exports = {};
module.exports.checkAlldigitSame = checkAlldigitSame;
module.exports.isSameDigits = isSameDigits;