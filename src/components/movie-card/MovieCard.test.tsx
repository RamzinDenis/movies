import React from "react";
import MovieCard from "./";
import { Movie } from "../../redux/movies/movies.types";
import { ReactWrapper, mount } from "enzyme";
import { Genres } from "../../redux/genres/genres.types";
import { getGenreNamesFromIds } from "../../redux/genres/genres.selectors";
import { BrowserRouter } from "react-router-dom";

const mockMovie: Movie = {
	backdrop_path: "string",
	id: 1234,
	title: "Robin Hood",
	overview: "This is the story...",
	vote_average: 7.4,
	release_date: "2019_09-17",
	poster_path: "",
	genre_ids: [12, 14, 10751, 18, 878],
};
const mockGenresMap: { [key: string]: Genres } = {
	12: {
		id: 12,
		name: "Adventure",
	},
	14: {
		id: 14,
		name: "Fantasy",
	},
	10751: {
		id: 10751,
		name: "Family",
	},
	18: {
		id: 18,
		name: "Drama",
	},
	878: {
		id: 878,
		name: "Science Fiction",
	},
};

describe("<MovieCard />", () => {
	let component: ReactWrapper;

	beforeEach(() => {
		component = mount(
			<BrowserRouter>
				<MovieCard movie={mockMovie} genresMap={mockGenresMap} />
			</BrowserRouter>
		);
	});
	afterEach(() => component.unmount());
	it("should have less then 5 genres", () => {
		expect(component.find("[data-id='genre']").length).toBeLessThan(5);
	});

	it("should render genders with commas, except last one", () => {
		const length = component.find("[data-id='genre']").length;
		component
			.find("[data-id='genre']")
			.forEach((genre, index) =>
				index === length - 1
					? expect(genre.text().includes(",")).toBeFalsy()
					: expect(genre.text().includes(",")).toBeTruthy()
			);
	});
	it("should render release year correctly, with comma", () => {
		expect(component.find("[data-id='release_year']").text()).toEqual("2019,");
	});
});

describe("getGenreNamesFromIds", () => {
	it("should transform ids to correctly to names", () => {
		const receivedGenres = getGenreNamesFromIds(
			mockMovie.genre_ids,
			mockGenresMap
		);
		expect(
			Object.values(mockGenresMap)
				.map(item => item.name)
				.sort()
		).toEqual(receivedGenres.sort());
	});
});
