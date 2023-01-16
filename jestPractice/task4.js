let strArray = ['we', 'love', 'code', 'academy', 'dacaemy'];

function longestWord (strArr) {
    let longest = '';
    for(let i in strArr) {
        if (strArr[i].length > longest.length){
            longest = strArr[i];
        }else if ( strArr[i].length == longest.length ) {
            if (strArr[i] < longest){
                longest = strArr[i];
            }
        }
    }
    return longest;
}

let outWord = longestWord(strArray);

console.log(outWord);

let longestStr = (strArr) => {
    let longest = '';
    for(let i in strArr) {
        if (strArr[i].length > longest.length){
            longest = strArr[i];
        }else if (strArr[i].length == longest.length){
            if (strArr[i] < longest){
                longest = strArr[i];
            }
        }
    }
    return longest;
};

let printMessage = longestStr(strArray);

console.log(printMessage);


module.exports = {};
module.exports.longestWord = longestWord;
module.exports.longestStr = longestStr;