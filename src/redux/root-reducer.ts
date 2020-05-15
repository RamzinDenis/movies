import { combineReducers } from "redux";
import movies from "./movies/movies.reducer";

const rootReducer = combineReducers({
	movies,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
