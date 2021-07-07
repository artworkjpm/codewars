function setup() {
	let a = Array.from(document.getElementsByTagName("span"));
	a.forEach((element) => {
		element.addEventListener("click", (e) => {
			let num = e.target.attributes.id.value;
			a.map((item) => item.classList.remove("x"));
			for (let index = num; index >= 0; index--) {
				a[index].className = "x";
			}
		});
	});
}

// Example case.
document.body.innerHTML = `
<div id='rating'>
  <span id="0">*</span>
  <span id="1">*</span>
  <span id="2">*</span>
  <span id="3">*</span>
  <span id="4">*</span>
</div>`;

setup();

document.getElementsByTagName("span")[2].click();
console.log(document.body.innerHTML);
