var names = ['Tuna', 'Chip', 'Anh'];

names.forEach(function (name) {
	console.log(name);
})

names.forEach((name) => {
	console.log('arrowFunc' + name);
})

var returnName = (name) => name + '!';
console.log(returnName(names));