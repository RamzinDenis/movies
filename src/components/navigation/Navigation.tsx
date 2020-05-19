import React from "react";
import { navigationData } from "../../fixtures";
import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";
import styles from "./navigation.module.sass";
import { MenuOutlined } from "@ant-design/icons";

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
					<>
						<NavLink
							to={`${match.url}${navItem.linkUrl}`}
							key={navItem.id}
							className={styles.navigation__item}
						>
							{navItem.title}
						</NavLink>
					</>
				);
			})}
			<MenuOutlined />
		</nav>
	);
};

export default withRouter(Navigation);
