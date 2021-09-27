/* console.log(“start”)
await sleepNSec(5)
console.log(“stop”)  */
//should be desplayed after 5 sec

/* async function sleepNSec(time) {
	console.log("start");
	return await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log("stop"));
		}, time * 1000);
	});
}

sleepNSec(5); */

/* async function sleepNSec(time) {
	console.log("start");
	await end(time);
}
async function end(time) {
	setTimeout(() => console.log("stop"), time * 1000);
}
sleepNSec(5); */

/* const sleep = (time) =>
	new Promise((resolve, reject) => {
		console.log("start");
		setTimeout(() => {
			resolve(time);
		}, time * 1000);
	});

sleep(5).then((payload) => console.log(payload)); */

/* async function myDisplay() {
	let myPromise = new Promise((myResolve, myReject) => {
		setTimeout(() => myResolve("I love You !!"), 3000);
	});
	console.log(await myPromise);
}

myDisplay(); */
