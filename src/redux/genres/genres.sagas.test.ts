import { takeLatest, ForkEffect } from "redux-saga/effects";
import { loadGenresAsync, loadGenresSaga } from "./genres.sagas";
import { Constans, GenresActions } from "./genres.types";
import { runSaga } from "redux-saga";
import { loadGenresSuccess, loadGenresFailure } from "./genres.actions";

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

describe("loadGenresAsync", () => {
	const genres = [
		{
			id: 1,
			name: "Action",
		},
		{
			id: 2,
			name: "Fantasy",
		},
	];
	it("should dispatch success action if fetching url without errors", async () => {
		const dispatched: GenresActions[] = [];
		const genresRequest = jest.spyOn(window, "fetch").mockImplementation(
			() =>
				Promise.resolve({
					json: () => ({
						genres,
					}),
				}) as any
		);
		const result = await runSaga(
			{
				dispatch: (action: GenresActions) => dispatched.push(action),
			},
			loadGenresAsync
		);
		expect(dispatched).toEqual([loadGenresSuccess(genres)]);
	});
	it("should dispatch failure action if fetching url with errors", async () => {
		const dispatched: GenresActions[] = [];
		const genresRequest = jest
			.spyOn(window, "fetch")
			.mockImplementation(() => Promise.reject("error"));
		const result = await runSaga(
			{
				dispatch: (action: GenresActions) => dispatched.push(action),
			},
			loadGenresAsync
		);
		expect(dispatched).toEqual([loadGenresFailure("error")]);
	});
});
