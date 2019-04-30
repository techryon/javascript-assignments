/* This exercise is to sort an array using bubble sort method*/

//The unsorted array
var unSortedNumberArray = [ 6, 4, 2, 9, 44, 23, 12];

//The variable to initate the functionly only if a number is swapped
var swapped; 
var counter = 0;
var total = 0;
// Function to sort the array
function sortAnyArray(takeAnArray){
	// Condition to check if the array is empty
	if (takeAnArray.length == 0) {
		console.error("Pls supply a valid array with elements");
	}

	else {
		//Using do while so atleast it gets executed once?
		do {
			//setting swapped to false, so it gets set to true only if it enters the loop
			swapped = false;
			
			//For loop to compare each element in the array
			//For loop takes less than the length of the array
			for (var i = 0; i < takeAnArray.length; i++){
				
				//Comparing two elements of the array
				if (takeAnArray[i] > takeAnArray[i+1]){
					
					var temp = takeAnArray[i]; //Variable to temporarily hold the i element
					
					takeAnArray[i] = takeAnArray[i+1]; //Swapping i with the next element
					
					takeAnArray[i+1] = temp; //Assigning temp to the i+1 element
					
					swapped = true // setting swapped to true
					counter = counter + 1;
					
				}
				
				
			
			}
				
		} while (swapped);
		
		console.log("Sorted Array: " +takeAnArray);
		console.log("Numbers have been swapped: " +counter);
		
	}
}
sortAnyArray(unSortedNumberArray);