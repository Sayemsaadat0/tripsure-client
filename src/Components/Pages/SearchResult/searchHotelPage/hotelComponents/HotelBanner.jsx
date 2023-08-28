import React from "react";
import Container from "../../../../../LayOut/Container";

const HotelBanner = () => {
  // todo habibullah bhai input fild er design baki ache
  return (
    <div className="hotel-backgroundImg h-72 ">
      <Container>
        <div className="text-center space-y-5 mb-5 text-white">
          <h2 className="text-4xl font-bold ">
            Salem Hotels and Places to Stay
          </h2>
          <p className="font-bold">Enter dates to find the best prices</p>
        </div>
        <div className="grid md:grid-cols-3 w-[80%] mx-auto gap-3 ">
          <input type="datetime-local" name="checkIn" id="" className="input" />
          <input type="datetime-local" name="checkOut" id="" className="input" />
          <input type="text" name="guests" id="" className="input" />
        </div>
      </Container>
    </div>
  );
};

export default HotelBanner;
