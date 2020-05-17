import React, { useEffect } from "react";
import styles from "./grid.module.sass";
import { RootState } from "../../redux/root-reducer";
import { getMoviesList } from "../../redux/movies/movies.selectors";
import { connect } from "react-redux";
import MovieCard from "../movie-card";
import { loadGenres } from "../../redux/genres/genres.sagas";
interface GridProps extends ConnectedProps {
	title: string;
}
type ConnectedProps = ReturnType<typeof mapStateToProps> &
	typeof mapDispatchToProps;

const Grid: React.FC<GridProps> = ({ title, movies, loadGenres }) => {
	useEffect(() => {
		loadGenres();
	}, [loadGenres]);
	return (
		<section className={styles.container}>
			<div className={styles.main}>
				<h2 className={styles.title}>{title}</h2>
				<div className={styles.grid}>
					{movies.map(movie => (
						<MovieCard movie={movie} key={movie.id} />
					))}
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = (state: RootState) => ({
	movies: getMoviesList(state),
});

const mapDispatchToProps = {
	loadGenres,
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
