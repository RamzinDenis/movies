import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../header";
import HomePage from "../../pages/homepage";
import Top50Page from "../../pages/top-50-page";
import SignInPage from "../../pages/sign-in-page";
import NewsPage from "../../pages/news-page";
import MoviePage from "../../pages/movie-page";

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/Top50" component={Top50Page} />
				<Route path="/SignIn" component={SignInPage} />
				<Route path="/News" component={NewsPage} />
				<Route path="/Movie/:movieId" component={MoviePage} />
			</Switch>
		</>
	);
}

export default App;
