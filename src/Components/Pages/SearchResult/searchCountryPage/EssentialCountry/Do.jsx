import React, { useEffect, useState } from "react";
import Rating from "react-rating";

import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCircle, FaCircleNotch, FaHeart } from "react-icons/fa6";
import axios from "axios";

// todo:button and fetch kore data dekhano baki ache

const Do = ({ country }) => {
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/category`)
      .then((data) => {
        setAllCategory(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
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
            <h3 className="text-2xl font-semibold">Do</h3>
            <p>A mix of the charming, modern, and tried and true.</p>
          </div>
        </SwiperSlide>
        {allCategory &&
          allCategory.slice(0, 9).map((category) => (
            <SwiperSlide>
              <Link  to={`/staythinngs-attraction-reviews/${category._id}`}>
                <div>
                  <img
                    className="h-64  w-full  hover:scale-105 duration-300  object-cover hover:bg-white hover:opacity-80"
                    src={category && category?.picture}
                    alt="place photo" />
              
                  <div>
                    <h3 className="text-xl font-bold hover:underline mt-2">
                      {category && category?.placetitle}
                    </h3>

                    <p className="text-green-700 mt-[6px] flex space-x-2 items-center">
                      <Rating
                        placeholderRating={category && category?.ratings}
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
                        {category && category?.visitcount}
                      </span>
                    </p>
                    <p>{category && category?.categoryname}</p>
                    <h3 className="font-bold">
                      {category && category?.cardtitle},{" "}
                      {category && category?.country}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Do;
