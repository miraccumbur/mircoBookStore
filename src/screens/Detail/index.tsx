import React, { PropsWithChildren, useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { useAppDispatch } from "../../hooks/useRedux";
import { setLoading } from "../../redux/loadingReducer";
import sendRequest from "../../services/request";
import { BookDetail, BookDetailResponse } from "../../types/Book";

import { DetailParams } from "../../types/Detail";

import c from "./detail.module.css";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { addToCart } from "../../redux/cartReducer";
import { setModal } from "../../redux/modalReducer";

const Detail: React.FC<PropsWithChildren<{}>> = () => {
  const params = useParams<DetailParams>();
  const dispatch: AppDispatch = useAppDispatch();

  const [bookData, setBookData] = useState<BookDetail>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async (): Promise<void> => {
    try {
      dispatch(setLoading(true));
      const data: BookDetailResponse = await sendRequest(
        process.env.REACT_APP_API_URL + "books/" + params.isbn,
        "get"
      );
      console.log(data.data);
      setBookData(data.data);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
    }
  };

  if (!bookData) return <Loading />;
  return (
    <div className={c.container}>
      <Header />
      <div className={c.contentField}>
        <div className={c.contentFieldTop}>
          <img src={bookData.image} alt={bookData.title} className={c.image} />
          <div className={c.contentFieldTopRight}>
            <div className={c.title}>{bookData.title}</div>
            <div className={c.authorsPublisherLanguageRating}>
              AUTHORS: {bookData.authors}
            </div>
            <div className={c.authorsPublisherLanguageRating}>
              PUBLISHER: {bookData.publisher}
            </div>
            <div className={c.authorsPublisherLanguageRating}>
              LANGUAGE: {bookData.language}
            </div>
            <div className={c.authorsPublisherLanguageRating}>
              RATING: {bookData.rating}
            </div>
            <div className={c.subtitle}>{bookData.subtitle}</div>
            <div className={c.isbn}>ISBN: {bookData.isbn13}</div>
            <div className={c.priceAndButtonField}>
              <div className={c.price}>{bookData.price}</div>
              <Button
                text="Add To Cart"
                onClick={() => {
                  dispatch(
                    addToCart({
                      isbn13: bookData.isbn13,
                      title: bookData.title,
                      image: bookData.image,
                      price: bookData.price,
                      subtitle: bookData.subtitle,
                      url: bookData.url,
                    })
                  );
                  dispatch(setModal({ value: true, type: "cart" }));
                }}
                className={c.button}
              />
            </div>
          </div>
        </div>
        <div className={c.contentFieldBottom}>
          <div className={c.title}>DESCRIPTION</div>
          <div className={c.description}>{bookData.desc}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
