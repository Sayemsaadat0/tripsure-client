import React, { useEffect, useState } from "react";
import Container from "../../../LayOut/Container";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  FaLocationDot,
  FaClockRotateLeft,
  FaUserGroup,
  FaCircle,
  FaCircleNotch,
} from "react-icons/fa6";
import Rating from "react-rating";
import TourCard from "./TourCard";
import PageTitle from "../../PageTitle/PageTitle";

const TravelerChoose = () => {
  const { category } = useParams();
  const [allTour, setAllTour] = useState([]);
  console.log(category);
  console.log(allTour);
  useEffect(() => {
    axios
      .get(`https://tripsure-server.vercel.app/category/${category}`)
      .then((data) => {
        setAllTour(data.data);
      });
  }, []);
  return (
    <Container>
      <PageTitle title="Travel Choose"/>
      <div>
        <div className="my-20 text-center">
          <h3 className=" text-3xl tracking-widest  underline uppercase">
            Adventure Escapes & Dreamy Getaways
          </h3>
          <p className="mt-2">
            {" "}
            Explore diverse travel categories and discover dream destinations{" "}
            <br /> to plan your next adventure.
          </p>
        </div>
        <div className="lg:mx-10 mx-2 mt-20">
          {/* //tour  card */}
          <hr className="my-4" />
          {allTour.slice(0, 1).map((fistOneCard, index) => (
            <div
              key={index}
              className="shadow-2xl pb-4  rounded-lg bg-blue-100"
            >
              <div className="">
                <img
                  className="w-full h-60 md:h-72 lg:h-[30rem] rounded-2xl bg-cover object-cover"
                  src={fistOneCard?.picture}
                  alt=""
                />
              </div>
              <div className="m-10 lg:flex  items-center  gap-4  space-y-3">
                <div className="space-y-4 ">
                  <h2 className="text-7xl font-bold border-b-4 border-blue-400 w-10 py-3 text-gray-400">
                    0{index + 1}.
                  </h2>
                  <div className="flex ">
                  <Link
                    to={`/tourDetails/${fistOneCard?._id}`}
                    className="text-4xl font-bold text-black"
                  >
                    {fistOneCard?.placetitle}
                    </Link>
                  </div>
                  <h4 className="flex items-center gap-2">
                    <FaLocationDot></FaLocationDot>
                    {fistOneCard?.country}
                  </h4>
                  <p>{fistOneCard?.placedetails}</p>
                  <p className="font-semibold">Quick facts</p>
                  <div className="md:space-x-4 space-y-4">
                    <span className="inline-flex items-center p-2 px-3  rounded-full gap-1 bg-white">
                      <FaClockRotateLeft></FaClockRotateLeft>{" "}
                      {fistOneCard?.conditions.duration}
                    </span>
                    <span className="inline-flex items-center p-2 px-3  rounded-full gap-1 bg-white">
                      <FaUserGroup></FaUserGroup>{" "}
                      {fistOneCard?.conditions.agelimitations}
                    </span>
                  </div>
                </div>
                <div className=" w-full ">
                  <h1 className="font-semibold flex items-center ">
                    <p className="text-4xl flex gap-2">
                      {fistOneCard?.ratings}
                      <p className="text-green-700">
                        <Rating
                          placeholderRating={fistOneCard?.ratings}
                          emptySymbol={
                            <FaCircleNotch className="w-4"></FaCircleNotch>
                          }
                          placeholderSymbol={
                            <FaCircle className="w-4"></FaCircle>
                          }
                          fullSymbol={<FaCircle className="w-4"></FaCircle>}
                          readonly
                        />
                      </p>
                    </p>{" "}
                    <span className="ms-5">9,324 reviews</span>
                  </h1>
                </div>
              </div>
            </div>
          ))}

          <div className="divider mt-10"></div>

          <div className="">
            {allTour?.slice(1).map((singleTour, index) => (
              <TourCard
                key={singleTour._id}
                singleTour={singleTour}
                index={index}
              ></TourCard>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TravelerChoose;

/* 
   <details className="dropdown mb-20 ">
            <summary className="m-1 font-bold btn btn-outline border-2 rounded-full w-60">
              Filter by Country
            </summary>
            <ul className="p-2 font-semibold shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-60">
              <li>
                <a>Bangladesh</a>
              </li>
              <li>
                <a>Nepal</a>
              </li>
            </ul>
          </details>
*/
