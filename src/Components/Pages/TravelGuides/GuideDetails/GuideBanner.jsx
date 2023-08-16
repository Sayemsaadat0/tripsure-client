import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
const GuideBanner = () => {
    return (
        <div className="max-w-6xl mx-auto">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper my-5 rounded"
        >
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="image-full w-full h-[550px] md:h-[620px]"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1508804052814-cd3ba865a116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="image-full w-full h-[550px] md:h-[620px]"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://plus.unsplash.com/premium_photo-1675826460422-e39481fae224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="image-full w-full h-[550px] md:h-[620px]"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default GuideBanner;