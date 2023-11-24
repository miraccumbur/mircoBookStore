import React from "react";
import Cart from ".";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

describe("Cart", () => {
  test("increment cart item", async () => {
    const initialState = {
      cart: {
        value: [
          {
            isbn: "9781098103828",
            count: 1,
            title: "Snowflake: The Definitive Guide",
            image: "https://itbook.store/img/books/9781098103828.png",
            price: 58.9,
          },
        ],
        totalPrice: 58.9,
      },
      hamburgerMenu: {
        value: false,
      },
      modal: {
        status: false,
        value: {},
      },
    };

    const mockStore = configureStore();
    const testStore = mockStore(initialState);

    const mockedJestToDo = jest.fn()
    render(
      <Provider store={testStore}>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </Provider>
    );
    const cartTitleElement = screen.getByText("Cart");
    expect(cartTitleElement).toBeInTheDocument();
    const item1 = screen.getByText("Snowflake: The Definitive Guide");
    expect(item1).toBeInTheDocument();
    const units = screen.getByText("1");
    expect(units).toBeInTheDocument();
    const increment = screen.getByText('+')
    fireEvent.click(increment)
    // console.log(testStore.getState())
    // expect(units).toBe('2')
  });
});
