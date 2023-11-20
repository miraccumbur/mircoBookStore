import { configureStore } from "@reduxjs/toolkit";
import hamburgerMenuReducer from "./hamburgerMenuReducer";

export const store = configureStore({
  reducer: {
    hamburgerMenu: hamburgerMenuReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
