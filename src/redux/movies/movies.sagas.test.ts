import { takeLatest } from "redux-saga/effects";
import * as sagas from "./movies.sagas";
import { Constans, MoviesActions } from "./movies.types";
import { runSaga } from "redux-saga";
import { loadMoviesSuccess, loadMoviesFailure } from "./movies.actions";

describe("sagas.loadMoviesSaga", () => {
	const genObject = sagas.loadMoviesSaga();

	it("should wait for every LOAD_MOVIES_REQUEST and call sagas.loadMoviesAsync", () => {
		expect(genObject.next().value).toEqual(
			takeLatest(Constans.LOAD_MOVIES_REQUEST, sagas.loadMoviesAsync)
		);
	});
	it("should be done in the next iteration", () => {
		expect(genObject.next().done).toBeTruthy();
	});
});

describe("sagas.loadMoviesAsync", () => {
	const movies = [
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

	it("should fetch url and dispatch success action if executing without errors", async () => {
		const movieRequest = jest.spyOn(window, "fetch").mockImplementation(
			() =>
				({
					json: () =>
						({
							results: movies,
						} as any),
				} as any)
		);
		const dispatched: MoviesActions[] = [];

		const result = await runSaga(
			{
				dispatch: (action: MoviesActions) => dispatched.push(action),
			},
			sagas.loadMoviesAsync
		);
		expect(movieRequest).toHaveBeenCalledTimes(1);
		expect(dispatched).toEqual([loadMoviesSuccess(movies)]);
		movieRequest.mockClear();
	});
	it("should dispatch failure action if error", async () => {
		const movieRequest = jest
			.spyOn(window, "fetch")
			.mockImplementation(() => Promise.reject("error"));
		const dispatched: MoviesActions[] = [];
		const result = await runSaga(
			{
				dispatch: (action: MoviesActions) => dispatched.push(action),
			},
			sagas.loadMoviesAsync
		);
		expect(dispatched).toEqual([loadMoviesFailure("error")]);
		movieRequest.mockClear();
	});
});
