import React from "react";
import Navigation from "../navigation";
import logo from "../../asserts/images/reactMovie_logo.png";
import styles from "./header.module.sass";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<img src={logo} className={styles.logo} alt="logo" />
				<Navigation currentUser={false} />
			</div>
		</header>
	);
};

export default Header;
