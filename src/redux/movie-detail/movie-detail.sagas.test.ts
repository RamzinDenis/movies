import {
	loadMovieDetailSaga,
	loadMovieDetailAsync,
} from "./movie-detail.sagas";
import { takeLatest } from "redux-saga/effects";
import {
	Constans,
	LoadMovieDetailRequest,
	LoadMovieDetailSuccess,
	MovieDetailActions,
} from "./movie-detail.types";
import { runSaga } from "redux-saga";
import {
	loadMovieDetailSuccess,
	loadMovieDetailFailure,
} from "./movie-detail.actions";

describe("loadMovieDetailSaga", () => {
	const genObject = loadMovieDetailSaga();
	it("should listen for every LOAD_MOVIE_DETAIL_REQUEST and call loadMovieDetailAsync", () => {
		expect(genObject.next().value).toEqual(
			takeLatest<LoadMovieDetailRequest>(
				Constans.LOAD_MOVIE_DETAIL_REQUEST,
				loadMovieDetailAsync
			)
		);
	});
	it("should be done in the next iteration", () => {
		expect(genObject.next().done).toBeTruthy();
	});
});

describe("loadMovieDetailAsync", () => {
	it("should dispatch success action if executing without errors", async () => {
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
		const dispatched: MovieDetailActions[] = [];
		const mockRequst = jest.spyOn(window, "fetch").mockImplementation(
			() =>
				Promise.resolve({
					json: () => mockMovie,
				}) as any
		);

		const result = await runSaga(
			{
				dispatch: (action: MovieDetailActions) => dispatched.push(action),
			},
			loadMovieDetailAsync,
			{ payload: 4 }
		);

		expect(dispatched).toEqual([loadMovieDetailSuccess(mockMovie)]);
		mockRequst.mockClear();
	});
	it("should dispatch failure actions if fetching url with errors", async () => {
		const error = "error";
		const dispatched: MovieDetailActions[] = [];
		const mockRequest = jest
			.spyOn(window, "fetch")
			.mockImplementation(() => Promise.reject(error));
		const result = await runSaga(
			{
				dispatch: (action: MovieDetailActions) => dispatched.push(action),
			},
			loadMovieDetailAsync,
			{ payload: 5 }
		);
		expect(dispatched).toEqual([loadMovieDetailFailure(error)]);
		mockRequest.mockClear();
	});
});
