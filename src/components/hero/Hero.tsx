import React from "react";
import styles from "./hero.module.sass";

const Hero: React.FC = ({ children }) => {
	return (
		<div className={styles.hero}>
			<div className={styles.container}>{children}</div>
		</div>
	);
};

export default Hero;
