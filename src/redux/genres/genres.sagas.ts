import { call, all, takeLatest, put } from "redux-saga/effects";
import {
	LoadGenresRequest,
	Constans,
	Genres,
	LoadGenresSuccess,
	LoadGenresFailure,
} from "./genres.types";
import { genreUrl } from "../types";

export function* loadGenresAsync() {
	try {
		const response: Response = yield call(fetch, genreUrl);
		const result: { genres: Genres[] } = yield call([response, "json"]);
		yield put<LoadGenresSuccess>({
			type: Constans.LOAD_GENRES_SUCCESS,
			payload: result.genres,
		});
	} catch (err) {
		yield put<LoadGenresFailure>({
			type: Constans.LOAD_GENRES_FAILURE,
			payload: err.toString(),
		});
	}
}

export function* loadGenresSaga() {
	yield takeLatest(Constans.LOAD_GENRES_REQUEST, loadGenresAsync);
}

export const loadGenres = (): LoadGenresRequest => ({
	type: Constans.LOAD_GENRES_REQUEST,
});

export default function* genresSagas() {
	yield all([call(loadGenresSaga)]);
}
