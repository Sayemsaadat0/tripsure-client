import React, { useState } from "react";
import Rating from "react-rating";
import { FaCircle, FaCircleNotch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdLocationPin } from "react-icons/md";
import SearchResultCard from "./SearchResultCard";
import SearchSection from "../Home/SearchSection/SearchSection";
import Container from "../../../LayOut/Container";

const SearchResult = () => {
  const searchData = useSelector((state) => state.searchData.data);
  const searchText = useSelector((state) => state.searchData.searchText);
  console.log(searchData);
  const [currentPage, setCurrentPage] = useState(0)
  console.log(currentPage)
  const totalSearchData = searchData.length
  console.log(totalSearchData)
  const dataPerPages = 5;
  const totalPages = Math.ceil(totalSearchData / dataPerPages)
  const pageNumbers = [...Array(totalPages).keys()]
  return (
    <div className=" pt-12">
      <div className="mb-12">
        <SearchSection />
      </div>
      <div className=" w-full bg-base-100 rounded-tl-lg rounded-tr-lg">
        <div className="border-t border-x p-4 ">
          <h4 className="text-xl font-semibold">
            Search results matching "{searchText}"
          </h4>
        </div>
        {searchData.slice(currentPage * dataPerPages, (currentPage + 1) * dataPerPages).map((data) => (
          <SearchResultCard data={data} key={data._id}/>
        ))}
      </div>
      <div className="flex justify-center gap-2 mb-12 bg-white py-5">
          {
            pageNumbers.map(number =>  <button key={number} onClick={()=>setCurrentPage(number)} className={`${currentPage === number ? "bg-green-600 py-2  px-4 rounded-full font-semibold  border-2 text-white border-teal-600 bg-teal-600" : " px-4 rounded-full font-semibold  py-2 border-2 border-teal-600"}`}>{number}</button>)
          }
        </div>
    </div>
  );
};

export default SearchResult;
