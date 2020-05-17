import React from "react";
import styles from "./article-preview.module.sass";
import { articleData } from "../../fixtures";

const ArticlePreview: React.FC = () => {
	return (
		<div className={styles.article}>
			<h2 className={styles.article__main}> News </h2>
			{articleData.map(article => (
				<div className={styles.article__item}>
					<img
						src={article.url}
						alt="news-images"
						height="200px"
						width="300px"
					/>
					<h2 className={styles.article__title}>{article.title}</h2>
				</div>
			))}
		</div>
	);
};

export default ArticlePreview;
