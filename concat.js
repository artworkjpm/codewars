const longestConsec = (array, count) => {
	var longest = "";
	for (var i = 0; count > 0 && i <= array.length - count; i++) {
		var tempArray = array.slice(i, i + count);
		var tempStr = tempArray.join("");
		console.log(tempStr);
		if (tempStr.length > longest.length) {
			longest = tempStr;
		}
	}

	/* console.log(longest); */
	return longest;
};

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2);
