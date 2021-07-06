var uniqueInOrder = function (iterable) {
	let ar = iterable.split("");
	//your code here - remember iterable can be a string or an array
	let a = [];
	ar.forEach((element, i) => {
		if (ar[i] !== ar[i + 1]) {
			a.push(ar[i]);
		}
	});

	console.log(a);
};

uniqueInOrder("AAAABBBCCDAABBB");

//['A','B','C','D','A','B']
