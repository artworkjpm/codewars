let a = '{"data": [{"name":"John", "age":30, "city":"New York", "isActive": true}, {"name":"x", "age":30, "city":"New York", "isActive": false}]}';
console.log(JSON.parse(a));

function filterIt(arr) {
	let ab = JSON.parse(arr);

	console.log(ab.data.filter((item) => item.isActive));
	return ab.data.filter((item) => item.isActive);
}

filterIt(a);
