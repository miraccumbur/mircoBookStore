import React, { PropsWithChildren } from "react";
import c from "./cart.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { setModal } from "../../redux/modalReducer";
import { clearCart, decrement, increment } from "../../redux/cartReducer";
import { AppDispatch, AppState } from "../../redux/store";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { ICart, ICartValue } from "../../types/Cart";
import Button from "../../components/Button";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Cart: React.FC<PropsWithChildren<{}>> = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  const cart: ICartValue = useAppSelector((state: AppState) => state.cart);

  return (
    <div className={c.container}>
      <Header />
      <div className={c.contentField}>
        {/* top field */}
        <div className={c.contentTop}>
          <div>Cart</div>
          {cart.value.length > 0 && (
            <div className={c.clear} onClick={() => dispatch(clearCart())}>
              Clear Cart
            </div>
          )}
        </div>

        {/* item field */}
        <div className={c.itemField}>
          {cart.value.map((data: ICart) => {
            return (
              <div className={c.item} key={data.isbn}>
                <img src={data.image} alt={data.title} className={c.image} />
                <div className={c.infoArea}>
                  <div className={c.title}>{data.title}</div>
                  <div className={c.isbn}>{data.isbn}</div>
                </div>
                <div className={c.priceArea}>
                  <div className={c.price}>
                    ${(data.price * data.count).toFixed(2)}
                  </div>
                  <div className={c.priceAreaBottom}>
                    <div
                      className={c.incrementDecrement}
                      onClick={() => dispatch(decrement(data.isbn))}
                    >
                      -
                    </div>
                    <div className={c.count}>{data.count}</div>
                    <div
                      className={c.incrementDecrement}
                      onClick={() => dispatch(increment(data.isbn))}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* total price, button and empty state are show here */}
        {cart.value.length > 0 ? (
          <div className={c.priceField}>
            <div className={c.totalPrice}>
              TOTAL PRICE:&nbsp;&nbsp;${cart.totalPrice.toFixed(2)}
            </div>

            <Button
              text="Checkout"
              onClick={() => {
                dispatch(setModal({ status: false, value: {} }));
                navigate("/checkout");
              }}
              className={c.button}
            />
          </div>
        ) : (
          <div className={c.empty}>Your cart is empty.</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
