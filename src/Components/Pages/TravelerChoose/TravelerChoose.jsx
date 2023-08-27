import React, { useEffect, useState } from "react";
import Container from "../../../LayOut/Container";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FaLocationDot, FaClockRotateLeft, FaUserGroup, FaCircle, FaCircleNotch } from "react-icons/fa6";
import Rating from "react-rating";
import TourCard from "./TourCard";
import TravelChooseBanner from "./TravelChooseBanner";

const TravelerChoose = () => {
  const { category } = useParams();
  const [allTour, setAllTour] = useState([]);
  console.log(category);
  console.log(allTour);
  useEffect(() => {
    axios.get(`https://tripsure-server.vercel.app/category/${category}`).then((data) => {
      setAllTour(data.data);
    });
  }, []);
  return (
    <Container>
      <div>
        <TravelChooseBanner image={'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'} subText={'Ultimate Escapes'} title={'Top Things TO Do'}></TravelChooseBanner>
        <div className="lg:mx-10 mx-2 mt-10">
          <details className="dropdown mb-20">
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

          {/* //tour  card */}
          <div className="divider"></div>
          {
            allTour.slice(0, 1).map((fistOneCard, index) => <div key={index} className="shadow-2xl pb-4  rounded-lg bg-base-300">
              <div className="">
                <img
                  className="w-full h-60 md:h-72 lg:h-[30rem] rounded-2xl bg-cover object-cover"
                  src={fistOneCard?.picture}
                  alt=""
                />
              </div>
              <div className="m-10 lg:flex  items-center  gap-4  space-y-3">
                <div className="space-y-4 ">
                  <h2 className="text-xl ">0{index + 1}.</h2>
                  <Link to={`/tourDetails/${fistOneCard?._id}`} className="text-4xl font-bold text-black">
                    {fistOneCard?.cardtitle}
                  </Link>
                  <h4 className="flex items-center gap-2">
                    <FaLocationDot></FaLocationDot>{fistOneCard?.country}
                  </h4>
                  <p>{fistOneCard?.placedetails}</p>
                  <p className="font-semibold">Quick facts</p>
                  <div className="md:space-x-4 space-y-4">
                    <span className="inline-flex items-center p-2 px-3  rounded-full gap-1 bg-white">
                      <FaClockRotateLeft></FaClockRotateLeft> {fistOneCard?.conditions.duration}
                    </span>
                    <span className="inline-flex items-center p-2 px-3  rounded-full gap-1 bg-white">
                      <FaUserGroup></FaUserGroup> {fistOneCard?.conditions.agelimitations}
                    </span>
                  </div>
                </div>
                <div className=" w-full ">
                  <h1 className="font-semibold flex items-center "><p className="text-4xl flex gap-2">{fistOneCard?.ratings}
                    <p className="text-green-700">
                      <Rating
                        placeholderRating={fistOneCard?.ratings}
                        emptySymbol={<FaCircleNotch className="w-4"></FaCircleNotch>}
                        placeholderSymbol={<FaCircle className="w-4"></FaCircle>}
                        fullSymbol={<FaCircle className="w-4"></FaCircle>}
                        readonly
                      />
                    </p>
                  </p> <span className="ms-5">9,324 reviews</span></h1>
                </div>
              </div>
            </div>)
          }

          <div className="divider mt-10"></div>

          <div className="">
            {
              allTour?.slice(1,).map((singleTour, index) => <TourCard key={singleTour._id} singleTour={singleTour}
                index={index}
              ></TourCard>)
            }
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TravelerChoose;
