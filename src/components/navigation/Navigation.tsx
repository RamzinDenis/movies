import React from "react";
import { navigationData } from "../../fixtures";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import styles from "./navigation.module.sass";

interface NavProps extends RouteComponentProps {
	currentUser: boolean;
}

const Navigation: React.FC<NavProps> = ({ currentUser, match }) => {
	return (
		<nav className={styles.navigation}>
			{navigationData.map(navItem => {
				if (
					(currentUser && navItem.title === "SignIn") ||
					(!currentUser && navItem.title === "SignOut")
				)
					return null;
				return (
					<Link
						to={`${match.url}${navItem.linkUrl}`}
						key={navItem.id}
						className={styles.navigation__item}
					>
						{navItem.title}
					</Link>
				);
			})}
		</nav>
	);
};

export default withRouter(Navigation);
