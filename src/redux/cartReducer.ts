import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "./store";
import { ICartValue } from "../types/Cart";
import { Book } from "../types/Book";

const localCartData: ICartValue = JSON.parse(localStorage.getItem('cart') || '{}')

const initialState: ICartValue = {
  value: localCartData.value || [],
  totalPrice: localCartData.totalPrice || 0.0,
};

const totalPriceUpdater = (state: ICartValue): number => {
  return parseFloat(
    state.value
      .reduce((sum, number) => sum + number.price * number.count, 0)
      .toFixed(2)
  );
};

const updateLocalStorage = (state: ICartValue): void => {
  window.localStorage.setItem(
    "cart",
    JSON.stringify({
      value: state.value,
      totalPrice: state.totalPrice,
    })
  );
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Book>) => {
      if (state.value.length > 0) {
        let control: number = -1;

        state.value.forEach((data, index): void => {
          if (data.isbn === action.payload.isbn13) control = index;
        });

        if (control > -1) {
          state.value[control].count += 1;
        } else {
          state.value.push({
            isbn: action.payload.isbn13,
            count: 1,
            title: action.payload.title,
            image: action.payload.image,
            price: parseFloat(action.payload.price.replace("$", "")),
          });
        }
      } else {
        state.value = [
          {
            isbn: action.payload.isbn13,
            count: 1,
            title: action.payload.title,
            image: action.payload.image,
            price: parseFloat(action.payload.price.replace("$", "")),
          },
        ];
      }
      state.totalPrice = totalPriceUpdater(state);
      updateLocalStorage(state)
    },

    increment: (state, action: PayloadAction<string>) => {
      state.value.find((data) => data.isbn === action.payload)!.count += 1;
      state.totalPrice = totalPriceUpdater(state);
      updateLocalStorage(state)
    },

    decrement: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex(
        (data) => data.isbn === action.payload
      );
      if (state.value[index].count > 1) {
        state.value[index].count -= 1;
      } else {
        state.value.splice(index, 1);
      }
      state.totalPrice = totalPriceUpdater(state);
      updateLocalStorage(state)
    },

    clearCart: (state) => {
      state.value = [];
      state.totalPrice = 0.0;
      updateLocalStorage(state)
    },
  },
});

export const { addToCart, clearCart, increment, decrement } =
  cartReducer.actions;
export const cart = (state: AppState) => state.cart.value;
export default cartReducer.reducer;
