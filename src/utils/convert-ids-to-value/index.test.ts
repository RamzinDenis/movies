import { convertIdsTovalue } from "./";

describe("convertIdsTovalue", () => {
	it("should convert arrays of ids to array of names from map", () => {
		const Map: { [key: string]: { name: string } } = {
			"1": {
				name: "John",
			},
			"2": {
				name: "Doe",
			},
		};
		const testedArray = ["1", "2"];
		const expectedArray = [Map[testedArray[0]].name, Map[testedArray[1]].name];
		expect(convertIdsTovalue(testedArray, Map, "name")).toEqual(expectedArray);
	});
});
