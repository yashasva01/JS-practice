let number = 153
 
let isPrime = (num) => {
	for (let i =2; i <number/2; i++ ){
                if(num % i === 0){
			return false
                }
		return true
        }

}
console.log(isPrime(number))

let copyNumberStr = number.toString()

let isAmstrongNumber = (num) => {
	let sum = 0
        for (let i in num){
                sum = sum+parseInt(num[i])*parseInt(num[i])*parseInt(num[i])
        }
        if (sum == copyNumberStr){
                return true
        }
        else{
                return false
        }
}
console.log(isAmstrongNumber(copyNumberStr))
