import reducer from "./movie-detail.reducer";
import { Constans } from "./movie-detail.types";

describe("Movie-detail reducer", () => {
	const requestedState = {
		isLoading: true,
		isLoaded: false,
		entities: {},
		isError: null,
	};
	const mockMovie = {
		id: 1,
		poster_path: "",
		backdrop_path: "",
		overview: "",
		vote_average: 6,
		title: "",
		release_date: "",
		genres: {
			id: 18,
			name: "action",
		},
		revenue: 12345,
		runtime: null,
	};

	it("should handle undefined state properly", () => {
		expect(
			reducer(undefined, {
				type: Constans.LOAD_MOVIE_DETAIL_REQUEST,
				payload: 1,
			})
		).toEqual(requestedState);
	});
	it("should handle success action", () => {
		expect(
			reducer(requestedState, {
				type: Constans.LOAD_MOVIE_DETAIL_SUCCESS,
				payload: mockMovie,
			})
		).toEqual({
			isLoaded: true,
			isLoading: false,
			isError: null,
			entities: mockMovie,
		});
	});
	it("shuld handle failure action", () => {
		expect(
			reducer(requestedState, {
				type: Constans.LOAD_MOVIE_DETAIL_FAILURE,
				payload: "error",
			})
		).toEqual({
			isLoading: false,
			isLoaded: false,
			isError: "error",
			entities: {},
		});
	});
});
