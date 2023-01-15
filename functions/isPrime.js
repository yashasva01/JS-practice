let number = 153
 
let isPrime = (num) => {
	for (let i =2; i <num/2; i++ ){
                if(num % i === 0){
			return false
                }
		return true
        }

}
console.log(isPrime(153))
 

let copyNumberStr = number.toString()

let isAmstrongNumber = (num) => {
	let sum = 0
        num = number.toString()
        for (let i in num){
                sum = sum+parseInt(num[i])*parseInt(num[i])*parseInt(num[i])
        }
        if (sum == num){
                return true
        }
        else{
                return false
        }
}
console.log(isAmstrongNumber(copyNumberStr))


module.exports = {}

module.exports.isPrime = isPrime;
module.exports.isAmstrongNumber = isAmstrongNumber