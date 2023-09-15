import React from "react";
import Wave from "react-wavify";
// import Currency from "./Currency";
import { Link } from "react-router-dom";

const Footar = () => {
  // /
  const currentYear = new Date().getFullYear();
  return (
    <div className="">
      {/* <Wave
        fill="#edede9"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 80,
          amplitude: 20,
          speed: 0.4,
          points: 4,
        }}
      /> */}
  
      {/* footar-image / next div -bg-black w-full bg-opacity-50 */}
      <footer className="text-gray-600 body-font bg-[#edede9]">
        <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src="https://i.ibb.co/9mX5YKW/logo-6.png  " alt="" />
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
                Explore
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://www.kayak.co.in/help"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.expedia.com/Destinations-In-United-States-Of-America.d201.Flight-Destinations"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Domestic fligth
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.opentable.com/?ref=16087"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Restaurant reservations
                  </a>
                </li>
                <li>
                  <a
                    href="https://tinyurl.com/bdmnd6be"
                    className="text-gray-600 hover:text-gray-800"
                  >
                   Car Rental
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
                About Tripsure
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to={'/aboutusdetails'}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <a
                    href="https://help.priceline.com/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://ir.bookingholdings.com/overview/default.aspx"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.priceline.com/partner/v2/summer-release-2023"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Learn About New Features
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
                Hosting
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://www.airbnb.com/airbnb-friendly"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Tripsure friendly
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.airbnb.com/help/article/1376"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Hosting responsibly
                  </a>
                </li>
                <li>
                  <a
                    href="https://community.withairbnb.com/t5/Community-Center/ct-p/community-center"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Community forum
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.airbnb.com/resources/hosting-homes"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Hosting resources
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CONVERTOR
              </h2>
           
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {currentYear} Tripsure
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="https://web.facebook.com/programmingHero" className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            
         
              <a href="https://www.linkedin.com/groups/8571393/?highlightedUpdateUrn=urn%3Ali%3AgroupPost%3A8571393-7099492928607141888&q=highlightedFeedForGroups" 
               className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footar;
