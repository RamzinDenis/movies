import { RootState } from "../root-reducer";
import { createSelector } from "reselect";

export const getMovieDetailState = (state: RootState) => state.movieDetail;
export const getMovieDetail = createSelector(
	getMovieDetailState,
	state => state.entities
);
