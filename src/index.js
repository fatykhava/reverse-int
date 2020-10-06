module.exports = function reverse(n) {
	let str = String(n);
	let reverseInt = '';
	if (str[0] === '-') {
		for (let i = str.length - 1; i >= 1; i--) {
			reverseInt += str[i];
		}
	}
	else {
		for (let i = str.length - 1; i >= 0; i--) {
			reverseInt += str[i];
		}
	}

	return Number(reverseInt);
}
