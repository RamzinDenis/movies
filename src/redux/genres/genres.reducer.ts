import { GenresState, GenresActions, Constans } from "./genres.types";
import { arrToMap } from "../../utils/array-to-map";

const initialState: GenresState = {
	isLoading: false,
	isLoaded: false,
	isError: false,
	entities: {},
};

const reducer = (state = initialState, action: GenresActions): GenresState => {
	switch (action.type) {
		case Constans.LOAD_GENRES_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: null,
			};
		case Constans.LOAD_GENRES_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				entities: arrToMap(action.payload),
			};
		case Constans.LOAD_GENRES_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
