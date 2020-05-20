import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Hero from "./";
describe("<Hero />", () => {
	it("should render Hero component correctly", () => {
		const component = shallow(<Hero />);
		expect(toJson(component)).toMatchSnapshot();
	});
});
