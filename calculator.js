let left_operands = 5;
let right_operands = 7;
let result = 0;

let operand = "%";

switch(operand) {

	case "+" : {
		result = right_operands +  left_operands;
		console.log(result);
		break;
	}
	case "-" : {
		result = right_operands -  left_operands;
		console.log(result);
		break;
	}
	case "*" : {
		result = right_operands -  left_operands;
		console.log(result);
		break;
	}
	case "/":{
		result = right_operands -  left_operands;
		console.log(result);
		break;	
	}
	default : {
		console.log(NaN);
	}	

}
