import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { FiHeart } from "react-icons/fi";

const HotelCard = () => {
  return (
    <div className="flex items-center justify-center bg-base-100 hover:shadow-xl  rounded-md border-2">
      <Swiper
        effect={"flip"}
        pagination={true}
        modules={[EffectFlip, Pagination, Navigation]}
        slidesPerView={1}
        className="swiper"
      >
        <SwiperSlide className="swiper-slide ">
          <div className="relative">
            <img src="https://i.ibb.co/BgbGfBN/image.png" />
            <button className="btn absolute top-1 right-1">
              <FiHeart size={18} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="relative">
            <img src="https://i.ibb.co/BgbGfBN/image.png" />
            <button className="btn absolute top-1 right-1">
              <FiHeart size={18} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="relative">
            <img src="https://i.ibb.co/BgbGfBN/image.png" />
            <button className="btn absolute top-1 right-1">
              <FiHeart size={18} />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <div className="card card-side ">
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
