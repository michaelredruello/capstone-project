import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Deal = {
  dealID: string;
  storeID: string;
  gameID: string;
  title: string;
  salePrice: string;
  normalPrice: string;
  isOnSale: string;
  savings: string;
  metacriticScore: string;
  steamRatingText: string;
  steamRatingPercent: string;
  steamRatingCount: string;
  steamAppID: string;
  releaseDate: number;
  lastChange: number;
  dealRating: string;
  thumb: string;
};

type DealsState = {
  deals: Deal[];
  loading: boolean;
  error: string | null;
};

const initialState: DealsState = {
  deals: [],
  loading: false,
  error: null,
};

export const fetchDeals = createAsyncThunk(
  "deals/fetchDeals",
  async ({ page, sortBy }: { page: number; sortBy: string }) => {
    const response = await fetch(
      `https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=${sortBy}&pageSize=20&pageNumber=${page}`
    );
    return await response.json();
  }
);

const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.deals = action.payload;
        state.loading = false;
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch deals";
      });
  },
});

export default dealsSlice.reducer;
