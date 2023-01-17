function calculateDouble (numbers) {
    if (!Array.isArray(numbers)) {throw 'The Input type did not match the requirement';}
    return numbers.map(num => num * 2);
}

console.log(calculateDouble([1,2,3,4]));
module.exports = { calculateDouble };