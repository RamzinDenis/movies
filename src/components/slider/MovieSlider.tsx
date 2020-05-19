import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { getSlicedMovies } from "../../redux/movies/movies.selectors";
import { IMAGE_BASE_URL, MAIN_POSTER_SIZE } from "../../fixtures";
import styles from "./slider.module.sass";

const mapStateToProps = (state: RootState) => ({
	moviesImgs: getSlicedMovies(state),
});

export type HocProps = ReturnType<typeof mapStateToProps>;

export interface InjectedProps {
	classN: string;
}

export default function <BaseProps>(
	WrappedComponent: ComponentType<BaseProps>
) {
	const HocComponent: React.FC<BaseProps & HocProps> = ({ ...props }) => {
		const { moviesImgs, ...restProps } = props;
		const MovieSliderItems = moviesImgs.map((moviesArr, index) => (
			<div key={index} className={styles.slider__item}>
				{moviesArr.map(movie => (
					<img
						src={`${IMAGE_BASE_URL}${MAIN_POSTER_SIZE}${movie.poster_path}`}
						alt="movieSliderPicture"
						className={styles.img}
						key={movie.id}
					/>
				))}
			</div>
		));
		return (
			<WrappedComponent
				{...(restProps as BaseProps)}
				classN={styles.movieSlider}
			>
				{MovieSliderItems}
			</WrappedComponent>
		);
	};

	return connect(mapStateToProps)(HocComponent as React.FC);
}
