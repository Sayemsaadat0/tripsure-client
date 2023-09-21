/*  import { useSelector } from "react-redux";
import SearchResultCard from "./SearchResultCard";
import SearchSection from "../Home/SearchSection/SearchSection";
import Container from "../../../LayOut/Container";
import { useState } from "react";

const SearchResult = () => {
  const searchData = useSelector((state) => state.searchData.data);
  const searchText = useSelector((state) => state.searchData.searchText);


  const [currentPage, setCurrentPage] = useState(0);
  const totalSearchData = searchData.length;
  const dataPerPages = 5;
  const totalPages = Math.ceil(totalSearchData / dataPerPages);
  const pageNumbers = [...Array(totalPages).keys()];

  return (
    <div className=" pt-12">
      <div className="mb-12">
        <SearchSection />
      </div>
      <div className=" w-full bg-base-100 rounded-tl-lg rounded-tr-lg">
        <Container>
          <div className="p-4">
            <h4 className="text-xl font-semibold">
              Search results matching "{searchText}"
            </h4>
          </div>
          {searchData
            .slice(currentPage * dataPerPages, (currentPage + 1) * dataPerPages)
            .map((data) => (
              <SearchResultCard
                data={data}
                country={data.country}
                key={data._id}
              />
            ))}
        </Container>
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
    </div>
  );
};

export default SearchResult; */
  
 
 import React from 'react';

const SearchResult = ({ results }) => {
  return (
    <div className="mt-4">
      {results.map((result, index) => (
        <div key={index} className="mb-2">
          <p>{result.title}</p>
          {result.type === "country" && <p>This is a country</p>}
          {result.type === "hotel" && <p>This is hotel data</p>}
          {result.type === "restaurant" && <p>This is restaurant</p>}
          {result.type === "area" && <p>This is area</p>}
          {result.type === "resort" && <p>This is resort</p>}
        </div>
      ))}
    </div>
  );
};

export default SearchResult;  


/* import React from 'react';

const SearchResult = ({ location }) => {
  const { state } = location;
  const results = state ? state.results : [];

  return (
    <div className="mt-4">
      {results.map((result, index) => (
        <div key={index} className="mb-2">
          <p>{result.title}</p>
          {result.type === "country" && <p>This is a country</p>}
          {result.type === "hotel" && <p>This is hotel data</p>}
          {result.type === "restaurant" && <p>This is restaurant</p>}
          {result.type === "area" && <p>This is area</p>}
          {result.type === "resort" && <p>This is resort</p>}
        </div>
      ))}
    </div>
  );
};

export default SearchResult; */