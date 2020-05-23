import React from "react";
import MoviePageContainer, { InjectedProps } from "./MoviePageContainer";

const MoviePage: React.FC<InjectedProps> = ({ movie }) => {
	console.log(movie);
	return <div>Movie</div>;
};

export default MoviePageContainer(MoviePage);
