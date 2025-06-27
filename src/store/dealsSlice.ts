import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

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
  isLoading: boolean;
  error: string | null;
  page: number;
  sortBy: string;
};

const initialState: DealsState = {
  deals: [],
  isLoading: false,
  error: null,
  page: 0,
  sortBy: "savings",
};

export const fetchDeals = createAsyncThunk(
  "deals/fetchDeals",
  async ({ page, sortBy }: { page: number; sortBy: string }) => {
    const response = await fetch(
      `https://www.cheapshark.com/api/1.0/deals?sortBy=${sortBy}&pageSize=20&pageNumber=${page}`
    );
    return await response.json();
  }
);

const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.deals = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch deals";
      });
  },
});

export const { setPage, setSortBy } = dealsSlice.actions;

export default dealsSlice.reducer;
