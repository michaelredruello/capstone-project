import { configureStore } from "@reduxjs/toolkit";
import storesReducer from "../store/storesSlice";
import dealsReducer from "../store/dealsSlice";
import gameReducer from "../store/gameSlice";
import searchReducer from "../store/searchSlice";
import steamReducer from "../store/steamSlice";

export const store = configureStore({
  reducer: {
    stores: storesReducer,
    deals: dealsReducer,
    game: gameReducer,
    search: searchReducer,
    steam: steamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
