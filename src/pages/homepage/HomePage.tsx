import React from "react";
import HomePageContainer from "./HomePageContainer";
import { MovieSlider } from "../../components/slider";

const HomePage: React.FC<{}> = () => {
	return (
		<div>
			<MovieSlider />
		</div>
	);
};

export default HomePageContainer(HomePage);
