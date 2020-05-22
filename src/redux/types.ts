const key = "api_key=d8761abd4e185121722d68367ed59973";
export const url = `https://api.themoviedb.org/3/movie/popular?${key}&language=en-US&page=1`;

export const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?${key}&language=en-US`;

export const movieUrl = (id: number) =>
	`https://api.themoviedb.org/3/movie/${id}?${key}&language=en-US`;
