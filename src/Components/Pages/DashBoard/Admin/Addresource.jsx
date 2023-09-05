import React from "react";
import { Link } from 'react-router-dom';

const Addresource = () => {

  const resources = [
    {
      picture: 'https://i.ibb.co/nsrNGGC/Untitled-design-1.png',
      route: 'addflights',
      name: "Add Flights",
    },
    {
      picture: 'https://i.ibb.co/gjXptW2/Untitled-design-2.png',
      route: 'addpackages',
      name: "Add Package",
    },
    {
      picture: 'https://i.ibb.co/19yr3Tt/Restaurant.png',
      route: 'addresturants',
      name: "Add resturants",
    },
    {
      picture: 'https://i.ibb.co/JQcnVzr/Restaurant-1.png',
      route: 'addplaces',
      name: "Add Places",
    },
    {
      picture: 'https://i.ibb.co/t2p9ScG/couple-together-kayaking-river.jpg',
      route: 'addthings',
      name: "Add Things to do",
    },
    {
      picture: 'https://i.ibb.co/SxcP9T2/Restaurant-2.png',
      route: 'addhotels',
      name: "Add hotels",
    },
    {
      picture: 'https://i.ibb.co/SxcP9T2/Restaurant-2.png',
      route: 'addguide',
      name: "Add Guide",
    },

    // todo add travelDeals page and form with backend data
    // departure dates will be single date
  ];
  return (
    <div className="p-6">
      <div>
        <h2 className="uppercase font-semibold text-xl text-center mb-10 h-full"></h2>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {resources.map((card) => (
          <>
            <div className="card card-compact w-78 hover:bg-base-100 duration-500 shadow-xl overflow-hidden">
              <Link to={`/dashboard/${card.route}`} className="link  no-underline hover:underline">

                <img
                  className="hover:scale-110 duration-700 w-full "
                  src={card.picture}
                  alt="tour"/></Link>
              <div className="py-2 px-2">
                <h2 className="card-title">
                  <Link to={`/dashboard/${card.route}`} className="link  no-underline hover:underline">

                    {card.name}</Link>
                </h2>



              </div>
            </div >
          </>
        ))}
      </div>
    </div >
  );
};

export default Addresource;




/* 




 */
