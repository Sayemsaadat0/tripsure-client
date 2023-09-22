import React from "react";
import Container from "../../../../../LayOut/Container";

import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DatePicker } from "antd";
import { FiUsers } from "react-icons/fi";
import { FaUserGroup } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";

const HotelBanner = () => {
  const [modalForCountPeople, setModalForCountPeople] = useState(false);
  const [adultCount, setAdultCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);

  const handlePeopleForReserve = () => {
    setModalForCountPeople(!modalForCountPeople)
  };

  const handleDate = (date) => {
    console.log(date.format("YYYY-MM-DD"))
  }

  return (
    <div className="hotel-backgroundImg h-[500px] w-full  bg-black bg-opacity-100">
      <Container>
        <div className="mt-20">
          <div className="text-center space-y-5 mb-5 text-sky-300 ">
            <h2 className="text-4xl font-bold ">
              Salem Hotels and Places to Stay
            </h2>
            <p className="font-bold">Enter dates to find the best prices</p>
          </div>
          <div className="grid md:grid-cols-3 w-[90%] mx-auto gap-3 ">
            <DatePicker onChange={handleDate} size={"large"} placeholder="Check in" />
            <DatePicker name="checkOut" size={"large"} placeholder="Check out" />
            <select name="" id="" onClick={handlePeopleForReserve}>
              
         </select>
            {modalForCountPeople && (
              <div className="border-2 top-14 bg-white shadow-xl  rounded-2xl p-2 mx-auto w-full lg:w-[100%] ">
                <div className="m-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="font-bold">Adults</h1>
                      <span>Age 12 - 99</span>
                    </div>
                    <div className="space-x-3">
                      <button
                        disabled={adultCount == 1 ? true : false}
                        onClick={() =>
                          setAdultCount((adultCount) => adultCount - 1)
                        }
                        className="btn btn-sm  bg-black hover:bg-black  rounded-full"
                      >
                        <FaMinus className="w-4 text-white "></FaMinus>
                      </button>
                      <span className="font-bold">{adultCount}</span>
                      <button
                        onClick={() =>
                          setAdultCount((adultCount) => adultCount + 1)
                        }
                        className="btn btn-sm  bg-black hover:bg-black  rounded-full"
                      >
                        <FaPlus className="w-4 text-white "></FaPlus>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="font-bold">Children</h1>
                      <span>Age 3 - 11</span>
                    </div>
                    <div className="space-x-3">
                      <button
                        disabled={childrenCount == 0 ? true : false}
                        onClick={() =>
                          setChildrenCount((childrenCount) => childrenCount - 1)
                        }
                        className="btn btn-sm  bg-black hover:bg-black  rounded-full"
                      >
                        <FaMinus className="w-4 text-white "></FaMinus>
                      </button>
                      <span className="font-bold">{childrenCount}</span>
                      <button
                        onClick={() =>
                          setChildrenCount((childrenCount) => childrenCount + 1)
                        }
                        className="btn btn-sm  bg-black hover:bg-black  rounded-full"
                      >
                        <FaPlus className="w-4 text-white "></FaPlus>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="font-bold">Infants</h1>
                      <span>Age 0 - 2</span>
                    </div>
                    <div className="space-x-3">
                      <button
                        disabled={infantsCount == 0 ? true : false}
                        onClick={() =>
                          setInfantsCount((infantsCount) => infantsCount - 1)
                        }
                        className="btn btn-sm  bg-black hover:bg-black  rounded-full"
                      >
                        <FaMinus className="w-4 text-white "></FaMinus>
                      </button>
                      <span className="font-bold">{infantsCount}</span>
                      <button
                        onClick={() =>
                          setInfantsCount((infantsCount) => infantsCount + 1)
                        }
                        className="btn btn-sm  bg-black hover:bg-black  rounded-full"
                      >
                        <FaPlus className="w-4 text-white "></FaPlus>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HotelBanner;
