import { createSlice } from "@reduxjs/toolkit";
import type { AppState } from "./store";

interface HamburgerMenuState {
  value: boolean;
}

const initialState: HamburgerMenuState = {
  value: false,
};

export const hamburgerMenuReducer = createSlice({
  name: "hamburgerMenu",
  initialState,
  reducers: {
    setHamburgerMenuStatus: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setHamburgerMenuStatus } = hamburgerMenuReducer.actions;
export const hamburgerMenu = (state: AppState) => state.hamburgerMenu.value;
export default hamburgerMenuReducer.reducer;
