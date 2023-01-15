let numbers = [1.6,2.5,3,4,5,6]

function findGreatestEven(nums){
    //remember not to use Number.MIN_VALUE
    //console.log(greatNumber<0)
    let greatNumber = Number.NEGATIVE_INFINITY
    if (nums.length == 0) return 'Array Empty'
    for (let i in nums) {
        if(Number.isInteger(nums[i])){
            if (nums[i] % 2 == 0){
                if (nums[i] > greatNumber){
                    greatNumber = nums[i]
                }
            }
        }else {
            return 'Float Value Found Check Input'
        }
        
    }
    return greatNumber
}

let greatestEvenNumber = findGreatestEven(numbers)

console.log(greatestEvenNumber)

let biggestEvenNumber = (nums) => {
    let greatNumber = Number.NEGATIVE_INFINITY
    if (nums.length == 0) return 'Array Empty'
    for (let i in nums) {
        if(Number.isInteger(nums[i])){
            if (nums[i] % 2 == 0){
                if (nums[i] > greatNumber){
                    greatNumber = nums[i]
                }
            }
        }else {
            return 'Float Value Found Check Input'
        }
        
    }
    return greatNumber
}


console.log(biggestEvenNumber(numbers))

module.exports = {}
module.exports.findGreatestEven = findGreatestEven
module.exports.biggestEvenNumber = biggestEvenNumber