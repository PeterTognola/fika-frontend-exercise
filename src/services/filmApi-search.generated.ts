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
export type GetSearchMovieApiResponse = /** status 200  */ {
  page?: number;
  results?: MovieListResultObject[];
  total_results?: number;
  total_pages?: number;
};
export type GetSearchMovieApiArg = {
  year?: number;
  primaryReleaseYear?: number;
};
export type ImagePath = object;
export type MovieListResultObject = {
  poster_path?: ImagePath;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: ImagePath;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
};
export const { useGetSearchMovieQuery } = injectedRtkApi;
