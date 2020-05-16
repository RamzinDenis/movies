interface NavigationData {
	title: string;
	id: number;
	linkUrl: string;
}

export const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
export const BACKDROP_SIZE = "w1280";
export const navigationData: NavigationData[] = [
	{
		title: "Main",
		id: 1,
		linkUrl: "",
	},
	{
		title: "News",
		id: 2,
		linkUrl: "News",
	},
	{
		title: "Top 50",
		id: 3,
		linkUrl: "Top50",
	},
	{
		title: "SignIn",
		id: 4,
		linkUrl: "SignIn",
	},
	{
		title: "SignOut",
		id: 5,
		linkUrl: "Выйти",
	},
];
