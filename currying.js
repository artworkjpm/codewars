//ergo test

//multiply(4)(5)

function multiply(a) {
	return function (b) {
		secondFunction(a, b);
	};
}

function secondFunction(a, b) {
	return console.log(a * b);
}

multiply(4)(5);
