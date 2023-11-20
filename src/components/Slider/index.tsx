import React, { PropsWithChildren } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { NavigateFunction, useNavigate } from "react-router-dom";

import Button from "../Button";

import { Books, Book } from "../../types/Book";

import c from "./slider.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

const Slider: React.FC<PropsWithChildren<{ data: Books }>> = ({ data }) => {
const navigate: NavigateFunction = useNavigate()
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {data &&
        data.books.slice(0, 5).map((data: Book) => {
          return (
            <SwiperSlide key={data.isbn13}>
              <div className={c.content}>
                <img src={data.image} alt={data.title} className={c.image} />
                <div className={c.contentRightField}>
                  <div className={c.title}>{data.title}</div>
                  <div className={c.subtitle}>{data.subtitle}</div>
                  <div className={c.isbn}>{data.isbn13}</div>
                  <div className={c.priceField}>
                    <div className={c.price}>{data.price}</div>
                    <Button text='Detail' onClick={() => navigate('/detail/'+data.isbn13)}/>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Slider;
