import { configureStore } from "@reduxjs/toolkit";
import hamburgerMenuReducer from "./hamburgerMenuReducer";
import loadingReducer from "./loadingReducer";
import modalReducer from "./modalReducer";
import cartReducer from "./cartReducer";

export const store = configureStore({
  reducer: {
    hamburgerMenu: hamburgerMenuReducer,
    loading: loadingReducer,
    modal: modalReducer,
    cart: cartReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
