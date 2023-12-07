import {
	capitalize,
	reverseString,
	calculator,
} from "./index.js";

it("capitalize function works", () => {
	expect(capitalize("word")).toBe("Word");
});

it("capitalize function works when only the first character is a letter", () => {
	expect(capitalize("a1*/")).toBe("A1*/");
});

it("capitalize function fails when input is not a word", () => {
	expect(() => capitalize(123)).toThrow("Input a valid string");
});

it("reverseString function works", () => {
	expect(reverseString("live")).toBe("evil");
});

it("reverseString function fails when input is not string", () => {
	expect(() => reverseString(123)).toThrow("Input a valid string");
});

describe("calculator works", () => {
	it("add function works", () => {
		expect(calculator.add(1, 3)).toBe(4);
	});

	it("substract function works", () => {
		expect(calculator.substract(5, 3)).toBe(2);
	});

	it("multiply function works", () => {
		expect(calculator.multiply(4, 4)).toBe(16);
	});
	it("divide function works", () => {
		expect(calculator.divide(6, 2)).toBe(3);
	});
});

describe("calculator fails", () => {
	const calculatorFunctions = Object.values(calculator);
	calculatorFunctions.forEach((func, i) => {
		it(`function ${i + 1} fails when parameters are not numbers`, () => {
			expect(() => func("a", "b")).toThrow(
				"The parameters are not numbers"
			);
		});
	});
});

it("caesarCipher function works (normal case)", () => {
	expect(caesarCipher("caesar", 3)).toBe("fdhvdu");
});

it("caesarCipher function works (edge case)", () => {
	expect(caesarCipher("zombie", 5)).toBe("etrgnj");
});

it("caesarCipher function fails when first parameter is not string", () => {
	expect(() => caesarCipher(12, 3)).toThrow("Input a valid string");
});

it("caesarCipher function fails when shift is not a number", () => {
	expect(() => caesarCipher("caesar", "three")).toThrow(
		"The shift parameter should be a number"
	);
});

