import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * Film Split Api
 *
 * initialize an empty api service that we'll inject our film endpoints into.
 * */
export const filmSplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: () => ({}),
});
