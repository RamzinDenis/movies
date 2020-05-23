import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadMovieDetailRequest } from "../../redux/movie-detail/movie-detail.actions";
import { Diff } from "utility-types";
import { RouteComponentProps } from "react-router-dom";
import { RootState } from "../../redux/root-reducer";
import { getMovieDetail } from "../../redux/movie-detail/movie-detail.selectors";
import { MovieDetail } from "../../redux/movie-detail/movie-detail.types";

interface HocProps extends DispatchProps, ReturnType<typeof mapStateToProps> {}
type DispatchProps = typeof mapDispatchToProps;

interface MatchParams {
	movieId: string;
}

export interface InjectedProps {
	movie: MovieDetail;
}

const mapStateToProps = (state: RootState) => ({
	movie: getMovieDetail(state),
});
const mapDispatchToProps = { loadMovieDetailRequest };

export default function <BaseProps extends RouteComponentProps<MatchParams>>(
	WrappedComponent: React.ComponentType<
		Diff<BaseProps, RouteComponentProps> & InjectedProps
	>
) {
	const HocComponent: React.FC<BaseProps & HocProps> = props => {
		const {
			loadMovieDetailRequest,
			match,
			location,
			history,
			movie,
			staticContext,
			...restProps
		} = props;
		useEffect(() => {
			loadMovieDetailRequest(parseInt(match.params.movieId));
		}, [loadMovieDetailRequest, match.params]);
		return (
			<WrappedComponent
				{...(restProps as BaseProps)}
				movie={movie as MovieDetail}
			/>
		);
	};
	return connect(mapStateToProps, mapDispatchToProps)(HocComponent as React.FC);
}
