const division = (number1, number2) => {
    if(number2 === 0){
        throw new Error('Denominator can not have value 0');
    }
    return number1 / number2;
};
console.log(division (10 , 2));
console.log(10 / 0);


module.exports = { division };