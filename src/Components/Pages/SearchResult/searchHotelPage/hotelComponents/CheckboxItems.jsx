import React from "react";

const CheckboxItems = () => {
  const items = [
    <div className="space-y-3">
      <div className=" flex items-center space-x-2">
        <input type="checkbox" checked="checked" className="checkbox" />
        <span className="text-lg">Full refundable</span>
      </div>
      <div className=" flex items-center space-x-2">
        <input type="checkbox" checked="checked" className="checkbox" />
        <span className="text-lg">No prepayment needed</span>
      </div>
      <div className=" flex items-center space-x-2">
        <input type="checkbox" checked="checked" className="checkbox" />
        <span className="text-lg">Properties with Special Offers</span>
      </div>
    </div>,
    <div className="space-y-3">
      <input
        type="range"
        min={0}
        max="100"
        value="25"
        className="range range-sm"
        step="25"
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>$0 - $100</span>
      </div>
      <div>
        <select className="  border-2  p-3 focus:outline-none">
          <option disabled selected>
            Price per night
          </option>
          <option>Price + taxes and fees</option>
          <option>Total stay + taxes and fees</option>
        </select>
      </div>
    </div>,
    <div className="space-y-3">
      <div className=" flex items-center space-x-2">
        <input type="checkbox" checked="checked" className="checkbox" />
        <span className="text-lg">Rating & up</span>
      </div>
      <div className=" flex items-center space-x-2">
        <input type="checkbox" checked="checked" className="checkbox" />
        <span className="text-lg">Breakfast included</span>
      </div>
      <div className=" flex items-center space-x-2">
        <input type="checkbox" checked="checked" className="checkbox" />
        <span className="text-lg">4 star</span>
      </div>
    </div>,
  ];

  return (
    <div>
      <ul className="menu lg:menu-horizontal   lg:mb-64 w-full">
        <li className="w-full">
          <details open>
            <summary className="text-2xl focus:text-sky-500">Deals</summary>

            <div className="mt-5">{items[0]}</div>
          </details>
        </li>
        <li className="w-full">
          <details open>
            <summary className="text-2xl focus:text-sky-500">Price</summary>

            <div className="my-5">{items[1]}</div>
          </details>
        </li>
        <li className="w-full">
          <details open>
            <summary className="text-2xl focus:text-sky-500">Popular</summary>

            <div className="mt-5">{items[2]}</div>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default CheckboxItems;
