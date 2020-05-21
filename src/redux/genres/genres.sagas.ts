import { call, all, takeLatest, put } from "redux-saga/effects";
import {
	Constans,
	Genres,
	LoadGenresSuccess,
	LoadGenresFailure,
} from "./genres.types";
import { genreUrl } from "../types";
import { loadGenresSuccess, loadGenresFailure } from "./genres.actions";
import { SagaIterator } from "redux-saga";

export function* loadGenresAsync(): SagaIterator<void> {
	try {
		const response: Response = yield call(fetch, genreUrl);
		const result: { genres: Genres[] } = yield call([response, "json"]);
		yield put<LoadGenresSuccess>(loadGenresSuccess(result.genres));
	} catch (err) {
		yield put<LoadGenresFailure>(loadGenresFailure(err.toString()));
	}
}

export function* loadGenresSaga() {
	yield takeLatest(Constans.LOAD_GENRES_REQUEST, loadGenresAsync);
}

export default function* genresSagas() {
	yield all([call(loadGenresSaga)]);
}
