import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type GameInfo = {
  info: {
    title: string;
    steamAppID: string;
    thumb: string;
  };
  cheapestPriceEver: {
    price: string;
    date: number;
  };
  deals: Array<{
    storeID: string;
    dealID: string;
    price: string;
    retailPrice: string;
    savings: string;
  }>;
};

type GameState = {
  game: GameInfo | null;
  loading: boolean;
  error: string | null;
};

const initialState: GameState = {
  game: null,
  loading: false,
  error: null,
};

export const fetchGameInfo = createAsyncThunk(
  "game/fetchGameInfo",
  async (gameID: string) => {
    const response = await fetch(
      `https://www.cheapshark.com/api/1.0/games?id=${gameID}`
    );
    return await response.json();
  }
);

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    clearGame: (state) => {
      state.game = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGameInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGameInfo.fulfilled, (state, action) => {
        state.game = action.payload;
        state.loading = false;
      })
      .addCase(fetchGameInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch game info";
      });
  },
});

export const { clearGame } = gameSlice.actions;
export default gameSlice.reducer;
