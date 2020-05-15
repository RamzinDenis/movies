import { MoviesState, Constans, MoviesActions } from "./movies.types";

const initialState: MoviesState = {
	isLoading: false,
	isLoaded: false,
	isError: false,
	entities: [],
};

const reducer = (state = initialState, action: MoviesActions): MoviesState => {
	switch (action.type) {
		case Constans.LOAD_MOVIES_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: null,
			};
		case Constans.LOAD_MOVIES_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				entities: action.payload,
			};
		case Constans.LOAD_MOVIES_FAILURE:
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
