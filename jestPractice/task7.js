let strArray = ['this', 'is', 'an', 'array'];

function concatArray (strVal) {
    let output = '';
    for (let i in strVal){
        if(strVal[i] == '') continue;
        let strLen = strVal[i].length;
        output = output + strVal[i].slice(1,strLen);
    }
    return output;
}

console.log(concatArray(strArray));


let joinArray = (strVal) => {
    let output = '';
    for (let i in strVal){
        if(strVal[i] == '') continue;
        let strLen = strVal[i].length;
        output = output + strVal[i].slice(1,strLen);
    }
    return output;
};

console.log(joinArray(strArray));

module.exports = {};
module.exports.concatArray = concatArray;
module.exports.joinArray = joinArray;