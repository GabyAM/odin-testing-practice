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

export const calculator = {
	add: (a, b) => {
		if (typeof a !== "number" || typeof b !== "number")
			throw new Error("The parameters are not numbers");
		return a + b;
	},
	substract: (a, b) => {
		if (typeof a !== "number" || typeof b !== "number")
			throw new Error("The parameters are not numbers");
		return a - b;
	},
	multiply: (a, b) => {
		if (typeof a !== "number" || typeof b !== "number")
			throw new Error("The parameters are not numbers");
		return a * b;
	},
	divide: (a, b) => {
		if (typeof a !== "number" || typeof b !== "number")
			throw new Error("The parameters are not numbers");
		if (b === 0) throw new Error("can't divide by 0");
		return a / b;
	},
};

const abecedary = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

export function caesarCipher(string, shift) {
	if (typeof string !== "string" || !string instanceof String)
		throw new Error("Input a valid string");
	if (typeof shift !== "number")
		throw new Error("The shift parameter should be a number");

	let newString = "";
	for (let i = 0; i < string.length; i++) {
		let abecedaryIndex = abecedary.indexOf(string[i]);
		abecedaryIndex += shift;
		if (abecedaryIndex < 0) {
			const difference = 0 - abecedaryIndex;
			abecedaryIndex += difference;
		} else if (abecedaryIndex >= abecedary.length) {
			abecedaryIndex = abecedaryIndex - abecedary.length;
		}
		newString += abecedary[abecedaryIndex];
	}
	return newString;
}

