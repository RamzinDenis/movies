import React from "react";
import styles from "./hero.module.sass";

const Hero: React.FC = ({ children }) => {
	return <div className={styles.hero}>{children}</div>;
};

export default Hero;
