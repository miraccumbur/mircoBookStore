import React, { PropsWithChildren } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { AppDispatch, AppState } from "../../redux/store";
import { ICart, ICartValue } from "../../types/Cart";

import c from "./cartModal.module.css";
import { clearCart, decrement, increment } from "../../redux/cartReducer";
import Button from "../../components/Button";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { setModal } from "../../redux/modalReducer";

const CartModal: React.FC<PropsWithChildren<{}>> = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  const cart: ICartValue = useAppSelector((state: AppState) => state.cart);

  return (
    <div className={c.container}>

      <div className={c.cartSummaryTop}>
        <div>Cart Summary</div>
        <div
          className={c.close}
          onClick={() => dispatch(setModal({ status: false, value: {} }))}
        >
          X
        </div>
      </div>
      {cart.value.length > 0 && (
        <div className={c.clear} onClick={() => dispatch(clearCart())}>
          Clear Cart
        </div>
      )}

      <div className={c.itemField}>
        {cart.value
          .slice(0)
          .reverse()
          .map((data: ICart) => {
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

      {cart.value.length > 0 && (
        <div className={c.totalPrice}>
          TOTAL PRICE: &nbsp;${cart.totalPrice.toFixed(2)}
        </div>
      )}

      {cart.value.length === 0 && (
        <div className={c.empty}>Your cart is empty.</div>
      )}

      <Button
        text="Go My Cart"
        onClick={() => {
          dispatch(setModal({ status: false, value: {} }));
          navigate("/cart");
        }}
        className={c.button}
      />
    </div>
  );
};

export default CartModal;
