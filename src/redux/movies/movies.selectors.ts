import { RootState } from "../root-reducer";
import { createSelector } from "reselect";

export const getMoviesList = (state: RootState) => state.movies.entities;
export const getMovies = (state: RootState) => state.movies;

export const getMoviesImg = createSelector(getMoviesList, movies =>
	movies.map((movie, index) => {
		if (index > 5) return null;
		return movie.poster_path;
	})
);

export const getMoviesLoading = createSelector(
	getMovies,
	moviesState => moviesState.isLoading
);

export const getMoviesLoaded = createSelector(
	getMovies,
	moviesState => moviesState.isLoaded
);
