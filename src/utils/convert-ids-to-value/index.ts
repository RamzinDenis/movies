export const convertIdsTovalue = <
	Value,
	T extends { [key: string]: Value },
	R extends { [key: string]: T }
>(
	arr: string[],
	map: R,
	prop: string
) => {
	return arr.map(item => map[item][prop]);
};
