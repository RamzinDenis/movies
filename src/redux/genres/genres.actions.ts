import {
	LoadGenresRequest,
	Constans,
	Genres,
	LoadGenresSuccess,
	LoadGenresFailure,
} from "./genres.types";

export const loadGenres = (): LoadGenresRequest => ({
	type: Constans.LOAD_GENRES_REQUEST,
});

export const loadGenresSuccess = (payload: Genres[]): LoadGenresSuccess => ({
	type: Constans.LOAD_GENRES_SUCCESS,
	payload,
});

export const loadGenresFailure = (payload: string): LoadGenresFailure => ({
	type: Constans.LOAD_GENRES_FAILURE,
	payload,
});
