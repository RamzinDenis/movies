interface NavigationData {
	title: string;
	id: number;
	linkUrl: string;
}

export const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
export const MAIN_POSTER_SIZE = "w780";
export const CARD_POSTER_SIZE = "w342";
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
		linkUrl: "SignOut",
	},
];

interface ArticleData {
	url: string;
	title: string;
	id: number;
}

export const articleData: ArticleData[] = [
	{
		url: "https://i.ytimg.com/vi/nDuX0VmaT4U/maxresdefault.jpg",
		title: "New batman",
		id: 1,
	},
	{
		url:
			"https://img.cinemablend.com/filter:scale/quill/2/d/f/5/7/3/2df5731e24d83d150ceaacc4a613cea5206653a0.jpg?mw=600",
		title: "xXx 3: 10 Cool Behind-The-Scenes",
		id: 2,
	},
	{
		url:
			"https://img.cinemablend.com/filter:scale/quill/d/e/7/5/8/7/de7587fce4e7dfef80c66b10775bd9beba0180f0.jpg?mw=600",
		title: "5 Questions We Still Have About The Fast And Furious Franchise ",
		id: 3,
	},
	{
		url:
			"https://img.cinemablend.com/filter:scale/quill/d/f/8/c/b/1/df8cb13787c1acab0967f40ff97733f631def77f.jpg?mw=600",
		title: "Share Vin Diesel Claims He’s ‘Mitigating A War’ ",
		id: 4,
	},
];
