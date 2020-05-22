import { combineReducers } from "redux";
import movies from "./movies/movies.reducer";
import genres from "./genres/genres.reducer";
import movieDetail from "./movie-detail/movie-detail.reducer";

const rootReducer = combineReducers({
	movies,
	genres,
	movieDetail,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
