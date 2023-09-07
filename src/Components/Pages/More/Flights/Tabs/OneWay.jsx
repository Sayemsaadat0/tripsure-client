import Card from "antd/es/card/Card";
import React, { useEffect, useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import FlightCard from "./FlightCard";


const OneWay = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [destinationQuery, setDestinationQuery] = useState("");
  const [dateQuery, setDateQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults,destinationQuery);
 
  
  
  const url = `${import.meta.env.VITE_BACKEND_API}/flights?from=${searchQuery}&to=${destinationQuery}&date=${dateQuery}`;

  useEffect(() => {
    if (searchQuery||destinationQuery|| dateQuery) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setSearchResults(data))
        .catch((error) =>
          console.error("Error fetching search results:", error)
        );
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, destinationQuery, dateQuery]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  return (
    <>
    <div className="py-36 w-full flightBackground ">
    <h3 className="text-center text-4xl font-bold text-white mb-10">
          Find the best flight for the right price
        </h3>
      <div className="grid mx-4  md:grid-cols-5 mb-6">
        <div className="flex  items-center relative md:border-r-2 border-b">
          <input
            type="text"
            className="input pl-12  md:rounded-l-full rounded-none w-full  focus:outline-none"
            placeholder="From where ?"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <HiLocationMarker
            size={22}
            className="absolute left-5 text-green-500"
          />
        </div>
        <div className="flex items-center relative md:border-r-2 border-b">
          <input
            type="text"
            className="input  pl-12 rounded-none w-full  focus:outline-none"
            placeholder="To where?"
            onChange={(e) => setDestinationQuery(e.target.value)}
          />
          <HiLocationMarker
            size={22}
            className="absolute left-5 text-green-500"
          />
        </div>
        <div className="md:border-r-2 border-b">
          <input
            type="date"
            className="input rounded-none border-r-2 w-full focus:outline-none "
            placeholder="Input 3"
            onChange={(e) => setDateQuery(e.target.value)}
          />
        </div>
        <select
          name=""
          id=""
          className="select rounded-none border-none outline-none"
        >
          <option value="economy">1 Person, Economy</option>
          <option value="premium">Premium Economy</option>
          <option value="business">Business Class</option>
          <option value="first">First Class</option>
        </select>
        <button className="px-5 py-3 bg-blue-500 text-white font-semibold md:rounded-r-full">
          Find Flights
        </button>
      </div>
    </div>
      <div className="">
      <FlightCard searchResults={searchResults}></FlightCard>
      </div>
    </>
  );
};

export default OneWay;
