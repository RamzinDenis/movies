import { RootState } from "../root-reducer";
import { createSelector } from "reselect";
import { sliseArrayByN } from "../../utils/slice-array-by-chunks";

export const getMovies = (state: RootState) => state.movies;
export const getMoviesList = createSelector(
	getMovies,
	moviesState => moviesState.entities
);

export const getSlicedMovies = createSelector(getMoviesList, movies => {
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
