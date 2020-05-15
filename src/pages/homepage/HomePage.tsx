import React from "react";
import HomePageContainer from "./HomePageContainer";
import Slider from "../../components/slider";

const HomePage: React.FC<{}> = ({}) => {
	return (
		<div>
			HomePage
			<Slider />
		</div>
	);
};

export default HomePageContainer(HomePage);
