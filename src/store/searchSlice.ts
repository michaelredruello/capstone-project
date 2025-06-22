// store/searchSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type GameSummary = {
  gameID: string;
  external: string;
  thumb: string;
  cheapest: string;
};

type SearchState = {
  query: string;
  results: GameSummary[];
  loading: boolean;
  error: string | null;
};

const initialState: SearchState = {
  query: "",
  results: [],
  loading: false,
  error: null,
};

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (query: string) => {
    const response = await fetch(
      `https://www.cheapshark.com/api/1.0/games?title=${query}&limit=10`
    );
    const data = await response.json();
    return data as GameSummary[];
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    clearResults: (state) => {
      state.results = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.results = action.payload;
        state.loading = false;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Search failed";
      });
  },
});

export const { setQuery, clearResults } = searchSlice.actions;
export default searchSlice.reducer;
