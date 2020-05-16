import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { getMoviesImg } from "../../redux/movies/movies.selectors";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../fixtures";
import styles from "./slider.module.sass";

const mapStateToProps = (state: RootState) => ({
	moviesImgs: getMoviesImg(state),
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
		const MovieSliderItems = moviesImgs.map((movieUrl, index) => (
			<div key={index}>
				<img
					src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movieUrl}`}
					alt="movieSliderPicture"
				/>
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
