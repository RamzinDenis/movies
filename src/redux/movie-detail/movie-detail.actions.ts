import {
	Constans,
	MovieDetail,
	LoadMovieDetailRequest,
	LoadMovieDetailSuccess,
	LoadMovieDetailFailure,
} from "./movie-detail.types";

export const loadMovieDetailRequest = (id: number): LoadMovieDetailRequest => ({
	type: Constans.LOAD_MOVIE_DETAIL_REQUEST,
	payload: id,
});

export const loadMovieDetailSuccess = (
	response: MovieDetail
): LoadMovieDetailSuccess => ({
	type: Constans.LOAD_MOVIE_DETAIL_SUCCESS,
	payload: response,
});

export const loadMovieDetailFailure = (
	error: string
): LoadMovieDetailFailure => ({
	type: Constans.LOAD_MOVIE_DETAIL_FAILURE,
	payload: error,
});
