import { filmSplitApi as api } from '../store/filmApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    getGenreMovieList: build.query<
      GetGenreMovieListApiResponse,
      GetGenreMovieListApiArg
    >({
      query: queryArg => ({
        url: `/genre/movie/list`,
        params: { language: queryArg.language },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type GetGenreMovieListApiResponse = /** status 200  */ {
  genres?: {
    id?: number;
    name?: string;
  }[];
};
export type GetGenreMovieListApiArg = {
  language?: string;
};
export const { useGetGenreMovieListQuery } = injectedRtkApi;