export function capitalize(word) {
	if (!/^[a-zA-Z].*/.test(word)) throw new Error("Input a valid string");
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverseString(string) {
	if (typeof string !== "string" || !string instanceof String)
		throw new Error('"Input a valid string"');
	let newString = "";
	for (let i = string.length - 1; i >= 0; i--) {
		newString += string[i];
	}
	return newString;
}
