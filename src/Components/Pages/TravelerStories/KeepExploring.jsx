import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const KeepExploring = () => {
  return (
    <div className="my-16">
      {/* title  */}
      <div className="mx-auto text-center">
        <h1 className="text-4xl font-bold text-black">Keep Exploring</h1>
      </div>
      {/* cards  */}
      <div className="mt-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
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
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
        >
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/0d/02/f0/caption.jpg?w=1200&h=700&s=1&cx=2808&cy=1871&chk=v1_b3a6bf3e16c88af4e5f5')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <h1 className="text-white text-2xl font-bold mx-5 absolute top-72 hover:underline">
                Weekend in Greenwich, CT: A beach escape near NYC
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/fd/64/7e/caption.jpg?w=1200&h=700&s=1')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <h1 className="text-white text-2xl font-bold mx-5 absolute top-72 hover:underline">
                Your weekend guide to Santa Monica
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/7a/66/43/caption.jpg?w=1200&h=1200&s=1&cx=3008&cy=2000&chk=v1_ad2b0b28b29ee07b13f6')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <h1 className="text-white text-2xl font-bold mx-5 absolute top-72 hover:underline">
                3 perfect days in Lisbon
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/87/1a/e3/caption.jpg?w=1200&h=1200&s=1&cx=1920&cy=1080&chk=v1_7071b196c21eef4b234b')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <h1 className="text-white text-2xl font-bold mx-5 absolute top-72 hover:underline">
                A first-timers guide to Walt Disney World
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/87/1a/e3/caption.jpg?w=1200&h=1200&s=1&cx=1920&cy=1080&chk=v1_7071b196c21eef4b234b')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <h1 className="text-white text-2xl font-bold mx-5 absolute top-72 hover:underline">
                A first-timers guide to Walt Disney World
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/87/1a/e3/caption.jpg?w=1200&h=1200&s=1&cx=1920&cy=1080&chk=v1_7071b196c21eef4b234b')  center center/cover",
              }}
              className="h-96 relative cursor-pointer rounded-md"
            >
              <h1 className="text-white text-2xl font-bold mx-5 absolute top-72 hover:underline">
                A first-timers guide to Walt Disney World
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default KeepExploring;
