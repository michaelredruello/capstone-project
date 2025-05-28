import { configureStore } from "@reduxjs/toolkit";
import storesReducer from "../store/storesSlice";
import dealsReducer from "../store/dealsSlice";
import gameReducer from "../store/gameSlice";

export const store = configureStore({
  reducer: {
    stores: storesReducer,
    deals: dealsReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
