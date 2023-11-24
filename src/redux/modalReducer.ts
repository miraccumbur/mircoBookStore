import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "./store";
import { IModalState, IModalValueEmpty, ISuccessModal } from "../types/Modal";
import { ICart } from "../types/Cart";

import successIcon from "../assets/icons/modal/success.png";

const initialState: IModalState<ISuccessModal | ICart | IModalValueEmpty> = {
  status: false,
  value: {},
};

export const modalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (
      state,
      action: PayloadAction<IModalState<ICart | IModalValueEmpty>>
    ) => {
      state.value = action.payload.value;
      state.status = action.payload.status;
      state.type = action.payload.type;
    },

    setSuccessModal: (
      state,
      action: PayloadAction<IModalState<ISuccessModal>>
    ) => {
      state.value = {
        title: action.payload.value.title || undefined,
        icon: action.payload.value.icon || successIcon,
        message: action.payload.value.message || undefined,
        hideCloseButton: action.payload.value.hideCloseButton || false,
        onClose: action.payload.value.onClose || undefined,
        buttons: action.payload.value.buttons || undefined,
      };
      if (action.payload.value) state.type = action.payload.type;
    },
  },
});

export const { setModal, setSuccessModal } = modalReducer.actions;
export const modal = (state: AppState) => state.modal.value;
export default modalReducer.reducer;
