import { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import FlightCard from "./FlightCard";
import LazyLoad from "react-lazy-load";

const OneWay = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [destinationQuery, setDestinationQuery] = useState("");
  const [dateQuery, setDateQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);

  const url = `${import.meta.env.VITE_BACKEND_API}/flights?from=${searchQuery}&to=${destinationQuery}&date=${dateQuery}`;
  const handleFindFlights = () => {
    if (searchQuery || destinationQuery || dateQuery) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setSearchResults(data))
        .catch((error) =>
          console.error("Error fetching search results:", error)
        );
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <div className="mt-20  w-full ">
        <h3 className="text-center md:text-4xl text-2xl  tracking-widest ">
          Find the best flight for the right price
        </h3>
        <div className="sm:flex items-center justify-center  gap-4 w-full">
          <div className="grid mx-4 gap-2 w-full ">
            <div className="flex items-center relative border">
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
            <div className="flex items-center relative border">
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
            <div className="border">
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
              className="select rounded-none border focus:outline-none"
            >
              <option value="economy">1 Person, Economy</option>
              <option value="premium">Premium Economy</option>
              <option value="business">Business Class</option>
              <option value="first">First Class</option>
            </select>
            <button
              onClick={handleFindFlights}
              className="btn mt-5"
            >
              Find Flights
            </button>
          </div>
          <div className="w-full hidden sm:block">

            <LazyLoad>
              <img src="https://i.ibb.co/DQhPqRw/airplane-animation.gif" alt="" />
            </LazyLoad>

          </div>
        </div>
      </div>
      <div className="">
        <FlightCard searchResults={searchResults}></FlightCard>
      </div>
    </>
  );
};

export default OneWay;
