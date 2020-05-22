import React from "react";
import styles from "./movie-card.module.sass";
import { Movie } from "../../redux/movies/movies.types";
import { IMAGE_BASE_URL, CARD_POSTER_SIZE } from "../../fixtures";
import { Genres } from "../../redux/genres/genres.types";
import { ReactComponent as Rate } from "../../asserts/icons/imdb.svg";
import MovieCardContainer, { InjectedProps } from "./MovieCardContainer";

export interface MovieCardProps {
	movie: Movie;
	genresMap: { [key: string]: Genres };
}

export const MovieCard: React.FC<
	Omit<MovieCardProps, "genreMap"> & InjectedProps
> = ({ movie, movieReleaseYear, genres, pushHistory }) => {
	return (
		<div className={styles.card} onClick={() => pushHistory(movie.id)}>
			<img
				alt="movie poster card"
				src={`${IMAGE_BASE_URL}${CARD_POSTER_SIZE}${movie.poster_path}`}
				className={styles.image}
			/>
			<div className={styles.movieInfo}>
				<div>
					<span className={styles.year} data-id="release_year">
						{movieReleaseYear},
					</span>
					{genres.map((genre, index) => (
						<span key={index} className={styles.genre} data-id="genre">
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

export default MovieCardContainer(MovieCard);
