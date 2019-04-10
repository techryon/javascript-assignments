var names = ['Max', 'Alex', 'Rach', 'John', 'Vlad','Richard', 'Natalie', 'Craig', 'Mike', 'Brenden'];
		
//This loop will print all the elements from the names array
for (index in names) { 
	document.write(names[index]);
	document.write('<br>');
	}

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