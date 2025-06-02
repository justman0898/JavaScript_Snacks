function validateCard(numbers){
	for (let counter = 0; counter < numbers.length; counter++){
		if (isNaN(numbers[counter])){
		let word = "String found";	
		return word;	
		}
	}
	if (numbers[0] == 4 && numbers.length == 16){		
		let obj = {		
		isValid : true,
		issuer : "Visa",	
		};
		return obj;	
	}
	else if (numbers[0] == 5 && numbers.length == 16){
		let obj = {		
		isValid : true,
		issuer : "Mastercard",		
		};
		return obj;
	}
	else if (numbers[0] == 6 && numbers.length == 16){
		let obj = {		
		isValid : true,
		issuer : "Discover",		
		};
		return obj;
	}
	else if (numbers[0] == 3 && numbers.length == 15){
		let obj = {		
		isValid : true,
		issuer : "American Express",		
		};
		return obj;
	}
	else if ((numbers[0] < 3 || numbers[0] > 6) && (numbers.length == 16 || numbers.length == 15)){
		let obj = {		
		isValid : false,
		reason : "issuer unidentified",		
		};
		return obj;
	}
	else{
		let obj = {		
		isValid : false,
		reason : "Invalid length",		
		};
		return obj;
	}
}

let myArray = ["a",2,3,4,5,6,7,8,9,1,2,3,4,5,4];
console.log(validateCard(myArray));

