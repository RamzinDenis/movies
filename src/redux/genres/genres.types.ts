import { Action } from "redux";

export enum Constans {
	LOAD_GENRES_REQUEST = "LOAD_GENRES_REQUEST",
	LOAD_GENRES_SUCCESS = "LOAD_GENRES_SUCCESS",
	LOAD_GENRES_FAILURE = "LOAD_GENRES_FAILURE",
}

export interface Genres {
	id: number;
	name: string;
}

export interface GenresState {
	entities: {
		[key: string]: Genres;
	};
	isLoading: boolean;
	isLoaded: boolean;
	isError: boolean | null | string;
}

export interface LoadGenresRequest extends Action {
	type: Constans.LOAD_GENRES_REQUEST;
}

export interface LoadGenresSuccess extends Action {
	type: Constans.LOAD_GENRES_SUCCESS;
	payload: Genres[];
}

export interface LoadGenresFailure extends Action {
	type: Constans.LOAD_GENRES_FAILURE;
	payload: string;
}

export type GenresActions =
	| LoadGenresFailure
	| LoadGenresSuccess
	| LoadGenresRequest;
