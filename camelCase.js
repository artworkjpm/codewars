function solution(string) {
	let regie = /(?=[A-Z])/;
	let a = string.split(regie);
	a = a.join(" ");
	console.log(a);
}

solution("camelCasing");
