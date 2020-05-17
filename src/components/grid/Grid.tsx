import React from "react";
import styles from "./grid.module.sass";

interface GridProps {
	title: string;
}

const Grid: React.FC<GridProps> = ({ title }) => {
	return (
		<section className={styles.container}>
			<div className={styles.main}>
				<h2 className={styles.title}>{title}</h2>
				<div className={styles.grid}></div>
			</div>
		</section>
	);
};

export default Grid;
