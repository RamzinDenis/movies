import reducer from "./movies.reducer";
import { Constans } from "./movies.types";

describe("Movies reducer", () => {
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
				payload: [
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
				],
			})
		).toEqual({
			isLoaded: true,
			isLoading: false,
			entities: [
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
			],
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
