import reducer from "./movies.reducer";
import { Constans } from "./movies.types";

describe("Movies reducer", () => {
	const mockMovies = [
		{
			id: 1,
			poster_path: "",
			backdrop_path: "",
			overview: "",
			vote_average: 6,
			title: "",
			release_date: "",
			genre_ids: [18, 12],
		},
	];
	const initialState = {
		isLoading: false,
		isLoaded: false,
		entities: [],
		isError: false,
	};

	it("should handle LOAD_MOVIES_SUCCESS", () => {
		expect(
			reducer(initialState, {
				type: Constans.LOAD_MOVIES_SUCCESS,
				payload: mockMovies,
			})
		).toEqual({
			isLoaded: true,
			isLoading: false,
			entities: mockMovies,
			isError: false,
		});
	});
	it("should handle LOAD_MOVIES_REQUEST", () => {
		expect(
			reducer(initialState, {
				type: Constans.LOAD_MOVIES_REQUEST,
			})
		).toEqual({
			isLoaded: false,
			isLoading: true,
			entities: [],
			isError: null,
		});
	});
	it("should handle LOAD_MOVIES_FAILURE", () => {
		expect(
			reducer(initialState, {
				type: Constans.LOAD_MOVIES_FAILURE,
				payload: "error",
			})
		).toEqual({
			isLoaded: false,
			isLoading: false,
			entities: [],
			isError: "error",
		});
	});
});
