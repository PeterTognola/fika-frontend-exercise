import { filmSplitApi as api } from '../store/filmApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    getDiscoverMovie: build.query<
      GetDiscoverMovieApiResponse,
      GetDiscoverMovieApiArg
    >({
      query: queryArg => ({
        url: `/discover/movie`,
        params: {
          sort_by: queryArg.sortBy,
          certification_country: queryArg.certificationCountry,
          certification: queryArg.certification,
          'certification.lte': queryArg['certification.lte'],
          'certification.gte': queryArg['certification.gte'],
          include_adult: queryArg.includeAdult,
          include_video: queryArg.includeVideo,
          language: queryArg.language,
          page: queryArg.page,
          primary_release_year: queryArg.primaryReleaseYear,
          'primary_release_date.gte': queryArg['primary_release_date.gte'],
          'primary_release_date.lte': queryArg['primary_release_date.lte'],
          'release_date.gte': queryArg['release_date.gte'],
          'release_date.lte': queryArg['release_date.lte'],
          with_release_type: queryArg.withReleaseType,
          year: queryArg.year,
          'vote_count.gte': queryArg['vote_count.gte'],
          'vote_count.lte': queryArg['vote_count.lte'],
          'vote_average.gte': queryArg['vote_average.gte'],
          'vote_average.lte': queryArg['vote_average.lte'],
          with_cast: queryArg.withCast,
          with_crew: queryArg.withCrew,
          with_people: queryArg.withPeople,
          with_companies: queryArg.withCompanies,
          with_genres: queryArg.withGenres,
          without_genres: queryArg.withoutGenres,
          with_keywords: queryArg.withKeywords,
          without_keywords: queryArg.withoutKeywords,
          'with_runtime.gte': queryArg['with_runtime.gte'],
          'with_runtime.lte': queryArg['with_runtime.lte'],
          with_original_language: queryArg.withOriginalLanguage,
          with_watch_providers: queryArg.withWatchProviders,
          watch_region: queryArg.watchRegion,
          with_watch_monetization_types: queryArg.withWatchMonetizationTypes,
          without_companies: queryArg.withoutCompanies,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type GetDiscoverMovieApiResponse = /** status 200  */ {
  page?: number;
  results?: MovieListResultObject[];
  total_results?: number;
  total_pages?: number;
};
export type GetDiscoverMovieApiArg = {
  /** Choose from one of the many available sort options. */
  sortBy?:
    | ''
    | 'popularity.asc'
    | 'popularity.desc'
    | 'release_date.asc'
    | 'release_date.desc'
    | 'revenue.asc'
    | 'revenue.desc'
    | 'primary_release_date.asc'
    | 'primary_release_date.desc'
    | 'original_title.asc'
    | 'original_title.desc'
    | 'vote_average.asc'
    | 'vote_average.desc'
    | 'vote_count.asc'
    | 'vote_count.desc';
  /** Used in conjunction with the certification filter, use this to specify a country with a valid certification. */
  certificationCountry?: string;
  /** Filter results with a valid certification from the 'certification_country' field. */
  certification?: string;
  /** Filter and only include movies that have a certification that is less than or equal to the specified value. */
  'certification.lte'?: string;
  /** Filter and only include movies that have a certification that is greater than or equal to the specified value. */
  'certification.gte'?: string;
  /** A filter and include or exclude adult movies. */
  includeAdult?: boolean;
  /** A filter to include or exclude videos. */
  includeVideo?: boolean;
  /** Specify a language to query translatable fields with. */
  language?: string;
  /** Specify the page of results to query. */
  page?: number;
  /** A filter to limit the results to a specific primary release year. */
  primaryReleaseYear?: number;
  /** Filter and only include movies that have a primary release date that is greater or equal to the specified value. */
  'primary_release_date.gte'?: string;
  /** Filter and only include movies that have a primary release date that is less than or equal to the specified value. */
  'primary_release_date.lte'?: string;
  /** Filter and only include movies that have a release date (looking at all release dates) that is greater or equal to the specified value. */
  'release_date.gte'?: string;
  /** Filter and only include movies that have a release date (looking at all release dates) that is less than or equal to the specified value. */
  'release_date.lte'?: string;
  /** Specify a comma (AND) or pipe (OR) separated value to filter release types by. These release types map to the same values found on the movie release date method. */
  withReleaseType?: number;
  /** A filter to limit the results to a specific year (looking at all release dates). */
  year?: number;
  /** Filter and only include movies that have a vote count that is greater or equal to the specified value. */
  'vote_count.gte'?: number;
  /** Filter and only include movies that have a vote count that is less than or equal to the specified value. */
  'vote_count.lte'?: number;
  /** Filter and only include movies that have a rating that is greater or equal to the specified value. */
  'vote_average.gte'?: number;
  /** Filter and only include movies that have a rating that is less than or equal to the specified value. */
  'vote_average.lte'?: number;
  /** A comma separated list of person ID's. Only include movies that have one of the ID's added as an actor. */
  withCast?: string;
  /** A comma separated list of person ID's. Only include movies that have one of the ID's added as a crew member. */
  withCrew?: string;
  /** A comma separated list of person ID's. Only include movies that have one of the ID's added as a either a actor or a crew member. */
  withPeople?: string;
  /** A comma separated list of production company ID's. Only include movies that have one of the ID's added as a production company. */
  withCompanies?: string;
  /** Comma separated value of genre ids that you want to include in the results. */
  withGenres?: string;
  /** Comma separated value of genre ids that you want to exclude from the results. */
  withoutGenres?: string;
  /** A comma separated list of keyword ID's. Only includes movies that have one of the ID's added as a keyword. */
  withKeywords?: string;
  /** Exclude items with certain keywords. You can comma and pipe seperate these values to create an 'AND' or 'OR' logic. */
  withoutKeywords?: string;
  /** Filter and only include movies that have a runtime that is greater or equal to a value. */
  'with_runtime.gte'?: number;
  /** Filter and only include movies that have a runtime that is less than or equal to a value. */
  'with_runtime.lte'?: number;
  /** Specify an ISO 639-1 string to filter results by their original language value. */
  withOriginalLanguage?: string;
  /** A comma or pipe separated list of watch provider ID's. Combine this filter with `watch_region` in order to filter your results by a specific watch provider in a specific region. */
  withWatchProviders?: string;
  /** An ISO 3166-1 code. Combine this filter with `with_watch_providers` in order to filter your results by a specific watch provider in a specific region. */
  watchRegion?: string;
  /** In combination with `watch_region`, you can filter by monetization type. */
  withWatchMonetizationTypes?: 'flatrate' | 'free' | 'ads' | 'rent' | 'buy';
  /** Filter the results to exclude the specific production companies you specify here. `AND` / `OR` filters are supported. */
  withoutCompanies?: string;
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
export const { useGetDiscoverMovieQuery } = injectedRtkApi;
