import React, { ComponentType } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { MovieCardProps } from "./MovieCard";
import { getGenreNamesFromIds } from "../../redux/genres/genres.selectors";

export interface InjectedProps {
	pushHistory: (id: number) => void;
	genres: string[];
	movieReleaseYear: string;
}

export default function <BaseProps extends MovieCardProps>(
	WrappedComponent: ComponentType<BaseProps & InjectedProps>
) {
	const HocComponent: React.FC<BaseProps & RouteComponentProps> = props => {
		const { history, match, location, genresMap, ...restProps } = props;
		const pushHistory = (id: number) => history.push(`/Movie/${id}`);
		let genres = getGenreNamesFromIds(props.movie.genre_ids, genresMap);
		genres = genres.length > 4 ? genres.slice(0, 4) : genres;
		const movieReleaseYear = props.movie.release_date.slice(0, 4);

		return (
			<WrappedComponent
				{...(restProps as BaseProps)}
				pushHistory={pushHistory}
				genres={genres}
				movieReleaseYear={movieReleaseYear}
			/>
		);
	};
	return withRouter(HocComponent);
}
