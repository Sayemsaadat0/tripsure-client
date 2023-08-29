import React from "react";
import Container from "../../../../../LayOut/Container";
import CheckboxItems from "./CheckboxItems";
import HotelCard from "./HotelCard";

const SideBar = () => {
  return (
    <Container>
      <div className="drawer lg:drawer-open my-8 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <div className="flex items-center space-x-3 mb-5">
            <h4 className="text-lg font-semibold">Sort by:</h4>
            <select
              name=""
              id=""
              className=" border border-black p-3 focus:outline-none"
            >
              <option value="" selected>
                Best Value
              </option>
              <option value="">Traveler Ranked</option>
              <option value="">Pirce (low to hight)</option>
            </select>
          </div>
          <HotelCard />
        </div>
        <div className="drawer-side shadow-xl">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-100  border text-base-content">
            <CheckboxItems />
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default SideBar;
