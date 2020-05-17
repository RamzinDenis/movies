/**
 * Split array into smaller chunks with the length of n
 * @param arr array of any values
 * @param n length of splitted chunks
 * */

export const sliseArrayByN = <T>(arr: T[], n: number): T[][] => {
	let increment = 0;
	const updatedArray: T[][] = [];
	while (updatedArray.length < arr.length / n) {
		updatedArray.push(arr.slice(0 + increment, n + increment));
		increment += n;
	}
	return updatedArray;
};
