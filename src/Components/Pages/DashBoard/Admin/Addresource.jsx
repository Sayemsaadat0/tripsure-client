import React from "react";
import { Link } from 'react-router-dom';

const Addresource = () => {
  const resources = [
    {
      route:'addflights',
      name: "Add Flights",
    },
    {
      route:'addpackages',
      name: "Add Package",
    },
    {
      route:'addresturants',
      name: "Add resturants",
    },
    {
      route:'addplaces',
      name: "Add Places",
    },
    {
      route:'addthings',
      name: "Add Things to do",
    },
    {
      route:'addhotels',
      name: "Add hotels",
    },
  ];
  return (
    <div>
      <div>
        <h2 className="uppercase font-semibold text-xl text-center mb-10">Total Add Resources ALL</h2>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {resources.map((card) => (
          <>
            <div className="card card-compact w-78 bg-base-100 shadow-xl">
              <figure>
                <img
                className="hover:scale-110 hover:transition"
                  src="https://i.ibb.co/z28WN2X/pexels-veeterzy-114979.jpg"
                  alt="tour"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title flex justify-center items-center">
                  <Link to={`/dashboard/${card.route}`} className="link link-primary no-underline hover:underline">{card.name}</Link>
                 </h2> 
                  
              
                
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Addresource;
