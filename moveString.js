function pigIt(str) {
	//Code here
	let a = str.split(" ");
	a.forEach((item, i) => {
		let b = item.split("");
		b.push(item.charAt(0));
		b.splice(0, 1);
		console.log(b);
	});
}

pigIt("Pig latin is cool");
