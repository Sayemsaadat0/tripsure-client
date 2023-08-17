import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const GuidePlaces = () => {
  return (
    <>
      <div className="">
        <div className="text-center">
          <h1 className="text-black text-4xl font-bold">Places</h1>
          <p className="text-lg text-black mt-1">
            Places to see, ways to wander, and signature experiences that define
            Ho Chi Minh City.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          grabCursor={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        >
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/11/d4/2a/bitexco-financial-tower.jpg?w=400&h=300&s=1https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/11/d4/2a/bitexco-financial-tower.jpg?w=400&h=300&s=1')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  Bitexco Financial Tower
                </h1>
                <p className="text-xl  text-white mx-5">Observation Point</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/9e/ce/a3/war-remnants-museum.jpg?w=400&h=-1&s=1')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  War Remnants Museum
                </h1>
                <p className="text-xl  text-white mx-5">History Museum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/f1/6d/fe/beautiful-cathedral.jpg?w=400&h=300&s=1')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  The Independence Palace
                </h1>
                <p className="text-xl  text-white mx-5">Cathedrals</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/11/d4/2a/bitexco-financial-tower.jpg?w=400&h=300&s=1https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/11/d4/2a/bitexco-financial-tower.jpg?w=400&h=300&s=1')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  Bitexco Financial Tower
                </h1>
                <p className="text-xl  text-white mx-5">Observation Point</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default GuidePlaces;
