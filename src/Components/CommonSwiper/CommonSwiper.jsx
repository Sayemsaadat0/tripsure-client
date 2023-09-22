import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaCircle, FaCircleNotch } from "react-icons/fa6";


const CommonSwiper = ({ allHotels }) => {

  return (
    <div>
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
        {allHotels?.map((todo, index) => (
          <SwiperSlide key={index}>
            <Link to={`/staythinngs-attraction-reviews/${todo._id}`}>
              <img
                className="h-64 w-full  object-cover"
                src={todo.picture}
                alt=""
              />
              <h2 className="text-black font-bold text-xl">{todo.hotelName}</h2>
              <p className="text-green-700  flex items-center  justify-between gap-2">
                <Rating
                  placeholderRating={todo.ratings}
                  emptySymbol={<FaCircleNotch className="w-3"></FaCircleNotch>}
                  placeholderSymbol={<FaCircle className="w-3"></FaCircle>}
                  fullSymbol={<FaCircle className="w-4"></FaCircle>}
                  readonly
                />
                <span className="text-sm">{todo.visitcount}</span>
              </p>
              <h3 className="text-md font-bold">
                From ${todo?.costperperson}/night
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommonSwiper;
