import { MoviesState, Constans, MoviesActions } from "./movies.types";

const initialState: MoviesState = {
	isLoading: {
		movies: false,
		genres: false,
	},
	isLoaded: {
		movies: false,
		genres: false,
	},
	isError: false,
	entities: [],
};

const reducer = (state = initialState, action: MoviesActions): MoviesState => {
	switch (action.type) {
		case Constans.LOAD_MOVIES_REQUEST:
			return {
				...state,
				isLoading: {
					...state.isLoading,
					movies: true,
				},
				isError: null,
			};
		case Constans.LOAD_MOVIES_SUCCESS:
			return {
				...state,
				isLoading: {
					...state.isLoading,
					movies: false,
				},
				isLoaded: {
					...state.isLoading,
					movies: true,
				},
				entities: action.payload,
			};
		case Constans.LOAD_MOVIES_FAILURE:
			return {
				...state,
				isLoading: {
					...state.isLoading,
					movies: false,
				},
				isError: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
