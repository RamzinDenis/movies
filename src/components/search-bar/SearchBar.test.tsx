import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./";
import toJson from "enzyme-to-json";

describe("<SearchBar />", () => {
	it("should render SearchBar properly", () => {
		expect(toJson(shallow(<SearchBar />))).toMatchSnapshot();
	});
});
