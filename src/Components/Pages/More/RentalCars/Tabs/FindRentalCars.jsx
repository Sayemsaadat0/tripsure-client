import React, { useState } from "react";
import Container from "../../../../../LayOut/Container";
import { SlLocationPin } from "react-icons/sl";
import { LuUsers } from "react-icons/lu";


const FindRentalCars = ({setPickUpDate, setPickUpLocation, setDropOutDate, handleFindRentalCardSearch}) => {
  
  return (
    <div className="rentalCarBackground h-96 mb-8 sm:mb-0 md:relative">
      <Container>
        <div className="clear-glass h-auto  px-8 pb-12 md:pb-8 md:absolute left-[10px] bottom-9 border-round">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[2px] sm:gap-2 mt-4 ">
            <div className="relative">
              <input
                type="text"
                name=""
                onChange={(e)=>setPickUpLocation(e.target.value)}
                placeholder="City or Airport"
                className="input focus:outline-none border-round rounded-none border-neutral-500 w-full pl-9 pt-5 p-3 text-black font-semibold"
              />
              <SlLocationPin className="absolute left-3 top-4" size={18} />

              <span className="absolute inline-block top-0 left-9 text-xs">
                Pick up location
              </span>
            </div>
            <div className="relative">
              <input
                type="datetime-local"
                name=""
                onChange={(e)=> setPickUpDate(e.target.value)}
                placeholder="pick  up"
                className="input focus:outline-none border-neutral-500 rounded-none border w-full pt-2 text-black font-semibold border-round"
              />
              <span className="absolute inline-block top-0 left-4 text-xs">
                pick up
              </span>
            </div>
            <div className="relative">
              <input
                type="datetime-local"
                name=""
                placeholder="pick up"
                onChange={(e)=>setDropOutDate(e.target.value)}
                className="input focus:outline-none border-neutral-500 rounded-none border w-full pt-2 text-black font-semibold border-round"
              />
              <span className="absolute inline-block top-0 left-4 text-xs">
                drop off
              </span>
            </div>

            <div className="relative">
              <select
                name=""
                id=""
                className="select focus:outline-none rounded-none text-black font-semibold w-full pl-9 pt-2 border-neutral-500 border-round"
              >
                <option defaultValue="Select" value="select">
                  Select
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6+</option>
              </select>
              <LuUsers className="absolute top-4 left-3" size={18} />
              <span className="absolute inline-block top-0 left-9 text-xs">
                Passengers (optional)
              </span>
            </div>
            <button onClick={handleFindRentalCardSearch} className="btn btn-neutral sm:rounded-2xl rounded-md btn-block">
              Find Rental cars
            </button>
          </div>
        </div>
      
      </Container>
    </div>
  );
};

export default FindRentalCars;
