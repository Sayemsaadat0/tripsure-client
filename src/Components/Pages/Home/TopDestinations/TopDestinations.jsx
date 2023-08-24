import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Container from "../../../../LayOut/Container";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

const TopDestinations = () => {
  const [TopDestinations, setTopDestinations] = useState([]);

  useEffect(() => {
    fetch("https://tripsure-server-sayemsaadat0.vercel.app/top-destinations")
      .then((res) => res.json())
      .then((data) => setTopDestinations(data));
  }, []);
  return (
    <Container>
      <div className="bg-white b my-20 px-10">
        <div>
          <SectionTitle
            text={"Explor the Ultimate"}
            coloredText={"Top Destinations"}
            subText={"Journey to Perfection"}
          ></SectionTitle>
        </div>
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
            {TopDestinations.map((todo, index) => (
              <SwiperSlide key={index}>
                <Link to={`/top-destination-details/${todo?._id}`}>
                  <div className="  re   hover:scale-110 duration-700">
                    <img
                      className="h-64 relative w-full relative object-cover first-letter:rounded-tl-[5px] rounded-tr-[50px]"
                      src={todo.picture}
                      alt=""
                    />
                    <button  className="absolute top-4 left-4 p-2  border-2 border-black   rounded-full "><FaHeart className="text-2xl"></FaHeart></button>

                    <h2 className="absolute bottom-3 pb-3 pl-2  font-extrabold text-xl text-white left-3   ">
                      {todo.cardtitle}
                    </h2>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default TopDestinations;
