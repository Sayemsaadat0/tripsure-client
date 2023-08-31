import React from "react";
import Rating from "react-rating";

import { Link } from "react-router-dom";
import {  Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCircle, FaCircleNotch, FaHeart } from "react-icons/fa6";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

// todo:button and fetch kore data dekhano baki ache

const Eat = ({ country }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get(`https://tripsure-server-sayemsaadat0.vercel.app/restaurant`)
      .then((data) => {
        setRestaurants(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
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
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
     
      >
        <SwiperSlide>
          <div className="space-y-4 ">
            <h3 className="text-2xl font-semibold">Eat</h3>
            <p>A mix of the charming, modern, and tried and true.</p>
          </div>
        </SwiperSlide>
        {restaurants &&
          restaurants.slice(0, 9).map((restaurant) => (
            <SwiperSlide key={restaurant._id}>
              <Link>
                <div>
                  <img
                    className="h-64  w-full  hover:scale-105 duration-300  object-cover hover:bg-white hover:opacity-80"
                    src={restaurant && restaurant?.picture}
                    alt="Restaurant"
                  />
                  <button className="btn absolute top-2 right-2">
                    <FaHeart size={20} />
                  </button>
                  <div>
                    <h3 className="text-xl font-bold hover:underline mt-2">
                      {restaurant && restaurant?.title}
                    </h3>

                    <p className="text-green-700 mt-[6px] flex space-x-2 items-center">
                      <Rating
                        placeholderRating={
                          restaurant && restaurant?.ratings?.atmosphere
                        }
                        emptySymbol={
                          <FaCircleNotch className="w-[14px]"></FaCircleNotch>
                        }
                        placeholderSymbol={
                          <FaCircle className="w-[14px]"></FaCircle>
                        }
                        fullSymbol={<FaCircle className="w-[14px]"></FaCircle>}
                        readonly
                      />
                      <span className=" text-[17px] inline-block text-black">
                        432
                      </span>
                    </p>
                    <p>
                      $$ - $$$ • {restaurant && restaurant?.address?.city},{" "}
                      {restaurant && restaurant?.address?.country}{" "}
                    </p>
                    <h3 className="font-bold">
                      {restaurant && restaurant?.address?.state},{" "}
                      {restaurant && restaurant?.address?.country}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Eat;
