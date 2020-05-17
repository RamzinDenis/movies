import React from "react";
import HomePageContainer from "./HomePageContainer";
import { MovieSlider } from "../../components/slider";
import Hero from "../../components/hero";
import SearchBar from "../../components/search-bar";
import Grid from "../../components/grid";

const HomePage: React.FC<{}> = () => {
	return (
		<>
			<Hero>
				<SearchBar />
				<MovieSlider />
			</Hero>
			<Grid title={"Popular movies"} />
		</>
	);
};

export default HomePageContainer(HomePage);
