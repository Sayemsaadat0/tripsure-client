import React, { useState } from "react";
import Container from "../../../LayOut/Container";
import { useLoaderData } from "react-router-dom";
import { Carousel } from "antd";
import LazyLoad from "react-lazy-load";
import { TbWorld } from "react-icons/tb";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

const SearchDetails = () => {
  const searchDetailsData = useLoaderData();
  console.log(searchDetailsData);

  const {
    title,
    address,
    how_to_get_here,
    country,
    hotline_number,
    website,
    email,
    pictures,
    description,
    language,
    room_type,
    room_features,
    unavailable_dates,
    review,
    type,
    price,
    people_limit,
    itinerary,
    food,
    conditions,
    booking_limit,
    category,
  } = searchDetailsData;

  return (
    <div className="pt-16 min-h-screen">
      <Container>
        <div className="md:flex justify-between">
          <div className="md:w-2/3 ">
            <Carousel autoplay>
              {pictures.map((picture, index) => (
                <LazyLoad>
                  <img
                    className="rounded-lg object-cover"
                    key={index}
                    src={picture}
                    alt=""
                  />
                </LazyLoad>
              ))}
            </Carousel>
            <h3 className="text-3xl tracking-widest font-semibold mt-3">{title}</h3>
            <div className="space-y-2 my-5">
              
              <p className="flex items-center gap-2 ">
                <MdLocationOn size={22}/><span className="text-md font-medium">
                {address}, {country && country}
              </span>
              </p>
              {hotline_number && <p className="flex items-center gap-2 ">
                <AiFillPhone size={22}/> <span className="text-md font-medium">Hotline : {hotline_number}</span>
              </p> }
              {website && (
                <p className="flex items-center gap-2 ">
                  <TbWorld size={22}/> <span className="text-md font-medium">web : {website}</span>
                </p>
              )}
              {email && (
                <p className="flex items-center gap-2 ">
                  <MdEmail size={22}/> <span className="text-md font-medium">email : {email}</span>
                </p>
              )}
            </div>
            <div>
              <p className="mt-3">{ description}</p>
            </div>
          </div>
          {/* rating */}
          <div className="md:w-1/3  m-4">
            <div className="flex items-center gap-4">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.pinimg.com/564x/e5/bc/03/e5bc0301b31a319570ac6f913ccbe67e.jpg"
                alt="user"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.userName}</h3>
                <p>{review.userAddress}</p>
                <p>{review.rating}</p>
              </div>
            </div>
            <p>{review.review}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchDetails;
