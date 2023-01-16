let numbers = [1,5,3,5];

function findGreatestEven(nums){
    //remember not to use Number.MIN_VALUE
    let greatNumber = Number.NEGATIVE_INFINITY;
    if (nums.length == 0) return 'Array Empty';
    for (let i in nums) {
        if(Number.isInteger(nums[i])){
            if (nums[i] % 2 == 0){
                if (nums[i] > greatNumber){
                    greatNumber = nums[i];
                }
            }
        }else {
            return 'Float Value Found Check Input';
        }
        
    }
    if (greatNumber == Number.NEGATIVE_INFINITY) return 'No even integer in the Array';
    return greatNumber;
}

let greatestEvenNumber = findGreatestEven(numbers);

console.log(greatestEvenNumber);

let biggestEvenNumber = (nums) => {
    let greatNumber = Number.NEGATIVE_INFINITY;
    if (nums.length == 0) return 'Array Empty';
    for (let i in nums) {
        if(Number.isInteger(nums[i])){
            if (nums[i] % 2 == 0){
                if (nums[i] > greatNumber){
                    greatNumber = nums[i];
                }
            }
        }else {
            return 'Float Value Found Check Input';
        }
        
    }
    if (greatNumber == Number.NEGATIVE_INFINITY) return 'No even integer in the Array';
    return greatNumber;
};


console.log(biggestEvenNumber(numbers));

module.exports = {};
module.exports.findGreatestEven = findGreatestEven;
module.exports.biggestEvenNumber = biggestEvenNumber;