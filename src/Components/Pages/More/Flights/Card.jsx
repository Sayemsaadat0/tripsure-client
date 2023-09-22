import React from "react";
import Container from "../../../../LayOut/Container";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa6";

const Card = () => {
  return (
    <Container>
      <div className="my-12 grid mx-2 lg:mx-4 lg:grid-cols-1 gap-5">
        <div className="border p-5 shadow-lg rounded-lg">
          <div className="lg:flex gap-3 space-y-2 md:space-y-0">
          <div className=" rounded-md p-2">
            
            <span className="bg-orange-500 mb-0 pb-0 text-xs rounded-2xl text-white  px-2">Departure</span>
            <span className="text-4xl  font-bold text-green-500"><FaPlaneDeparture></FaPlaneDeparture></span>
           
            <h3 className="text-green-500 flex gap-2 items-center text-xl font-medium">
              
            <span>John F. Kennedy International Airport</span>
            </h3>
            <p className="text-slate-500">United States</p>
            <p className="text-slate-500">2023-09-15 18:00</p>
          </div>
          <div className="py-3 rounded-md p-2">
          <span className="bg-orange-500 mb-0 pb-0 text-xs rounded-2xl text-white  px-2">Arrival</span>
            <span className="text-4xl font-bold text-green-500"><FaPlaneArrival></FaPlaneArrival></span>
            <h3 className="text-green-500 flex gap-2 items-center text-xl font-medium">
              
            <span>John F. Kennedy International Airport</span>
            </h3>
            <p className="text-slate-500">United States</p>
            <p className="text-slate-500">2023-09-15 18:00</p>
          </div>
          <div className="py-3  rounded-md p-2">
          <div className="flex gap-2 justify-between items-end">
          <div>
            <h3 className="text-green-500 flex gap-2 items-center text-md ">
             Total Flight Time: <span className="font-semibold">11 hours 30 minutes</span>
            </h3>
            
            
            <p className="text-xl text-green-500">Price:</p>
            <p className="text-slate-500">Economy: $454</p>
            <p className="text-slate-500">Business Class: $454</p>
            <p className="text-slate-500">First Class: $454</p>
            </div>
            <div className="flex justify-end">
            <button className="bg-orange-400 hover:bg-orange-600 hover:translate-x-2 font-bold hover:translate-y-2 transition-all  px-4 py-2 rounded-full text-white">See Deals</button>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
