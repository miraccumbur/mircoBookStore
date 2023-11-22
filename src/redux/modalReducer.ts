import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "./store";
import { IModalState } from "../types/Modal";

const initialState: IModalState = {
  value: false,
};

export const modalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<IModalState>) => {
      state.value = action.payload.value;
      if (action.payload.value) state.type = action.payload.type;
    },
  },
});

export const { setModal } = modalReducer.actions;
export const modal = (state: AppState) => state.modal.value;
export default modalReducer.reducer;
