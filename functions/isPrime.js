let number = 153
let isPrimeNumber


function isPrimeNum(num){
	for (let i =2; i <number/2; i++ ){
		if(num % i === 0){
			isPrimeNumber = false
			break;
	
		}
	}
	isPrimeNumber = true
console.log(isPrimeNumber)
}

let isAmstrongNumber
let copyNumberStr = number.toString()
function isAmstrong(num){
	let sum = 0
	for (let i in num){
		sum = sum+parseInt(num[i])*parseInt(num[i])*parseInt(num[i])
	}
	if (sum == copyNumberStr){
		isAmstrongNumber = true
	}
	else{
		isAmstrongNumber = false
	}
	console.log(isAmstrongNumber)
}
isPrimeNum(number)
isAmstrong(copyNumberStr)
