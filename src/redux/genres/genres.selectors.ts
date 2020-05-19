import { RootState } from "../root-reducer";
import { createSelector } from "reselect";

const getGenresState = (state: RootState) => state.genres;

export const getGenresList = createSelector(
	getGenresState,
	genresState => genresState.entities
);

export const getGenreNamesFromIds = (
	ids: string[],
	genres: ReturnType<typeof getGenresList>
) => ids.map(id => genres[id] && genres[id]["name"]);
