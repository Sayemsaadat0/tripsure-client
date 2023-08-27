import React from "react";
import Rating from "react-rating";

import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCircle, FaCircleNotch, FaHeart } from "react-icons/fa6";

// todo:button and fetch kore data dekhano baki ache

const Do = () => {
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
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Do</h3>
            <p>A mix of the charming, modern, and tried and true.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <div>
              <img
                className="h-64  w-full  hover:scale-105 duration-300  object-cover hover:bg-white hover:opacity-80"
                src="https://i.ibb.co/kMdWhPN/image.png"
                alt=""
              />
              <button className="btn absolute top-2 right-2">
                <FaHeart size={20} />
              </button>
              <div>
                <h3 className="text-xl font-bold hover:underline mt-2">
                  Sayeman Beach Resort
                </h3>

                <p className="text-green-700 mt-[6px] flex space-x-2 items-center">
                  <Rating
                    placeholderRating={3.5}
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
                   32
                  </span>
                </p>
                <p>Parks</p>
                <h3 className="font-bold">Gazipur, Bangladesh</h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Do;
