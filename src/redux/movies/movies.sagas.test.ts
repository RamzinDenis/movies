import { takeLatest } from "redux-saga/effects";
import { loadMoviesSaga, loadMoviesAsync } from "./movies.sagas";
import { Constans } from "./movies.types";

describe("loadMoviesSaga", () => {
	const genObject = loadMoviesSaga();

	it("should wait for every LOAD_MOVIES_REQUEST and call loadMoviesAsync", () => {
		expect(genObject.next().value).toEqual(
			takeLatest(Constans.LOAD_MOVIES_REQUEST, loadMoviesAsync)
		);
	});
	it("should be done in the next iteration", () => {
		expect(genObject.next().done).toBeTruthy();
	});
});

describe("loadMoviesAsync", () => {
	it("should fetch url and dispatch action", async () => {});
	const requestedMovies = jest.fn().mockReturnValue(
		Promise.resolve({
			json: () =>
				Promise.resolve({
					movies: [
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
				}),
		})
	);
	const dispatched = [];
});
