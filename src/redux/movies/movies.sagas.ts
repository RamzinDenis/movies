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
import { loadMoviesSuccess, loadMoviesFailure } from "./movies.actions";

export function* loadMoviesAsync(): SagaIterator<void> {
	try {
		const response: Response = yield call(fetch, url);
		const data: { results: Movie[] } = yield call([response, "json"]);
		yield put<LoadMoviesSuccess>(loadMoviesSuccess(data.results));
	} catch (err) {
		yield put<LoadMoviesFailure>(loadMoviesFailure(err.toString()));
	}
}

export function* loadMoviesSaga() {
	yield takeLatest<LoadMoviesRequest>(
		Constans.LOAD_MOVIES_REQUEST,
		loadMoviesAsync
	);
}

export default function* usersSagas() {
	yield all([call(loadMoviesSaga)]);
}
