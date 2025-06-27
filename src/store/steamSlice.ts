import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const RAPIDAPI_KEY = import.meta.env.VITE_STEAM_API_KEY;
const RAPIDAPI_HOST = "steam2.p.rapidapi.com";

interface SteamGame {
  imgUrl: string;
  title: string;
  description: string;
  price: string;
  released: string;
  developer: {
    name: string;
    link: string;
  };
  publisher: {
    name: string;
    link: string;
  };
  tags: Array<{
    id: number;
    name: string;
  }>;
  allReviews: {
    summary: string;
  };
  DLCs: any[];
}

interface SteamState {
  steamGame: SteamGame | null;
  loading: boolean;
  error: string | null;
}

const initialState: SteamState = {
  steamGame: null,
  loading: false,
  error: null,
};

export const fetchSteamGame = createAsyncThunk(
  "steam/fetchSteamGame",
  async (steamAppID: string) => {
    const response = await fetch(
      `https://${RAPIDAPI_HOST}/appDetail/${steamAppID}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": RAPIDAPI_KEY,
          "X-RapidAPI-Host": RAPIDAPI_HOST,
        },
      }
    );
    if (!response.ok) throw new Error("Steam API request failed");
    const data = await response.json();
    return data;
  }
);

const steamSlice = createSlice({
  name: "steam",
  initialState,
  reducers: {
    clearSteamGame: (state) => {
      state.steamGame = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSteamGame.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSteamGame.fulfilled, (state, action) => {
        state.loading = false;
        state.steamGame = action.payload;
      })
      .addCase(fetchSteamGame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch Steam data";
      });
  },
});

export const { clearSteamGame } = steamSlice.actions;
export default steamSlice.reducer;
