//your JS code here. If required.
const out = document.getElementById('output');

function startPromiseChaining() {
	const inputNum = document.getElementById('ip').value;

	const firstPromise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(inputNum);
		},2000)
	})

	firstPromise.then((res) => {
		out.innerText = `Result: ${res}`;
		return new Promise((resolve) => {
			setTimeout(() => {
				out.innerText = `Result: ${res}`;
				resolve(res*2);
			}, 1000)
		})
	})
	.then((res) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				out.innerText = `Result: ${res}`;
				resolve(res-3);
			}, 1000)
		})
	})
	.then((res) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				out.innerText = `Result: ${res}`;
				resolve(res+10);
			}, 1000)
		})
	})
	.then((res) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				out.innerText = `Final Result: ${res}`;
			}, 1000)
		})
	})
}




