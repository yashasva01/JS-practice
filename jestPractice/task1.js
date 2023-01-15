let numbers = [1,2,3,4,5]

function findGreatestEven(nums){
    let greatNumber = Number.MIN_VALUE
    for (let i in nums) {
        if (nums[i] % 2 == 0){
            if (nums[i] > greatNumber){
                greatNumber = nums[i]
            }
        }
    }
    return greatNumber
}

let greatestEvenNumber = findGreatestEven(numbers)

console.log(greatestEvenNumber)

let biggestEvenNumber = (nums) => {
    let greatNumber = Number.MIN_VALUE
    for (let i in nums) {
        if (nums[i] % 2 == 0){
            if (nums[i] > greatNumber){
                greatNumber = nums[i]
            }
        }
    }
    return greatNumber
}


console.log(biggestEvenNumber(numbers))

module.exports = {}
module.exports.findGreatestEven = findGreatestEven
module.exports.biggestEvenNumber = biggestEvenNumber