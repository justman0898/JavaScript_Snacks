const prompt = require('prompt-sync')();

let minuend = (Math.floor(Math.random() * 10) + 5);
let subtrahend = (Math.floor(Math.random() * 5));
let result = minuend - subtrahend;

//let answer = parseInt(prompt("Enter an answer"));
let correctCount = 0;
let newQuestionCount = 0;
let wrongCount = 0;

isRunning = true;
while(isRunning){
	//collect input
	minuend = (Math.floor(Math.random() * 10) + 5);
	subtrahend = (Math.floor(Math.random() * 5));
	newQuestionCount++;
	result = minuend - subtrahend;
	console.log(minuend + " - " + subtrahend + " :" );
	answer = parseInt(prompt("Enter an answer: "));
	if (answer == result){
		correctCount++;		
	}		
	else{	
		answer = parseInt(prompt("Enter an answer: "));
		if (answer == result){
		correctCount++;		
		}else{
		wrongCount++;
		}
				
	} 	
	
	if (newQuestionCount == 10){
		break;
	}
}
console.log("Your total score was " + correctCount)
