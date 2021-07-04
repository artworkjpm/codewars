function numPlayers(k, scores) {
	// Write your code here
	scores = scores.sort((a, b) => {
		return a - b;
	});

	/* console.log(scores); */

	let convert = [];
	let keepCount = [];
	scores.forEach((item, i) => {
		if (item === scores[i + 1]) {
			keepCount.push(i + 1);
		}

		convert.push(i + 1);
	});

	let count = 0;
	scores.forEach((item, i) => {
		let checkK = item - k;

		/* 	console.log(item, checkK); */
		if (item >= scores[0] && checkK < 2) {
			count++;
		}
	});

	convert.forEach((item, i) => {
		if (i + 1 === keepCount[i]) {
			convert[keepCount] = keepCount;
		}
	});

	console.log(keepCount);
	console.log(convert);
}

numPlayers(4, [5, 2, 2, 3, 4, 5]);
