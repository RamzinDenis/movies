import { Action } from "redux";

export enum Constans {
	LOAD_MOVIES_REQUEST = "LOAD_MOVIES_REQUEST",
	LOAD_MOVIES_SUCCESS = "LOAD_MOVIES_SUCCESS",
	LOAD_MOVIES_FAILURE = "LOAD_MOVIES_FAILURE",
}

export interface MovieSlider {
	backdrop_path: string;
	id: number;
	title: string;
	overview: string;
	vote_average: number;
	release_date: string;
}

export interface MoviesState {
	isLoading: boolean;
	isLoaded: boolean;
	entities: MovieSlider[];
	isError?: string | null | boolean;
}

export interface LoadMoviesRequest extends Action {
	type: Constans.LOAD_MOVIES_REQUEST;
}

export interface LoadMoviesSuccess extends Action {
	type: Constans.LOAD_MOVIES_SUCCESS;
	payload: MovieSlider[];
}

export interface LoadMoviesFailure extends Action {
	type: Constans.LOAD_MOVIES_FAILURE;
	payload: string | undefined;
}

export type MoviesActions =
	| LoadMoviesRequest
	| LoadMoviesSuccess
	| LoadMoviesFailure;
