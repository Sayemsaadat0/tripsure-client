import { CiLocationOn } from "react-icons/ci";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import KeepExploring from "../TravelerStories/KeepExploring";
import { Link } from "react-router-dom";

import React from 'react';
import { Rating } from "@smastrom/react-rating";

const GuideCards = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="my-10">
        <Link to="details">
          <div className="flex flex-col lg:flex-row mx-5 mb-10 lg:mx-0 justify-between gap-4 items-center">
            <div className="lg:w-[50%]">
              <img
                className="rounded-md"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5e/c2/caption.jpg?w=700&h=-1&s=1"
                alt=""
              />
            </div>
            <div className="lg:w-[50%]">
              {/* title  */}
              <h2 className="text-2xl md:text-4xl text-black font-bold">
                Bali
              </h2>
              <h3 className="text-lg flex items-center gap-1">
                <CiLocationOn /> <span className="underline">Bali</span>
              </h3>
              {/* rating  */}
              <span className="flex gap-2 mt-2">
               {/*  <span >
                  <Rating className="text-sm" initialRating={4.5} readonly />
                </span> */}
                <span className="text-lg mt-[2px]">21,236 reviews</span>
              </span>
              {/* details  */}
              <div className="my-3 flex justify-around">
                <p className="text-xl flex items-center gap-3 font-semibold">
                  Tourist Places
                  <span className="text-[#19a0c9]">
                    <BsFillArrowRightCircleFill />
                  </span>
                  Ten
                </p>
                <p className="text-xl flex items-center gap-3 font-semibold">
                  Hotels
                  <span className="text-[#19a0c9]">
                    <BsFillArrowRightCircleFill />
                  </span>
                  30+
                </p>
              </div>
              {/* about  */}
              <p className="text-base font-medium my-2 text-justify">
                Bali is a living postcard, an Indonesian paradise that feels
                like a fantasy. Soak up the sun on a stretch of fine white sand,
                or commune with the tropical creatures as you dive along coral
                ridges or the colorful wreck of a WWII war... <br />
                <span className="text-sm text-gray-900 underline cursor-pointer font-semibold">
                  Read More
                </span>
              </p>
            </div>
          </div>
        </Link>
        <Link to="details">
          <div className="flex flex-col lg:flex-row mx-5 mb-10 lg:mx-0 justify-between gap-4 items-center">
            <div className="lg:w-[50%]">
              <img
                className="rounded-md w-full"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/de/cc/0e/the-clouds-over-the-himalaya.jpg?w=500&h=400&s=1"
                alt=""
              />
            </div>
            <div className="lg:w-[50%]">
              {/* title  */}
              <h2 className="text-2xl md:text-4xl text-black font-bold">
                Kathmandu
              </h2>
              <h3 className="text-lg flex items-center gap-1">
                <CiLocationOn /> <span className="underline">Kathmandu</span>
              </h3>
              {/* rating  */}
              <span className="flex gap-2 mt-2">
             {/*    <span>
                  <Rating initialRating={4.5} readonly />
                </span> */}
                <span className="text-lg mt-[2px]">10,116 reviews</span>
              </span>
              {/* details  */}
              <div className="my-3 flex justify-around">
                <p className="text-xl flex items-center gap-3 font-semibold">
                  Tourist Places
                  <span className="text-[#19a0c9]">
                    <BsFillArrowRightCircleFill />
                  </span>
                  Ten
                </p>
                <p className="text-xl flex items-center gap-3 font-semibold">
                  Hotels
                  <span className="text-[#19a0c9]">
                    <BsFillArrowRightCircleFill />
                  </span>
                  30+
                </p>
              </div>
              {/* about  */}
              <p className="text-base font-medium my-2 text-justify">
                Bali is a living postcard, an Indonesian paradise that feels like
                a fantasy. Soak up the sun on a stretch of fine white sand, or
                commune with the tropical creatures as you dive along coral ridges
                or the colorful wreck of a WWII war... <br />
                <span className="text-sm text-gray-900 underline cursor-pointer font-semibold">
                  Read More
                </span>
              </p>
            </div>
          </div>
        </Link>
        <Link to="details">
          <div className="flex flex-col lg:flex-row mx-5 mb-10 lg:mx-0 justify-between gap-4 items-center">
            <div className="lg:w-[50%]">
              <img
                className="rounded-md w-full"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/41/8f/47/saigon-by-night.jpg?w=500&h=400&s=1"
                alt=""
              />
            </div>
            <div className="lg:w-[50%]">
              {/* title  */}
              <h2 className="text-2xl md:text-4xl text-black font-bold">
                Ho Chi Minh City
              </h2>
              <h3 className="text-lg flex items-center gap-1">
                <CiLocationOn />
                <span className="underline">Ho Chi Minh City</span>
              </h3>
              {/* rating  */}
              <span className="flex gap-2 mt-2">
                {/* <span>
                  <Rating initialRating={4.5} readonly />
                </span> */}
                <span className="text-lg mt-[2px]">536 reviews</span>
              </span>
              {/* details  */}
              <div className="my-3 flex justify-around">
                <p className="text-xl flex items-center gap-3 font-semibold">
                  Tourist Places
                  <span className="text-[#19a0c9]">
                    <BsFillArrowRightCircleFill />
                  </span>
                  Fifteen
                </p>
                <p className="text-xl flex items-center gap-3 font-semibold">
                  Hotels
                  <span className="text-[#19a0c9]">
                    <BsFillArrowRightCircleFill />
                  </span>
                  40+
                </p>
              </div>
              {/* about  */}
              <p className="text-base font-medium my-2 text-justify">
                Bali is a living postcard, an Indonesian paradise that feels like
                a fantasy. Soak up the sun on a stretch of fine white sand, or
                commune with the tropical creatures as you dive along coral ridges
                or the colorful wreck of a WWII war... <br />
                <span className="text-sm text-gray-900 underline cursor-pointer font-semibold">
                  Read More
                </span>
              </p>
            </div>
          </div>
        </Link>
      </div>
      <KeepExploring />
    </div>
  );
};

export default GuideCards;

