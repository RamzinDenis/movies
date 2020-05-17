import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../header";
import HomePage from "../../pages/homepage";
import Top50Page from "../../pages/top-50-page";
import SignInPage from "../../pages/sign-in-page";
import NewsPage from "../../pages/news-page";

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/Top50" component={Top50Page} />
				<Route path="/SignIn" component={SignInPage} />
				<Route path="/News" component={NewsPage} />
			</Switch>
		</>
	);
}

export default App;
