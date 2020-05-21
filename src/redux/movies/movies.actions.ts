import {
	Constans,
	LoadMoviesRequest,
	LoadMoviesSuccess,
	Movie,
	LoadMoviesFailure,
} from "./movies.types";

export const loadMovies = (): LoadMoviesRequest => ({
	type: Constans.LOAD_MOVIES_REQUEST,
});

export const loadMoviesSuccess = (payload: Movie[]): LoadMoviesSuccess => ({
	type: Constans.LOAD_MOVIES_SUCCESS,
	payload,
});

export const loadMoviesFailure = (payload?: string): LoadMoviesFailure => ({
	type: Constans.LOAD_MOVIES_FAILURE,
	payload,
});
