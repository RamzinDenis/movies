import { all, call } from "redux-saga/effects";
import moviesSaga from "./movies/movies.sagas";
import genresSagas from "./genres/genres.sagas";
import movieDetailSaga from "./movie-detail/movie-detail.sagas";

export default function* rootSaga() {
	yield all([call(moviesSaga), call(genresSagas), call(movieDetailSaga)]);
}
