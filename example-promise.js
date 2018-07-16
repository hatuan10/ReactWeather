// function getTempCallback (location, callback) {
// 	callback(undefined, 79);
// 	callback('City not found');
// }

// getTempCallback('VietNam', function (err, temp) {
// 	if (err) {
// 		console.log('error', err);
// 	} else {
// 		console.log('success', temp);
// 	}
// });

// function getTempPromise (location) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			resolve(78);
// 			reject('City not found');
// 		},1000);
// 	});
// }

// getTempPromise('VietNam').then(function (temp) {
// 	console.log('promise success', temp);
// }, function (err) {
// 	console.log('promise error', err);
// });

function addPromise (a, b) {
	return new Promise(function (resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else {
			reject('A & B need a number');
		}
	});
}

addPromise(3, 2).then(function (sum) {
	console.log('Sum of a&b: ', sum);
}, function (err) {
	console.log(err);
})

addPromise('text', 2).then(function (sum) {
	console.log('Sum of a&b: ', sum);
}, function (err) {
	console.log(err);
})