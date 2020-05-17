import React from "react";
import styles from "./hero.module.sass";

const Hero: React.FC = ({ children }) => {
	return (
		<main className={styles.hero}>
			<div className={styles.container}>{children}</div>
		</main>
	);
};

export default Hero;
