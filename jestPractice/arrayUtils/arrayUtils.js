let numbersArray = [1,2,3,4,5,6,7];

let getFilteredNumbers =  (numbers) => {
    return numbers.filter( number => number % 2 == 0 );
};


let combineArrays = (Array1, Array2) => {
    return Array1.concat(Array2);
};

let getTripleElement = (numbers) => {
    return numbers.map( number =>  number = number * 3);
};

let filterTripleAndEven = (numbers) => {
    if (!Array.isArray(numbers)) {throw 'The Input type did not match the requirement';}
    let evenNumbers = getFilteredNumbers(numbers);
    let combinedNumbers = combineArrays(numbers, evenNumbers);
    let tripledArray = getTripleElement(combinedNumbers);
    return tripledArray.filter( number => number % 2 == 0);
};

console.log(filterTripleAndEven(numbersArray));


let getTripleAndEven = (numbers) => numbers.reduce((acc, item) => {
    if (item % 2 === 0){
        acc.push(item * 3);
    }
    return acc;
}, []);

console.log(getTripleAndEven(numbersArray));
module.exports = { filterTripleAndEven };