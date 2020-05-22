import {
	MovieDetailState,
	MovieDetailActions,
	Constans,
} from "./movie-detail.types";

const initialState: MovieDetailState = {
	isLoading: false,
	isLoaded: false,
	isError: false,
	entities: {},
};

const reducer = (state = initialState, action: MovieDetailActions) => {
	switch (action.type) {
		case Constans.LOAD_MOVIE_DETAIL_REQUEST:
			return {
				...state,
				isLoaded: false,
				isLoading: true,
				isError: null,
			};
		case Constans.LOAD_MOVIE_DETAIL_SUCCESS:
			return {
				...state,
				isLoaded: true,
				isLoading: false,
				entities: action.payload,
			};
		case Constans.LOAD_MOVIE_DETAIL_FAILURE:
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
