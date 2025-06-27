import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Store = {
  storeID: string;
  storeName: string;
  isActive: number;
  images: {
    banner: string;
    logo: string;
    icon: string;
  };
};

type StoresState = {
  list: Store[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: StoresState = {
  list: [],
  status: "idle",
  error: null,
};

// get cheapshark stores
export const fetchStores = createAsyncThunk("stores/fetchStores", async () => {
  const res = await fetch("https://www.cheapshark.com/api/1.0/stores");
  const data = await res.json();
  return data as Store[];
});

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStores.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchStores.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchStores.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export default storesSlice.reducer;
