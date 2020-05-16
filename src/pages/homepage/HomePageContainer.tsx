import React, { useEffect, ComponentType } from "react";
import Spinner from "../../components/spinner";
import { loadMovies } from "../../redux/movies/movies.sagas";
import {
	getMoviesLoading,
	getMoviesLoaded,
} from "../../redux/movies/movies.selectors";
import { RootState } from "../../redux/root-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => ({
	isLoading: getMoviesLoading(state),
	isLoaded: getMoviesLoaded(state),
});

const mapDispatchToProps: { loadMovies: Function } = {
	loadMovies,
};

type HocProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const HomePageContainer = <BaseProps extends {}>(
	WrappedComponent: ComponentType<BaseProps>
) => {
	const HocComponent: React.FC<HocProps & BaseProps> = props => {
		const { isLoaded, isLoading, loadMovies, ...restProps } = props;

		useEffect(() => {
			if (isLoaded || isLoading) return;
			loadMovies();
		}, [loadMovies, isLoaded, isLoading]);

		return !isLoading && isLoaded ? (
			<WrappedComponent {...(restProps as BaseProps)} />
		) : (
			<Spinner />
		);
	};

	return connect<
		ReturnType<typeof mapStateToProps>,
		typeof mapDispatchToProps,
		BaseProps,
		RootState
	>(
		mapStateToProps,
		mapDispatchToProps
	)(HocComponent as React.FC);
};

export default HomePageContainer;
