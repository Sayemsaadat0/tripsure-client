import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaArrowTurnUp } from "react-icons/fa6";

const CommonSwiperForFamilyAndSummer = ({ SwiperData }) => {
  return (
    <div className="">
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
        {SwiperData?.map((todo, index) => (
          <SwiperSlide className="" key={index}>
            <div className="card  bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://w0.peakpx.com/wallpaper/67/341/HD-wallpaper-royal-enfield-bike-dirt-ladakh-leh-moterbike-re-road-trip.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{todo?.title}</h2>
                <p>{todo?.introduction.slice(0, 120)}...</p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/FamilyGuideSingleCardDetails/${todo?._id}`}
                    className="btn btn-primary"
                  >
                    details<FaArrowTurnUp></FaArrowTurnUp>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommonSwiperForFamilyAndSummer;
