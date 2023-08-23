import React from "react";
import Rating from "react-rating";
import { FaCircle, FaCircleNotch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdLocationPin } from "react-icons/md";
import SearchResultCard from "./SearchResultCard";

const SearchResult = () => {
  const searchData = useSelector((state) => state.searchData.data);
  const searchText = useSelector((state) => state.searchData.searchText);
  console.log(searchData);
  return (
    <div className="bg-base-300 pt-12">
      <div className=" w-full bg-base-100 rounded-tl-lg rounded-tr-lg">
        <div className="border-t border-x p-4 ">
          <h4 className="text-xl font-semibold">
            Search results matching "{searchText}"
          </h4>
        </div>
        {searchData.map((data) => (
          <SearchResultCard data={data} key={data._id}/>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
