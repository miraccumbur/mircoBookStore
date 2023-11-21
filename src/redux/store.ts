import { configureStore } from "@reduxjs/toolkit";
import hamburgerMenuReducer from "./hamburgerMenuReducer";
import loadingReducer from "./loadingReducer";

export const store = configureStore({
  reducer: {
    hamburgerMenu: hamburgerMenuReducer,
    loading: loadingReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
