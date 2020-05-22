import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadMovieDetailRequest } from "../../redux/movie-detail/movie-detail.actions";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
	movieId: string;
}

interface MoviePageProps extends RouteComponentProps<MatchParams> {}
type DispatchProps = typeof mapDispatchToProps;

const MoviePage: React.FC<MoviePageProps & DispatchProps> = ({
	match,
	loadMovieDetailRequest,
}) => {
	useEffect(() => {
		loadMovieDetailRequest(parseInt(match.params.movieId));
	});
	return <div>Movie</div>;
};

const mapDispatchToProps = { loadMovieDetailRequest };

export default connect(null, mapDispatchToProps)(MoviePage);
