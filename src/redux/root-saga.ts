import { all, call } from "redux-saga/effects";
import movieSliderSaga from "./movies/movies.sagas";

export default function* rootSaga() {
	yield all([call(movieSliderSaga)]);
}
