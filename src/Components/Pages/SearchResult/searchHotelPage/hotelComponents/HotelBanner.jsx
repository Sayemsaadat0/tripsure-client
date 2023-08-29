import React from "react";
import Container from "../../../../../LayOut/Container";

import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DatePicker } from "antd";
import { FiUsers } from "react-icons/fi";

const HotelBanner = () => {
  // todo habibullah bhai input fild er design baki ache

  // const [size, setSize] = useState("large");

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
            <DatePicker size={"large"} placeholder="Check in" />
            <DatePicker size={"large"} placeholder="Check out" />
            <select name="guests" id="" className="select">
              <option value="rooms">Rooms</option>
              <option value="adults">Adults</option>
              <option value="children">Children</option>
            </select>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HotelBanner;
