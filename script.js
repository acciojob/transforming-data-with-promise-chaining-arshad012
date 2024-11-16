//your JS code here. If required.
const out = document.getElementById('output');

function startPromiseChaining() {
	const inputNum = document.getElementBbyId('ip').value;

	const firstPromise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(inputNum);
		},2000)
	})

	firstPromise.then((res) => {
		out.innerText = `Result: ${res}`;
	})
}