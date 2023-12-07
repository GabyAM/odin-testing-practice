import { capitalize } from "./index.js";

it("capitalize function works", () => {
	expect(capitalize("word")).toBe("Word");
});

it("capitalize function works when only the first character is a letter", () => {
	expect(capitalize("a1*/")).toBe("A1*/");
});

it("capitalize function fails when input is not a word", () => {
	expect(() => capitalize(123)).toThrow("Input a valid string");
});
