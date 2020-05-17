import { sliseArrayByN } from "./";

let testedArray: any[];

beforeEach(
	() => (testedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
);

describe("sliseArrayByN", () => {
	it("should have length equals received array.length / n", () => {
		expect(sliseArrayByN(testedArray, 3)).toHaveLength(5);
		expect(sliseArrayByN(testedArray, 5)).toHaveLength(3);
	});
	it("received array should not be mutated", () => {
		sliseArrayByN(testedArray, 5);
		expect(testedArray.length).toBe(15);
	});
	it("should equal resulted array", () => {
		const resultedArray = [
			[1, 2, 3, 4, 5],
			[6, 7, 8, 9, 10],
			[11, 12, 13, 14, 15],
		];
		expect(sliseArrayByN(testedArray, 5)).toStrictEqual(resultedArray);
	});
});
