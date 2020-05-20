import React from "react";
import { mount, ReactWrapper } from "enzyme";
import Navigation from "./";
import { BrowserRouter } from "react-router-dom";

describe("<Navigation />", () => {
	let init: (currentUser: boolean) => ReactWrapper;
	beforeEach(() => {
		init = (currentUser: boolean) =>
			mount(
				<BrowserRouter>
					<Navigation currentUser={currentUser} />
				</BrowserRouter>
			);
	});
	it("Should render signin menu item if current user false", () => {
		const component = init(false);
		expect(
			component.find("NavLink").findWhere(n => n.text() === "SignIn").length
		).toBeTruthy();
	});
	it("Should not render at all signout menu item if current user false", () => {
		const component = init(false);
		expect(
			expect(
				component.find("NavLink").findWhere(n => n.text() === "SignOut").length
			).toBeFalsy()
		);
	});
	it("Should render signup menu item if current user true", () => {
		const component = init(true);
		expect(
			component.find("NavLink").findWhere(n => n.text() === "SignOut").length
		).toBeTruthy();
	});
	it("Should not render at all signin menu item if current user true", () => {
		const component = init(true);
		expect(
			expect(
				component.find("NavLink").findWhere(n => n.text() === "SignIn").length
			).toBeFalsy()
		);
	});
});
