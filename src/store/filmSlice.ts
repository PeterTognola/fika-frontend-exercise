import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieResult } from 'moviedb-promise/dist/request-types';
import { Genre } from 'moviedb-promise/dist/types';
import { RootState } from './store';

interface FilmSearchPending {
  query?: string | null;
}

interface FilmSearchSuccess {
  films: MovieResult[];
}

interface FilmSearchError {
  message: string;
}

type ToggleAdult = boolean;

type FilmsState = {
  films: MovieResult[];
  genres: Genre[];
  includeAdultContent: boolean;
  searchQuery?: string | null;
  isLoading: boolean;
  errorMessage?: string | null;
  genresMessage?: string | null;
  page?: number;
};

const initialState: FilmsState = {
  films: [],
  includeAdultContent: false,
  isLoading: false,
  genres: [],
};

export const filmsSlice = createSlice({
  name: 'films',
  // The initial state:
  initialState,
  reducers: {
    searchFilmPending(
      state: FilmsState,
      action: PayloadAction<FilmSearchPending>,
    ) {
      return {
        ...state,
        searchQuery: action.payload.query || state.searchQuery,
        isLoading: true,
      };
    },
    searchFilmSuccess(
      state: FilmsState,
      action: PayloadAction<FilmSearchSuccess>,
    ) {
      return {
        ...state,
        films: action.payload.films,
        isLoading: false,
      };
    },
    searchFilmError(state: FilmsState, action: PayloadAction<FilmSearchError>) {
      return {
        ...state,
        films: [],
        isLoading: false,
        errorMessage: action.payload.message,
      };
    },
    toggleAdultContent(state: FilmsState, action: PayloadAction<ToggleAdult>) {
      return {
        ...state,
        includeAdult: action.payload,
      };
    },
    fetchFilmGenres(
      state: FilmsState,
      action: PayloadAction<
        FilmGenresSuccess | FilmGenresPending | FilmGenresError
      >,
    ) {
      // Success, and store genres
      if ((action.payload as FilmGenresSuccess).genres) {
        return {
          ...state,
          genres: (action.payload as FilmGenresSuccess).genres,
        };
      }

      if ((action.payload as FilmGenresError).message) {
        return {
          ...state,
          genres: [],
          genresMessage: (action.payload as FilmGenresError).message,
        };
      }

      return {
        ...state,
        genres: [],
      };
    },
  },
});

// Export all the Actions:
export const {
  searchFilmPending,
  searchFilmSuccess,
  toggleAdultContent,
  fetchFilmGenres,
} = filmsSlice.actions;

// Export all the Selectors:
export const selectFilms = (state: RootState) => state.films.films;
export const selectFilmsIsLoading = (state: RootState) => state.films.isLoading;
export const selectFilmsIncludeAdultContent = (state: RootState) =>
  state.films.includeAdultContent;
export const selectFilmsSearchQuery = (state: RootState) =>
  state.films.searchQuery;
export const selectFilmGenres = (state: RootState) => state.films.genres;

export type FilmGenresPending = void | null;

export interface FilmGenresSuccess {
  genres: Genre[];
}

export interface FilmGenresError {
  message: string;
}
