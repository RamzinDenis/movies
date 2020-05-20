import React from "react";
import Header from "./";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<Header />", () => {
	it("should render Header correctly", () => {
		const component = shallow(<Header />);
		expect(toJson(component)).toMatchSnapshot();
	});
});
