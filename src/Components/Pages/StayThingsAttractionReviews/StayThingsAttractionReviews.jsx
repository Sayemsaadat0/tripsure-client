import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../../LayOut/Container";
import Rating from "react-rating";
import {
  FaCircle,
  FaCircleNotch,
  FaEnvelope,
  FaGlobe,
  FaMailBulk,
  FaPen,
  FaPhone,
  FaVoicemail,
  FaWeebly,
  FaWeibo,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot, FaMapLocation } from "react-icons/fa6";

const StayThingsAttractionReviews = () => {
  const { id } = useParams();
  const [hotelDetails, setHotelDetails] = useState({});
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:1000/stayThingsAttractionReviews/${id}`)
      .then((data) => {
        setHotelDetails(data.data);
      });
  }, [id]);
  console.log(hotelDetails);
  return (
    <Container>
      <div className="mx-4 lg:mx-10">
        <h1 className="text-3xl font-bold my-5 mt-10">
          {hotelDetails?.hotelName}
        </h1>
        <div className="flex gap-4 items-center">
          <p>
            <Rating
              placeholderRating={hotelDetails?.ratings}
              emptySymbol={
                <FaCircleNotch className="w-4 text-green-600"></FaCircleNotch>
              }
              placeholderSymbol={
                <FaCircle className="w-4 text-green-600"></FaCircle>
              }
              fullSymbol={<FaCircle className="w-4"></FaCircle>}
              readonly
            />
          </p>
          <p>1,448 Visited</p>
          <p>boutique hotels in {hotelDetails?.address}</p>
        </div>
        <p className="flex gap-2 items-center">
          <FaLocationDot></FaLocationDot>{hotelDetails?.address}
        </p>
        <div className="md:flex gap-2 ">
          <Link to={hotelDetails?.hotel_website} className="flex gap-2 items-center underline">
            <FaGlobe></FaGlobe>Visit hotel website
          </Link>
          <Link to={`tel:${hotelDetails?.hotline_number}`} className="flex gap-2 items-center underline">
            <FaPhone></FaPhone>{hotelDetails?.hotline_number}
          </Link>
          <Link to={`mailto:${hotelDetails?.email}`} className="flex gap-2 items-center underline">
            <FaEnvelope></FaEnvelope>{hotelDetails?.email}
          </Link>
          <Link to={`https://wa.me/${hotelDetails?.hotline_number}`} className="flex gap-2 items-center underline">
            <FaWhatsapp></FaWhatsapp>{hotelDetails?.hotline_number}
          </Link>
        </div>
        <Link className="flex gap-2 items-center underline">
          <FaPen></FaPen> Write Reviews
        </Link>
        <img
          className="w-full h-60 md:h-72 my-5 lg:h-[28rem] object-bottom rounded-md bg-cover object-cover"
          src={hotelDetails?.picture}
          alt=""
        />

        <div className="flex justify-end">
          <Link to={hotelDetails?.hotel_website} className="btn font-bold rounded-full border-2 border-black hover:bg-black hover:text-white">
            visit hotel website
          </Link>
        </div>
        <div className="border p-4 lg:p-6 mt-10">
          <h2 className="text-xl font-bold">About</h2>
          <div className="divider"></div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="space-x-2">
                <span className="text-4xl font-bold">5.4</span>
                <Rating
                  placeholderRating={hotelDetails?.ratings}
                  emptySymbol={
                    <FaCircleNotch className="w-4 text-green-600"></FaCircleNotch>
                  }
                  placeholderSymbol={
                    <FaCircle className="w-4 text-green-600"></FaCircle>
                  }
                  fullSymbol={<FaCircle className="w-4"></FaCircle>}
                  readonly
                />
              </h2>
              <h3 className="font-bold mt-2">Language</h3>
              {hotelDetails?.language?.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
              <h3 className="font-bold mt-2">Room Features</h3>
              {hotelDetails?.roomFeatures?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </div>
            <div>
              <h3 className="font-bold text-xl">Hotel Details</h3>
              <p>{hotelDetails?.details}</p>
              <h2 className="text-xl font-bold my-5">FAQ</h2>
              {hotelDetails?.FAQ?.map((item, index) => (
                <div className="join join-vertical w-full" key={index}>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" checked={true} />
                    <div className="collapse-title text-xl font-medium">
                      {item?.question}
                    </div>
                    <div className="collapse-content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StayThingsAttractionReviews;
