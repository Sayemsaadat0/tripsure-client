import React, { useState } from "react";
import Container from "../../../LayOut/Container";

import { GoShare, GoLocation } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { BiDockTop } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import PlaceDetails from "./PlaceDetails";
import { useLoaderData } from "react-router-dom";

const SearchDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const searchDetailsData = useLoaderData();
  console.log(searchDetailsData);
  const {
    address,
    picture,
    title,
    reviews,
    ratings,
    specialties,
    description,
  } = searchDetailsData;
  console.log('searchDetailsData',searchDetailsData)
  const ratingValues = Object.values(ratings);
  const sumOfRatings = ratingValues.reduce((sum, rating) => sum + rating, 0);
  const averageRating = (sumOfRatings / ratingValues.length).toFixed(1);

  return (
    <div className="pt-16">
      <Container>
        <div className="mt-10 mb-14">
          <h2 className="text-xl md:text-3xl mb-2 font-semibold">
            {searchDetailsData && title}
          </h2>
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center justify-between gap-4">
              <p className="flex items-center text-black gap-1">
                <FaStar></FaStar>
                {searchDetailsData && averageRating}
                <span className="underline cursor-pointer ml-2">
                  {" "}
                  {searchDetailsData && reviews?.length} reviews
                </span>
              </p>
              <p>Superhost</p>
              <p className="underline cursor-pointer text-black ">
                {searchDetailsData && address?.city},{" "}
                {searchDetailsData && address?.state},{" "}
                {searchDetailsData && address?.country}
              </p>
            </div>
            <div className="flex items-center">
              <p className="flex items-center text-black gap-2 px-2 py-1 hover:bg-gray-100 rounded-md">
                <GoShare></GoShare>
                <span className="underline cursor-pointer">Share</span>
              </p>
            </div>
          </div>
          <div className=" mb-8">
            <div className="flex">
              <img
                className="rounded-lg md:w-[50%] "
                src={searchDetailsData && picture}
                alt="hotel"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="md:w-2/3  ">
              {/* todo: json a ai data ta add korte hobe */}
              <div className="flex justify-between items-center ">
                <div>
                  <h2 className="text-2xl font-semibold">
                    Treehouse hosted by Veluvana
                  </h2>
                  <p>
                    <span>2 guests,</span> <span>1 bedroom,</span>{" "}
                    <span>1 bed,</span> <span>5 baths,</span>
                  </p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div>
                    <BiDockTop size={25}></BiDockTop>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">
                      Veluvana is a Superhost
                    </h4>
                    <p className="text-sm">{specialties[0]}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div>
                    <GoLocation size={25}></GoLocation>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Great location</h4>
                    <p className="text-sm">{specialties[1]}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div>
                    <BiDockTop size={25}></BiDockTop>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">{specialties[2]}</h4>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
              <p>{searchDetailsData && description.slice(0, 80)}...</p>
              <button
                onClick={() => setIsOpen(true)}
                className="btn-link  group w-fit flex gap-1 items-center    text-blue-500">
                <span>Read More </span>
                <AiOutlineArrowRight className="duration-300 mt-2 group-hover:ml-1"></AiOutlineArrowRight>
              </button>
              <PlaceDetails
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              ></PlaceDetails>
              <div className="divider"></div>
            </div>
            <div className="md:w-1/3">
              {/* add a reserve box habibulla vai */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchDetails;


// todo show all the data dynamically here 
// mobile responsive