import React from "react";
import styles from "./movie-card.module.sass";
import { Movie } from "../../redux/movies/movies.types";
import { IMAGE_BASE_URL, CARD_POSTER_SIZE } from "../../fixtures";
import { Genres } from "../../redux/genres/genres.types";
import { getGenreNamesFromIds } from "../../redux/genres/genres.selectors";
import { ReactComponent as Rate } from "../../asserts/icons/imdb.svg";

interface MovieCardProps {
	movie: Movie;
	genresMap: { [key: string]: Genres };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, genresMap }) => {
	let genres = getGenreNamesFromIds(movie.genre_ids, genresMap);
	genres = genres.length > 4 ? genres.slice(0, 4) : genres;
	const movieReleaseYear = movie.release_date.slice(0, 4);
	return (
		<div className={styles.card}>
			<img
				alt="movie poster card"
				src={`${IMAGE_BASE_URL}${CARD_POSTER_SIZE}${movie.poster_path}`}
				className={styles.image}
			/>
			<div className={styles.movieInfo}>
				{/* <h2 className={styles.title}>{movie.title}</h2> */}
				<div>
					<span className={styles.year}>{movieReleaseYear},</span>
					{genres.map((genre, index) => (
						<span key={index} className={styles.genre}>
							{index !== genres.length - 1 ? genre + ", " : genre}
						</span>
					))}
				</div>
				<div className={styles.rate}>
					<Rate />
					<p className={styles.averageRate}>{movie.vote_average}</p>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
