import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filmsSlice } from './filmSlice';

export const store = configureStore({
  reducer: {
    [filmsSlice.name]: filmsSlice.reducer,
  },
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Define the `RootState` as the return type:
export type RootState = ReturnType<typeof store.getState>;
