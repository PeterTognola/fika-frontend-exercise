import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filmSplitApi } from './filmApi';
import { filmsSlice } from './filmSlice';

export const store = configureStore({
  reducer: {
    [filmSplitApi.reducerPath]: filmSplitApi.reducer,
    [filmsSlice.name]: filmsSlice.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(filmSplitApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Define the `RootState` as the return type:
export type RootState = ReturnType<typeof store.getState>;
