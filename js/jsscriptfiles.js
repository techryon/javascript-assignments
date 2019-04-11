var names = ['Max', 'Alex', 'Rach', 'John', 'Vlad','Richard', 'Natalie', 'Craig', 'Mike', 'Brenden'];

function printNames(names){
	for (index in names) {						
		document.write(names[index]);
		document.write('<br>');
	}
}

document.write('<br>');

function assignTaskToNames (names){
	for (index in names) {
	document.write('Hello');
	document.write('<br>');
	document.write(names[index]);
	document.write('<br>');
	document.write('do something');
	document.write('<br>');
	document.write('<br>');
	}
}

document.addEventListener("DOMContentLoaded", function(event) {
	printNames(names);
	assignTaskToNames(names);
});


/*
//This loop will print all the elements from the names array
names.forEach(function printNames (name) { 
	document.write(name);
	document.write('<br>');
	});

document.write('<br>');

//This will call each element of the array and assign them a task
names.forEach(function assignTaskToNames (name){
	document.write('Hello');
	document.write('<br>');
	document.write(name);
	document.write('<br>');
	document.write('do something');
	document.write('<br>');
	document.write('<br>');
	});
	*/