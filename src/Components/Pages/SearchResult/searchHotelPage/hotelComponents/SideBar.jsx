import React from "react";
import Container from "../../../../../LayOut/Container";
import CheckboxItems from "./CheckboxItems";
import HotelCard from "./HotelCard";
import { useSelector } from "react-redux";
import { useState } from "react";

const SideBar = () => {
  const searchData = useSelector((state) => state.searchData.data);

  // pagination
  const [currentPage, setCurrentPage] = useState(0);
  const totalSearchData = searchData.length;
  const dataPerPages = 5;
  const totalPages = Math.ceil(totalSearchData / dataPerPages);
  const pageNumbers = [...Array(totalPages).keys()];

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
          <div className="flex items-center space-x-3 mb-8">
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
          {searchData &&
            searchData
              .slice(
                currentPage * dataPerPages,
                (currentPage + 1) * dataPerPages
              )
              .map((data) => <HotelCard data={data} key={data._id} />)}
        </div>
        
        <div className="drawer-side shadow-xl md:fixed md:z-0">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-100  border text-base-content">
            <CheckboxItems />
          </ul>
        </div>
      </div>
      <div className="flex justify-center gap-2 mb-12 pt-8">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`${
                currentPage === number
                  ? " py-2  px-4 rounded-full font-semibold  border-2 text-white border-teal-600 bg-teal-600"
                  : " px-4 rounded-full font-semibold  py-2 border-2 border-teal-600"
              }`}
            >
              {number}
            </button>
          ))}
        </div>
    </Container>
  );
};

export default SideBar;
