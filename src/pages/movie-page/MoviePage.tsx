import React from "react";
import MoviePageContainer, { InjectedProps } from "./MoviePageContainer";
import Hero from "../../components/hero";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../fixtures";
import styles from "./movie-page.module.sass";

const MoviePage: React.FC<InjectedProps> = ({ movie }) => {
	const heroImg = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`;

	return <Hero backgroundUrl={heroImg} classN={styles.container}></Hero>;
};

export default MoviePageContainer(MoviePage);
