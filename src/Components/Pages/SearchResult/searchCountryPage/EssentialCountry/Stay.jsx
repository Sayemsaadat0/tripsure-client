import React from "react";
import Rating from "react-rating";

import { Link } from "react-router-dom";
import {  Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCircle, FaCircleNotch, FaHeart } from "react-icons/fa6";

// todo:button and fetch kore data dekhano baki ache

const Stay = ({ countryDatas, country }) => {
  // todo: gettin empty array in stayData
  // const stayData = countryDatas.filter(countryData => countryData.country === country);
  // console.log(stayData);
  return (
    <div>
      <h2 className="text-3xl font-semibold my-10">Essential {country }</h2>

      <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
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
        
      >
        <SwiperSlide>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Stay</h3>
            <p>A mix of the charming, modern, and tried and true.</p>
          </div>
        </SwiperSlide>

        {countryDatas &&
          countryDatas.slice(0,9).map((countryData, index) => (
          
            <SwiperSlide key={index}>
              <Link to={`/dothings-attraction-reviews/${countryData._id}`}>
                <div>
                  <img
                    className="h-64  w-full  hover:scale-105 duration-300  object-cover hover:bg-white hover:opacity-80"
                    src={countryData && countryData?.picture}
                    alt="hotel"
                  />
                
                  <div>
                    <h3 className="text-xl font-bold hover:underline mt-2">
                     {countryData && countryData?.cardtitle}
                    </h3>

                    <p className="text-green-700 mt-[6px] flex space-x-2 items-center">
                      <Rating
                        placeholderRating={countryData && countryData?.ratings}
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
                       {countryData && countryData?.visitcount}
                      </span>
                    </p>
                    <p>{ countryData && countryData?.placetitle }</p>
                    <h3 className="font-bold">from $57/night</h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Stay;
