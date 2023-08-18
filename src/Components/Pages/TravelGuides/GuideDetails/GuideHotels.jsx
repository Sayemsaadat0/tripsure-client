import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const GuideHotels = () => {
  return (
    <>
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-black text-4xl font-bold">Hotels</h1>
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
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/4f/2b/e8/the-common-room-project.jpg?w=400&h=300&s=1https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/4f/2b/e8/the-common-room-project.jpg?w=400&h=300&s=1')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  Hotel des Arts Saigon - MGallery
                </h1>
                <p className="text-xl  text-white mx-5">From $168/Night</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/14/e6/the-myst-dong-khoi.jpg?w=400&h=-1&s=1')  center center/cover",
              }}
              className="h-96 cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  Villa Song Saigon
                </h1>
                <p className="text-xl text-white mx-5">From $228/Night</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/a3/98/81/guest-room.jpg?w=400&h=-1&s=1')  center center/cover",
              }}
              className="h-96 cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  The Myst Dong Khoi
                </h1>
                <p className="text-xl text-white mx-5">From $98/Night</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/4f/2b/e8/the-common-room-project.jpg?w=400&h=300&s=1https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/4f/2b/e8/the-common-room-project.jpg?w=400&h=300&s=1')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <div className="absolute top-72">
                <h1 className="text-white text-2xl font-bold mx-5  hover:underline">
                  Hotel des Arts Saigon - MGallery
                </h1>
                <p className="text-xl  text-white mx-5">From $168/Night</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default GuideHotels;
