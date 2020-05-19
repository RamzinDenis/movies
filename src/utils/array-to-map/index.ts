export interface DefaultObject {
	id: string | number;
	[key: string]: any;
}

type Map<T> = {
	[key: string]: T;
};

export const arrToMap = <T extends { id: string | number }>(
	arr: T[]
): Map<T> => {
	return arr.reduce((acc, object) => ({ ...acc, [object.id]: object }), {});
};
