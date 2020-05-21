import React from "react";
import { mount, ShallowWrapper, ReactWrapper, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Slider, { MovieSlider } from "./Slider";
import createMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = createMockStore([]);
describe("<Slider />", () => {
	let component: ShallowWrapper;
	const MockChildren = <div className="mock-item">Slider</div>;
	beforeEach(() => {
		component = shallow(<Slider classN={"slider"} children={MockChildren} />);
	});
	it("should render Slider without errors", () => {
		expect(toJson(component)).toMatchSnapshot();
	});
	it("should pass className correctly", () => {
		expect(
			component.find("[data-id='slider']").hasClass("slider")
		).toBeTruthy();
	});
	it("should render passed children inside the Carousel component", () => {
		expect(
			component.find("[data-id='slider']").find(".mock-item")
		).toBeTruthy();
	});
});

describe("<MovieSlider />", () => {
	let component: ReactWrapper;
	beforeEach(() => {
		const store = mockStore({
			movies: {
				entities: [
					{
						poster_path: "someMoveUrl",
						id: 1,
					},
					{
						poster_path: "Anothermovieurl",
						id: 2,
					},
					{
						poster_path: "AnotherOneUrl",
						id: 3,
					},
				],
			},
		});
		component = mount(
			<Provider store={store}>
				<MovieSlider />
			</Provider>
		);
	});
	afterEach(() => component.unmount);

	it("should render connected MovieSlider without errors", () => {
		expect(toJson(component)).toMatchSnapshot();
	});
	it("should render for each img separate container on mobilephones", () => {
		component
			.find('[data-id="slider-container_mobile"]')
			.forEach(item =>
				expect(item.find("[data-id='slider-img']").length).toBe(1)
			);
	});
	it("should contains 3 img per container on full screen", () => {
		expect(
			component
				.find('[data-id="slider-container"]')
				.find("[data-id='slider-img']").length
		).toBe(3);
	});
});
