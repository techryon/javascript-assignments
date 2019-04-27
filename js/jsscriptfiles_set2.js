var numberArray = [0, 6, 4, 2, 9, 44, 23, 12];
//console.log(numberArray);

//Function to take the array as an input to take it for sorting
function printTheNumberArray(){
	
	// Condition to check if the array is empty
	if (numberArray.length == 0) {
		console.error("Pls supply a valid array with elements");
	}

	// array is not empty, proceed with sorting the array
	else if (numberArray.length != 0){
		numberArray.sort(
			function(a, b) {
				return (a-b);
			}
		);
		console.log(numberArray);
	}

	//array is not empty, algorithm to sort the array
	//else if (numberArray.length != 0) {
	//	var newNumberArray = [];
		
	//}
}

printTheNumberArray();
