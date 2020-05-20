import React from "react";
import { shallow } from "enzyme";
import Grid from "./";
import toJson from "enzyme-to-json";

describe("<Grid />", () => {
	const mockMovies = [
		{
			backdrop_path: "string",
			id: 1234,
			title: "Robin Hood",
			overview: "This is the story...",
			vote_average: 7.4,
			release_date: "2019_09-17",
			poster_path: "",
			genre_ids: [12, 14, 10751, 18, 878],
		},
		{
			backdrop_path: "string",
			id: 654637,
			title: "Dostaevskiy",
			overview: "This is the story...",
			vote_average: 7.8,
			release_date: "2020_09-17",
			poster_path: "",
			genre_ids: [12, 14, 10751, 18, 878],
		},
	];
	const gridMockProps = {
		movies: mockMovies,
		title: "Popular movies",
		loadGenres: null as any,
		genres: null as any,
	};
	it("should render properly", () => {
		const component = shallow(<Grid.WrappedComponent {...gridMockProps} />);
		expect(toJson(component)).toMatchSnapshot();
	});
});
