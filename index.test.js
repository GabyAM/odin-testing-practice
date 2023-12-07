import { capitalize, reverseString } from "./index.js";

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
