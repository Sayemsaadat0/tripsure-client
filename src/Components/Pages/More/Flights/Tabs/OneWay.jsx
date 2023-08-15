import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";


const OneWay = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    const handleCheckboxChange2 = () => {
      setIsChecked2(!isChecked2);
    };

  return (
    <div className="my-36">
      <div className="flex items-center mb-4 mt-4 h-12">
        <div className="flex items-center relative">
          <input
            type="text"
            className="input pl-12  rounded-l-full border-r-2 focus:outline-none"
            placeholder="From where?"
          />
          <HiLocationMarker
            size={22}
            className="absolute left-5 text-green-500"
          />
        </div>
        <div className="flex items-center relative">
          <input
            type="text"
            className="input  pl-12 rounded-none border-r-2 focus:outline-none"
            placeholder="To where?"
          />
          <HiLocationMarker
            size={22}
            className="absolute left-5 text-green-500"
          />
        </div>
        <input
          type="date"
          className="input rounded-none border-r-2 focus:outline-none"
          placeholder="Input 3"
        />
        <select name="" id="" className="select rounded-none outline-none">
          <option value="economy">1 Person, Economy</option>
          <option value="premium">Premium Economy</option>
          <option value="business">Business Class</option>
          <option value="first">First Class</option>
        </select>
        <button className="px-5 py-3 bg-blue-500 text-white font-semibold rounded-r-full">
          Find Flights
        </button>
      </div>
      <div className="grid sm:grid-cols-2 bg-white py-5 justify-items-center rounded-md">
        <div className="form-control">
          <label className=" cursor-pointer flex flex-row items-center space-x-2">
            <input
              type="checkbox"
              checked={isChecked}
              className="checkbox "
              onChange={handleCheckboxChange}
            />
            <span className="label-text">Prefer nonstop</span>
          </label>
        </div>
        <div className="form-control">
          <label className=" cursor-pointer flex flex-row items-center space-x-2">
            <input
              type="checkbox"
              checked={isChecked2}
              className="checkbox"
              onChange={handleCheckboxChange2}
            />
            <span className="label-text">Include nearby airports</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default OneWay;
