import React from "react";
import Navigation from "../navigation";
import logo from "../../asserts/images/reactMovie_logo.png";
import styles from "./header.module.sass";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<NavLink to="/">
					<img src={logo} className={styles.logo} alt="logo" />
				</NavLink>
				<Navigation currentUser={false} />
			</div>
		</header>
	);
};

export default Header;
