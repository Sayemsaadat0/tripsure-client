import React, { useState } from "react";
import Container from "../../../LayOut/Container";
import { useLoaderData } from "react-router-dom";
import { Carousel } from "antd";
import LazyLoad from "react-lazy-load";

const SearchDetails = () => {




  const searchDetailsData = useLoaderData()

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
    review

  } = searchDetailsData



  return (
    <div className="pt-16 min-h-screen">
      <Container>
        <div className="md:flex justify-between">
          <div className="md:w-2/3 ">

            <Carousel autoplay>
              {
                pictures.map((picture, index) => (
                  <LazyLoad>
                    <img className='rounded-lg object-cover' key={index} src={picture} alt="" />
                  </LazyLoad>
                ))
              }
            </Carousel>
            <h3 className="text-3xl tracking-widest font-semibold">{title}</h3>

            <div>
              <p>{address}</p>
              <p>{country}</p>
              <p>Hotline : {hotline_number}</p>
              <p>web : {website}</p>
              <p>email  : {email}</p>
            </div>

            <div>
              <h3>How to Get Here </h3>
           
            </div>


          </div>
          {/* rating */}
          <div className="md:w-1/3  m-4">
            <div className="flex items-center gap-4">
              <img className="w-20 h-20 rounded-full" src="https://i.pinimg.com/564x/e5/bc/03/e5bc0301b31a319570ac6f913ccbe67e.jpg" alt="" />
              <div>
                <p>{review.userName}</p>
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


