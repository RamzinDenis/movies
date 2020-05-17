import { arrToMap, DefaultObject } from "./";

let testedArray: DefaultObject[] = [];

beforeEach(
	() =>
		(testedArray = [
			{ id: "1", value: 1 },
			{ id: "2", value: 2 },
			{ id: "3", value: 3 },
			{ id: "4", value: 4 },
		])
);

describe("arrToMap", () => {
	it("should not be array type anymore", () => {
		const map = arrToMap(testedArray);
		expect(Array.isArray(map)).toBeFalsy();
	});
	it("array item should equal map item with the same id", () => {
		const id = "1";
		const arrayItem = testedArray.find(item => item.id === id);
		const map = arrToMap(testedArray);
		expect(map[id]).toEqual(arrayItem);
	});
});
