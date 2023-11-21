import React, { PropsWithChildren } from "react";

import c from "./bookCard.module.css";
import { Book } from "../../types/Book";
import Button from "../Button";
import { NavigateFunction, useNavigate } from "react-router-dom";

const BookCard: React.FC<PropsWithChildren<{ data: Book }>> = ({ data }) => {
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
          onClick={() => navigate("/detail/" + data.isbn13)}
          className={c.button}
        />
      </div>
    </div>
  );
};

export default BookCard;
