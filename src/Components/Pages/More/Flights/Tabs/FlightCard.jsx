import React from "react";
import Container from "../../../../../LayOut/Container";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa6";

const FlightCard = ({ searchResults }) => {
  return (
    <div>
      <Container>
        <div className="my-12 grid mx-2 lg:mx-4 lg:grid-cols-1 gap-5">
          {
            searchResults.map((cardItem, _id) => <div key={_id} className="border mb-5 p-2 sm:p-5 shadow-lg rounded-lg">
              <div className="lg:flex gap-3 justify-between space-y-2 md:space-y-0">
                <div className=" rounded-md p-2">
                  <span className="bg-cyan-500 mb-0 pb-0 text-xs rounded-2xl text-white  px-2">
                    Departure
                  </span>
                  <span className="text-4xl  font-bold text-cyan-500">
                    <FaPlaneDeparture></FaPlaneDeparture>
                  </span>

                  <h3 className="text-cyan-500 flex gap-2 items-center text-xl font-medium">
                    <span>{cardItem?.departure_airport?.name}</span>
                  </h3>
                  <p className="text-slate-500">{cardItem?.departure_airport?.country}</p>
                  <p className="text-slate-500">{cardItem?.departure_time}</p>
                </div>
                <div className="py-3 rounded-md p-2">
                  <span className="bg-cyan-500 mb-0 pb-0 text-xs rounded-2xl text-white  px-2">
                    Arrival
                  </span>
                  <span className="text-4xl font-bold text-cyan-500">
                    <FaPlaneArrival></FaPlaneArrival>
                  </span>
                  <h3 className="text-cyan-500 flex gap-2 items-center text-xl font-medium">
                    <span>{cardItem?.arrival_airport?.name}</span>
                  </h3>
                  <p className="text-slate-500">{cardItem?.arrival_airport?.country}</p>
                  <p className="text-slate-500">{cardItem?.arrival_time}</p>
                </div>
                <div className="py-3  rounded-md p-2">
                  <div className="flex gap-2 justify-between items-end">
                    <div>
                      <h3 className="text-cyan-500 flex gap-2 items-center text-md ">
                        Total Flight Time:{" "}
                        <span className="font-semibold">{cardItem?.total_time}</span>
                      </h3>

                      <p className="text-xl text-cyan-500">Price:</p>
                      <p className="text-slate-500">Economy: <span className="font-semibold text-cyan-400">${cardItem?.prices?.economy}</span></p>
                      <p className="text-slate-500">Business Class: <span className="font-semibold text-cyan-400">${cardItem?.prices?.business}</span></p>
                      <p className="text-slate-500">First Class: <span className="font-semibold text-cyan-400">${cardItem?.prices?.first_class}</span></p>
                    </div>
                    <div className="hidden sm:flex justify-end">
                      {/* <button className="bg-cyan-400 hover:bg-cyan-600 hover:translate-x-2 font-bold hover:translate-y-2 transition-all  px-4 py-2 rounded-full text-white">
                        See Deals
                      </button> */}
                    </div>
                  </div>
                </div>
                <button className="bg-cyan-400 sm:hidden hover:bg-cyan-600 w-full font-bold hover:translate-y-2 transition-all  px-4 py-2 rounded-full text-white">
                  See Deals
                </button>
              </div>
            </div>)
          }
        </div>
      </Container>
    </div>
  );
};

export default FlightCard;
