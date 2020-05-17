import { combineReducers } from "redux";
import movies from "./movies/movies.reducer";
import genres from "./genres/genres.reducer";

const rootReducer = combineReducers({
	movies,
	genres,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
