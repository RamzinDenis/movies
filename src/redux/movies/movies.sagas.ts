import { takeLatest, call, put, all } from "redux-saga/effects";
import { Constans } from "./movies.types";
import { SagaIterator } from "redux-saga";
import { url } from "../types";
import {
	Movie,
	LoadMoviesFailure,
	LoadMoviesSuccess,
	LoadMoviesRequest,
} from "./movies.types";

export function* loadMoviesAsync(): SagaIterator<void> {
	try {
		const response: Response = yield call(fetch, url);
		const data: { results: Movie[] } = yield call([response, "json"]);
		yield put<LoadMoviesSuccess>({
			type: Constans.LOAD_MOVIES_SUCCESS,
			payload: data.results,
		});
	} catch (err) {
		yield put<LoadMoviesFailure>({
			type: Constans.LOAD_MOVIES_FAILURE,
			payload: err.toString(),
		});
	}
}

function* loadMoviesSaga() {
	yield takeLatest<LoadMoviesRequest>(
		Constans.LOAD_MOVIES_REQUEST,
		loadMoviesAsync
	);
}

export const loadMovies = (): LoadMoviesRequest => ({
	type: Constans.LOAD_MOVIES_REQUEST,
});

export default function* usersSagas() {
	yield all([call(loadMoviesSaga)]);
}
