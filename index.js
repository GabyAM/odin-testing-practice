export function capitalize(word) {
	if (!/^[a-zA-Z].*/.test(word)) throw new Error("Input a valid string");
	return word.charAt(0).toUpperCase() + word.slice(1);
}
