import React from "react";
import styles from "./search-bar.module.sass";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar: React.FC = () => {
	return (
		<form className={styles.form}>
			<input className={styles.input} placeholder="Search Movie"></input>
			<button className={styles.button}>
				<SearchOutlined className={styles.icon} />
			</button>
		</form>
	);
};

export default SearchBar;
