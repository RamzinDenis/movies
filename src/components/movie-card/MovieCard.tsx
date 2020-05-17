import React from "react";
import styles from "./movie-card.module.sass";
import { Movie } from "../../redux/movies/movies.types";
import { IMAGE_BASE_URL, CARD_POSTER_SIZE } from "../../fixtures";

interface MovieCardProps {
	movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
	return (
		<div className={styles.card}>
			<img
				alt="movie poster card"
				src={`${IMAGE_BASE_URL}${CARD_POSTER_SIZE}${movie.poster_path}`}
				className={styles.image}
			/>
			<p>{`${movie.release_date.slice(0, 4)}`}</p>
		</div>
	);
};

export default MovieCard;
