import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Container from "../../../../LayOut/Container";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { GoStarFill } from "react-icons/go";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import LazyLoad from "react-lazy-load";


const TopDestinations = () => {
  const [TopDestinations, setTopDestinations] = useState([]);


  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API}/top-destinations`)
      .then((res) => res.json())
      .then((data) => setTopDestinations(data));
  }, []);
  

  return (
    <Container>
      <div className="bg-white b my-20 ">
        <div>
          <SectionTitle
            text={"Explor our Ultimate Top Destinations "}
            subText={"Journey to Perfection"}>
          </SectionTitle>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation]}
            className="mySwiper"
            // navigation={true}
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
            onSwiper={(swiper) =>(swiper)}
          >
            {TopDestinations.map((todo, index) => (
              <SwiperSlide key={index}>
                <Link state={todo._id} to={`/top-destination-details/${todo?._id}`}>

                  <div className="">

                    <LazyLoad >
                      <img
                        className="h-40 w-full object-cover rounded-xl hover:scale-105 duration-700 "
                        src={todo.picture}
                        alt="" />
                    </LazyLoad>


                    <h2 className="font-semibold mt-3 hover:text-blue-400 duration-500">
                      {todo.placetitle}
                    </h2>
                    <h2 className=" mt-3 hover:text-blue-400 duration-500">
                      {todo.placedetails.slice(0,70)}...
                    </h2>
                    <div className='flex justify-between'>
                      <p>${todo.price[0].amount} <span className='text-xs'>per person(adult)</span> </p>
                      <p className='flex items-center gap-2'><GoStarFill className='text-red-500'></GoStarFill>  {todo.ratings}</p>
                    </div>

                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="text-right flex gap-2 justify-end">
          <AiOutlineArrowLeft></AiOutlineArrowLeft>
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </p>
      </div>
    </Container>
  );
};

export default TopDestinations;

/* 

   <div className=" card ">
              <img
                className="h-40 w-full object-cover rounded-xl hover:scale-105 duration-700 overflow-hidden"
                src={todo.picture}
                alt="" />
              <h2 className="font-semibold mt-3 hover:text-blue-400 duration-500">
                {todo.placetitle}
              </h2>
              <div className='flex justify-between'>
                <p>{todo.costperperson}$/ <span className='text-xs'>per person</span> </p>
                <p className='flex items-center gap-2'><GoStarFill className='text-red-500'></GoStarFill>  {todo.ratings}</p>
              </div>

            </div>
*/


