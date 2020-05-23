import React, { CSSProperties } from "react";
import styles from "./hero.module.sass";

interface HeroProps {
	backgroundUrl?: string;
	classN?: string;
}

const Hero: React.FC<HeroProps> = ({ children, backgroundUrl, classN }) => {
	return (
		<main className={styles.hero}>
			<div
				className={classN || styles.container}
				style={{
					backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : "",
				}}
			>
				{children}
			</div>
		</main>
	);
};

export default Hero;
