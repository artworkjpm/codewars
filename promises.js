/* console.log(“start”)
await sleepNSec(5)
console.log(“stop”)  */
//should be desplayed after 5 sec

async function sleepNSec(time) {
	return await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log("stop"));
		}, time * 5);
	});
}

sleepNSec(5);
