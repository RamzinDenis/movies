import { RootState } from "../root-reducer";
import { createSelector } from "reselect";

export const getMoviesList = (state: RootState) => state.movies.entities;
export const getMovies = (state: RootState) => state.movies;

export const getMoviesImg = createSelector(getMoviesList, movies =>
	movies.filter((_, index) => index < 5).map(movie => movie.backdrop_path)
);

export const getMoviesLoading = createSelector(
	getMovies,
	moviesState => moviesState.isLoading
);

export const getMoviesLoaded = createSelector(
	getMovies,
	moviesState => moviesState.isLoaded
);
