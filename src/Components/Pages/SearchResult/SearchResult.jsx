import React from "react";
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
  return (
    <div className=" pt-12">
      <div className="mb-12">
      <SearchSection/>
     </div>
      <div className=" w-full bg-base-100 rounded-tl-lg rounded-tr-lg">
        <Container>
        <div className="border-t border-x p-4 ">
          <h4 className="text-xl font-semibold">
            Search results matching "{searchText}"
          </h4>
        </div>
        {searchData.map((data) => (
          <SearchResultCard data={data} key={data._id}/>
        ))}
      </Container>
      </div>
    </div>
  );
};

export default SearchResult;
