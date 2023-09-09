import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaArrowTurnUp } from "react-icons/fa6";
import LazyLoad from "react-lazy-load";
import { Carousel } from 'antd';

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
        onSwiper={(swiper) => (swiper)}
      >
        {SwiperData?.map((todo, index) => (
          <SwiperSlide className="" key={index}>
            <div className="card">
            
            <Carousel autoplay>
           
                  {
                      todo.pictures.map((picture, index) => (
                        <img className='rounded-lg h-40 w-full object-cover' key={index} src={picture} alt="" />
                      ))
                    }
          
                  </Carousel>
              <div className="my-6">
                <h2 className="card-title">{todo?.title}</h2>
                <p>{todo?.introduction.slice(0, 120)}...</p>
                <div className="card-actions justify-start">
                  <Link
                    to={`/FamilyGuideSingleCardDetails/${todo?._id}`}
                    className="btn-link text-blue-500 flex justify-center items-center gap-1">
                    Read More<FaArrowTurnUp></FaArrowTurnUp>
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
