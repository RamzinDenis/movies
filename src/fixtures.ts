interface NavigationData {
	title: string;
	id: number;
	linkUrl: string;
}

export const navigationData: NavigationData[] = [
	{
		title: "Главная",
		id: 1,
		linkUrl: "",
	},
	{
		title: "Новости",
		id: 2,
		linkUrl: "News",
	},
	{
		title: "Топ 50",
		id: 3,
		linkUrl: "Top50",
	},
	{
		title: "Войти",
		id: 4,
		linkUrl: "SignIn",
	},
	{
		title: "Выйти",
		id: 5,
		linkUrl: "Выйти",
	},
];
