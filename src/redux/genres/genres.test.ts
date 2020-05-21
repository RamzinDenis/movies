import reducer from "./genres.reducer";
import { Constans } from "./genres.types";
import { takeLatest, ForkEffect } from "redux-saga/effects";
import { loadGenresAsync, loadGenresSaga } from "./genres.sagas";
import { SagaIterator } from "redux-saga";

describe("Genres reducer", () => {
	const initialState = {
		isLoading: false,
		isLoaded: false,
		entities: {},
		isError: false,
	};
	it("should handle LOAD_GENRES_SUCCESS", () => {
		expect(
			reducer(initialState, {
				type: Constans.LOAD_GENRES_SUCCESS,
				payload: [
					{
						id: 1,
						name: "movieName",
					},
				],
			})
		).toEqual({
			isLoaded: true,
			isLoading: false,
			entities: {
				1: { id: 1, name: "movieName" },
			},
			isError: false,
		});
	});
	it("should handle LOAD_GENRES_REQUEST", () => {
		expect(
			reducer(initialState, {
				type: Constans.LOAD_GENRES_REQUEST,
			})
		).toEqual({
			isLoaded: false,
			isLoading: true,
			entities: {},
			isError: null,
		});
	});
	it("should handle LOAD_GENRES_FAILURE", () => {
		expect(
			reducer(initialState, {
				type: Constans.LOAD_GENRES_FAILURE,
				payload: "error",
			})
		).toEqual({
			isLoaded: false,
			isLoading: false,
			entities: {},
			isError: "error",
		});
	});
});

describe("loadGenresSaga", () => {
	const genObject = loadGenresSaga();

	it("should wait for every LOAD_GENRES_REQUEST and call loadGenresAsync", () => {
		expect(genObject.next().value).toEqual(
			takeLatest(Constans.LOAD_GENRES_REQUEST, loadGenresAsync)
		);
	});
	it("should be done in the next iteration", () => {
		expect(genObject.next().done).toBeTruthy();
	});
});
