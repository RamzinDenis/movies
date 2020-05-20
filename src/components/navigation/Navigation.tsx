import React, { useState } from "react";
import { navigationData } from "../../fixtures";
import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";
import styles from "./navigation.module.sass";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

interface NavProps extends RouteComponentProps {
	currentUser: boolean;
}

const Navigation: React.FC<NavProps> = ({ currentUser, match }) => {
	const [isToggle, setToggle] = useState(false);
	const onClose = () => setToggle(false);
	const MenuItems = navigationData.map(navItem => {
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
	});

	return (
		<nav className={styles.navigation}>
			{isToggle ? (
				<Drawer
					title="Menu"
					placement="right"
					closable={false}
					onClose={onClose}
					visible={isToggle}
					className={styles.drawer}
				>
					{MenuItems}
					<CloseOutlined className={styles.close} onClick={onClose} />
				</Drawer>
			) : (
				MenuItems
			)}
			<MenuOutlined
				className={styles.menu_btn}
				onClick={() => setToggle(!isToggle)}
			/>
		</nav>
	);
};

export default withRouter(Navigation);
