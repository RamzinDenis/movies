import { Movie } from "../movies/movies.types";
import { Action } from "redux";
export enum Constans {
	LOAD_MOVIE_DETAIL_REQUEST = "LOAD_MOVIE_DETAIL_REQUEST",
	LOAD_MOVIE_DETAIL_SUCCESS = "LOAD_MOVIE_DETAIL_SUCCESS",
	LOAD_MOVIE_DETAIL_FAILURE = "LOAD_MOVIE_DETAIL_FAILURE",
}

export type MovieDetail = Omit<Movie, "genre_ids"> & {
	revenue: number;
	runtime: number | null;
	genres: {
		id: number;
		name: string;
	};
};

export interface LoadMovieDetailRequest extends Action {
	type: Constans.LOAD_MOVIE_DETAIL_REQUEST;
	payload: number;
}

export interface LoadMovieDetailSuccess extends Action {
	type: Constans.LOAD_MOVIE_DETAIL_SUCCESS;
	payload: MovieDetail;
}

export interface LoadMovieDetailFailure extends Action {
	type: Constans.LOAD_MOVIE_DETAIL_FAILURE;
	payload: string;
}

export interface MovieDetailState {
	isLoading: boolean;
	isLoaded: boolean;
	entities: MovieDetail | {};
	isError: string | null | boolean;
}

export type MovieDetailActions =
	| LoadMovieDetailSuccess
	| LoadMovieDetailRequest
	| LoadMovieDetailFailure;
