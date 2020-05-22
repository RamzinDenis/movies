import React from "react";
import styles from "./movie-card.module.sass";
import { connect } from "react-redux";
import { Movie } from "../../redux/movies/movies.types";
import { IMAGE_BASE_URL, CARD_POSTER_SIZE } from "../../fixtures";
import { Genres } from "../../redux/genres/genres.types";
import { getGenreNamesFromIds } from "../../redux/genres/genres.selectors";
import { ReactComponent as Rate } from "../../asserts/icons/imdb.svg";
import { loadMovieDetailRequest } from "../../redux/movie-detail/movie-detail.actions";

interface MovieCardProps {
	movie: Movie;
	genresMap: { [key: string]: Genres };
}
type DispatchProps = typeof mapDispatchToProps;

const MovieCard: React.FC<MovieCardProps & DispatchProps> = ({
	movie,
	genresMap,
	loadMovieDetailRequest,
}) => {
	let genres = getGenreNamesFromIds(movie.genre_ids, genresMap);
	genres = genres.length > 4 ? genres.slice(0, 4) : genres;
	const movieReleaseYear = movie.release_date.slice(0, 4);
	return (
		<div
			className={styles.card}
			onClick={() => loadMovieDetailRequest(movie.id)}
		>
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

const mapDispatchToProps = {
	loadMovieDetailRequest,
};

export default connect(null, mapDispatchToProps)(MovieCard);
