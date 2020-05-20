import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import Spinner from "./";

describe("<Spinner />", () => {
	it("should render Spinner correctly", () => {
		expect(toJson(shallow(<Spinner />))).toMatchSnapshot();
	});
});
