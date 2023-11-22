import React, { PropsWithChildren } from "react";

import c from "./bookCard.module.css";
import { Book } from "../../types/Book";
import Button from "../Button";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { useAppDispatch } from "../../hooks/useRedux";
import { addToCart } from "../../redux/cartReducer";
import { setModal } from "../../redux/modalReducer";

const BookCard: React.FC<PropsWithChildren<{ data: Book }>> = ({ data }) => {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  return (
    <div className={c.container}>
      <img src={data.image} alt={data.title} className={c.image} />
      <div className={c.title}>{data.title}</div>
      <div className={c.isbn}>ISBN: {data.isbn13}</div>
      <div className={c.price}>{data.price}</div>
      <div className={c.buttonField}>
        <Button
          text="Detail"
          onClick={() => navigate("/detail/" + data.isbn13)}
          className={c.button}
        />
        <Button
          text="Add To Cart"
          onClick={() => {
            dispatch(
              addToCart({
                isbn13: data.isbn13,
                title: data.title,
                image: data.image,
                price: data.price,
                subtitle: data.subtitle,
                url: data.url,
              })
            );
            dispatch(setModal({ value: true, type: "cart" }));
          }}
          className={c.button}
        />
      </div>
    </div>
  );
};

export default BookCard;
