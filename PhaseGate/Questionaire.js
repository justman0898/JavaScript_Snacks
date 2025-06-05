
function shuffleQuestions(array){
	let computersChoice = 0;
	let temp = []
	for(let counter = 0; counter < array.length; counter++){		
		computersChoice = Math.floor(Math.random()*10);
		temp[0] = array[counter];
		array[counter] = array[computersChoice];
		array[computersChoice] = temp[0];
	}
}
function printQuestion(array, choice){
	console.log(array[choice].question);
	console.log(array[choice].Options);
}

function validateAnswer(value, usersAnswer){
	result = true;	
	if(usersAnswer === value.answer){
		console.log("Correct Answer")
		result = true;
		
	}else{
		console.log("Wrong Answer")
		result = false;
	}
	return result;
}


const prompt = require('prompt-sync')();

let obj1 = {
		question : "What is the capital of Nigeria________",
		Options : "a. Lagos   b. Abuja  c. Ijebu",
		answer : "b",			
		};

let questions = [];
let obj2 = {
		question : "What is the capital of Ghana________",
		Options : "a. Accra   b. Cumaso  c. Ijebu",
		answer : "a",			
		};
let obj3 = {
		question : "What is the capital of South Africa________",
		Options : "a. Johannesburg   b. Cumaso  c. CapeTown",
		answer : "c",			
		};

let obj4 = {
		question : "What is the capital of Kenya________",
		Options : "a. Nairobi   b. Cumaso  c. CapeTown",
		answer : "a",			
		};
let obj5 = {
		question : "What is the capital of Anambra________",
		Options : "a. Nairobi   b. Awka  c. CapeTown",
		answer : "b",			
		};
let obj6 = {
		question : "What is the capital of Lagos________",
		Options : "a. Oshodi   b. Ikeja c. CapeTown",
		answer : "b",			
		};
let obj7 = {
		question : "What is the capital of United States________",
		Options : "a. Washington DC  b. Oklahoma c. White House",
		answer : "a",			
		};
let obj8 = {
		question : "What is the capital of Abia State ________",
		Options : "a. Aba   b. Umuahia c. CapeTown",
		answer : "b",			
		};
let obj9 = {
		question : "What is the capital of Adamawa________",
		Options : "a. Oshodi   b. Ikeja c. Yola",
		answer : "c",			
		};
let obj10 = {
		question : "What is the capital of France________",
		Options : "a. Paris   b. Marseille c. Lyon",
		answer : "a",			
		};



questions.push(obj1);
questions.push(obj2);
questions.push(obj3);
questions.push(obj4);
questions.push(obj5);
questions.push(obj6);
questions.push(obj7);
questions.push(obj8);
questions.push(obj9);
questions.push(obj10);


let count = 0;
let incorrectAnswer = 0;
let incorrectCount = 0;
let running = true;
let questionCount = 0;
let playAgain = true;
let answeredArray = [];
let index = 0;

while(playAgain){
	index = 0;
	count = 0;
	questionCount = 0;
	incorrectAnswer = 0;
	
	while (running){
		
		console.log("Choose a question");				
		questionChoice = (parseInt(prompt("Enter a question: ")))- 1;
		/*
		for(let counter = 0; counter < answeredArray.length; counter++){
			
			if(answeredArray[counter].question === questions[questionChoice].question){
				console.log("Enter another question");
				running = false;
				 
			}			
		}
		*/		
		printQuestion(questions, questionChoice);
		questionCount += 1
		inCorrect = true;
		while(inCorrect){
			let userAnswer = (prompt("Enter an answer: ")).toLowerCase();
			//validateAnswer(questions[questionChoice], userAnswer);
			if(validateAnswer(questions[questionChoice], userAnswer)){
				count += 1;
				//answeredArray[index] = questions[questionChoice];
				inCorrect = false;
			}else{			
				incorrectAnswer += 1;
				if(incorrectAnswer <= 2){
					continue;
				}else{
					incorrectCount += 1;
					inCorrect = false;
				}
			}
			index +=1;		
		}//end correct check
		if(questionCount === 3){
			shuffleQuestions(questions);
			running = false;
		}		
	}
	console.log(`Your total score was ${count}`);
	console.log(`Incorrect: ${incorrectCount}`);
	console.log("Do you want to play again?   1.Yes		2.No");
	let choice = parseInt(prompt("Enter a choice: "));
	if (choice === 1){
		running = true;
		//playAgain = false;

	}else if(choice === 2) {
		playAgain = false;
	}
}






