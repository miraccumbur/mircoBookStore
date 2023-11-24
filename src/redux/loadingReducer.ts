import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "./store";

interface LoadingState {
  value: boolean;
}

const initialState: LoadingState = {
  value: false,
};

export const loadingReducer = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setLoading } = loadingReducer.actions;
export const loading = (state: AppState) => state.loading.value;
export default loadingReducer.reducer;
