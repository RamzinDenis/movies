import { RootState } from "../root-reducer";
import { createSelector } from "reselect";
import { sliseArrayByN } from "../../utils";

export const getMoviesList = (state: RootState) => state.movies.entities;
export const getMovies = (state: RootState) => state.movies;

export const getMoviesImg = createSelector(getMoviesList, movies => {
	const filteredMovies = movies.filter((_, index) => index < 15);
	return sliseArrayByN(filteredMovies, 3);
});

export const getMoviesLoading = createSelector(
	getMovies,
	moviesState => moviesState.isLoading
);

export const getMoviesLoaded = createSelector(
	getMovies,
	moviesState => moviesState.isLoaded
);
