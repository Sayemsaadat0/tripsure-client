import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaCircle,
  FaCircleNotch,
  FaSimplybuilt,
  FaUserGroup,
  FaPhone,
  FaLanguage,
  FaClock,
  FaClockRotateLeft,
} from "react-icons/fa6";
import Rating from "react-rating";
import { useParams } from "react-router-dom";

const TourDetails = () => {
  const [tourDetails, setTourDetails] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:1000/tourDetails/${id}`).then((data) => {
      setTourDetails(data.data);
    });
  }, [id]);
  console.log(tourDetails);
  return (
    <div className="lg:mx-10 mx-4 mt-10">
      <div>
        <h2 className="text-3xl font-bold">
          Grand Circle Island and Haleiwa 9 Hour Tour
        </h2>
        <h4 className="my-2">By Royal Star Hawaii Deluxe Tours</h4>
        <h1 className="font-semibold flex items-center ">
          <p className=" flex gap-2">
            <p className="text-green-700">
              <Rating
                placeholderRating={4.5}
                emptySymbol={<FaCircleNotch className="w-4"></FaCircleNotch>}
                placeholderSymbol={<FaCircle className="w-4"></FaCircle>}
                fullSymbol={<FaCircle className="w-4"></FaCircle>}
                readonly
              />
            </p>
          </p>{" "}
          <span className="ms-5">9,324 reviews</span>
        </h1>
        <div className="my-6">
          <img
            className="w-full h-60 md:h-72 lg:h-[25rem] object-bottom rounded-md bg-cover object-cover"
            src="https://plus.unsplash.com/premium_photo-1683134415500-097cfbf33d7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h3 className="font-bold text-black text-xl">About</h3>
            <p>
              Ideal for first-time visitors, or those with limited time, this
              full-day tour takes you all around Oahu, making sure that you
              don't miss a thing. You'll see top attractions including Diamond
              Head, Hanauma Bay, Halona Blowhole, the Byodo-In Temple and the
              surfing beaches of the North Shore. Plus, you'll have time to
              explore Haleiwa town.
            </p>
            <p className="my-3">
              from <span className="text-2xl font-semibold">$135.00</span> per
              adult
            </p>
            <p className="flex items-center gap-2">
              <FaSimplybuilt></FaSimplybuilt>
              <span className="underline">Lowest price guarantee</span>{" "}
              <span className="underline">Reserve now & pay later</span>{" "}
              <span className="underline">Free cancellation</span>
            </p>
            <div className="divider"></div>

            <p className="flex items-center gap-2">
              <FaUserGroup></FaUserGroup>Ages 0-99, max of 50 per group
            </p>
            <p className="flex items-center gap-2">
              <FaClockRotateLeft></FaClockRotateLeft>Duration: 9h
            </p>
            <p className="flex items-center gap-2">
              <FaClock></FaClock>Start time: Check availability
            </p>
            <p className="flex items-center gap-2">
              <FaPhone></FaPhone>Mobile ticket
            </p>
            <p className="flex items-center gap-2">
              <FaLanguage></FaLanguage>English
            </p>

            <div className="flex gap-2 items-center my-6">
              <img
                className="w-16"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb27p0pyMXikGN60bM3tbL8wwUWuwbb8caN9NTvKYuGyHN2EFb340SPXAcE7hFCm_Bku4&usqp=CAU"
                alt=""
              />
              <div>
                <span className="font-semibold">
                  Travelers’ Choice Best of the Best
                </span>{" "}
                <br />
                <span>2023</span>
              </div>
            </div>
            {/* accordion */}
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                Cancellation policy
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                What's included
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                What to expect
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Accessibility
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Additional information
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
          <div className="border-2 m-6 rounded-2xl">
            {/* revers your slot section */}
            <div className="p-4">
              <h2 className="text-3xl font-bold pb-6">Reserve your spot</h2>
              <div className="flex gap-4">
                <button className="btn-wide btn btn-outline rounded-full font-bold">
                  31 June 2025
                </button>
                <button className="btn btn-outline rounded-full font-bold">
                  X Person
                </button>
              </div>
              <p className="py-4 text-md">1 option available for 8/17</p>
              <div className="m-4 border-2 space-y-2 p-3 border-black rounded-3xl">
                <p className="text-xl font-bold">
                  Grand Circle Island and Haleiwa 9 Hour Tour
                </p>
                <p>Pickup included</p>
                <p>2 Adults x $135.00</p>
                <p>4 Children x $92.58</p>
                <p className="text-xl font-semibold">Total $640.32</p>
                <p>(No additional taxes or booking fees)</p>
              </div>
              <div className="flex gap-3 items-center justify-around">
                <button className="btn rounded-full px-14 btn-warning">Add TO Card</button>
                <button className="btn rounded-full px-14 btn-warning">Reserve Now</button>
              </div>
              <p className="p-4">Not sure? You can cancel this reservation up to 24 hours in advance for a full refund.</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
