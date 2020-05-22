import { call, put, all, takeLatest } from "redux-saga/effects";
import {
	Constans,
	LoadMovieDetailRequest,
	MovieDetail,
} from "./movie-detail.types";
import { SagaIterator } from "redux-saga";
import { movieUrl } from "../types";
import {
	loadMovieDetailSuccess,
	loadMovieDetailFailure,
} from "./movie-detail.actions";

export function* loadMovieDetailAsync({
	payload,
}: {
	payload: number;
}): SagaIterator<void> {
	try {
		const response: Response = yield call(fetch, movieUrl(payload));
		const result: MovieDetail = yield call([response, "json"]);
		yield put(loadMovieDetailSuccess(result));
	} catch (err) {
		yield put(loadMovieDetailFailure(err.toString()));
	}
}

export function* loadMovieDetailSaga() {
	yield takeLatest<LoadMovieDetailRequest>(
		Constans.LOAD_MOVIE_DETAIL_REQUEST,
		loadMovieDetailAsync
	);
}

export default function* movieDetailSaga() {
	yield all([call(loadMovieDetailSaga)]);
}
