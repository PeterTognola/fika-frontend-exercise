import { filmSplitApi as api } from '../store/filmApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    getSearchMovie: build.query<
      GetSearchMovieApiResponse,
      GetSearchMovieApiArg
    >({
      query: queryArg => ({
        url: `/search/movie`,
        params: {
          year: queryArg.year,
          primary_release_year: queryArg.primaryReleaseYear,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type GetSearchMovieApiResponse = unknown;
export type GetSearchMovieApiArg = {
  year: number;
  primaryReleaseYear: number;
};
export const { useGetSearchMovieQuery } = injectedRtkApi;
