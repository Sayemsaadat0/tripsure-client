import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";


const DoSwiper = ({ doPlace }) => {
  return (
    <div className="lg:p-6 ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Navigation]}
        className="mySwiper"
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {doPlace?.map((todo, index) => (
          <SwiperSlide key={index}>
            <Link to={`/dothings-attraction-reviews/${todo._id}`}>
              <img
                className="h-40  w-full rounded-lg object-cover"
                src={todo.picture}
                alt=""
              />
              <div className="mt-3">
                <h2 className="text-black font-semibold">{todo.placetitle}</h2>

                <div className="flex justify-between ">
                  <p className="text-sm">
                    <span className="text-red-500 font-bold">${todo.costperperson}</span> /person
                  </p>
                  <p className="text-red-500  flex items-center  justify-between gap-2">
                    <Rating
                      placeholderRating={todo.ratings}
                      placeholderSymbol={<BsStarFill className="w-3"></BsStarFill>}
                      emptySymbol={<BsStar className="w-3"></BsStar>}
                      fullSymbol={<BsStarFill className="w-4"></BsStarFill>}
                      readonly
                    />
                    <span className="text-black text-sm">(45)</span>
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DoSwiper;