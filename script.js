//your JS code here. If required.
const out = document.getElementById('output');

function startPromiseChaining() {
	const inputNum = document.getElementById('ip').value;

	const firstPromise = new Promise((resolve) => {
		setTimeout(() => {
			out.innerText = `Result: ${inputNum}`;
			resolve(inputNum);
		},2000)
	})

	firstPromise.then((res) => {
		res *= 2;
		return new Promise((resolve) => {
			setTimeout(() => {
				out.innerText = `Result: ${res}`;
				resolve(res);
			}, 1000)
		})
	})
	.then((res) => {
		res -= 3;
		return new Promise((resolve) => {
			setTimeout(() => {
				out.innerText = `Result: ${res}`;
				resolve(res);
			}, 1000)
		})
	})
	.then((res) => {
		res /= 2;
		return new Promise((resolve) => {
			setTimeout(() => {
				out.innerText = `Result: ${res}`;
				resolve(res);
			}, 1000)
		})
	})
	.then((res) => {
		res += 10;
		return new Promise((resolve) => {
			setTimeout(() => {
				out.innerText = `Result: ${res}`;
				resolve(res);
			}, 1000)
		})
	})
	.then((res) => {
		out.innerText = `Final Result: ${res}`;
	})
}




