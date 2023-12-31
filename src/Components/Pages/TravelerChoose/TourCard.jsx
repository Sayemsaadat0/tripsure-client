import React from "react";
import { FaCircle, FaCircleNotch, FaClockRotateLeft, FaLocationDot, FaUserGroup } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const TourCard = ({singleTour, index}) => {
    const {_id, picture, cardtitle,ratings,country,placetitle,placedetails,conditions} = singleTour;
  return (
    <div className="grid lg:grid-cols-2 gap-6 mb-10">
      <div className="">
        <img className="rounded-lg w-full md:h-96"
          src={picture}
          alt=""
        />
      </div>
      <div className="space-y-3">
        <h2 className="text-7xl font-bold border-b-4 border-blue-400 w-10 py-3 text-gray-400">0{index+2}</h2>
        <Link to={`/tourDetails/${_id}`} className="text-2xl tracking-widest  font-semibold">{placetitle}</Link>
        <h4 className="flex items-center gap-2">
          <FaLocationDot></FaLocationDot> {country}
        </h4>
        <h1 className="font-semibold flex items-center ">
          <p className=" flex gap-2">
            <p className="text-green-700">
              <Rating
                placeholderRating={ratings}
                emptySymbol={<FaCircleNotch className="w-4"></FaCircleNotch>}
                placeholderSymbol={<FaCircle className="w-4"></FaCircle>}
                fullSymbol={<FaCircle className="w-4"></FaCircle>}
                readonly
              />
            </p>
          </p>{" "}
          <span className="ms-5">9,324 reviews</span>
        </h1>
        <p>{placedetails} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa autem iste, alias quas, neque error molestiae modi exercitationem eveniet consequatur, animi numquam? </p>
        <div className="md:space-x-4 space-y-4">
                <span className="inline-flex items-center p-2 px-3  rounded-full gap-1 bg-white">
                  <FaClockRotateLeft></FaClockRotateLeft> {conditions?.duration}
                </span>
                <span className="inline-flex items-center p-2 px-3  rounded-full gap-1 bg-white">
                  <FaUserGroup></FaUserGroup> {conditions?.agelimitations}
                </span>
              </div>
      </div>
    </div>
  );
};

export default TourCard;
