/* import "./searchSection.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { IoBedOutline, IoRestaurantSharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { setActiveCategory } from "../../../../Features/searchCategory/categorySlice";
import {
  setSearchData,
  setSearchText,
} from "../../../../Features/searchCategory/searchData";
import { BsSearch } from "react-icons/bs";

const SearchSection = () => {
  const navigate = useNavigate();
  const categories = [
    {
      title: "Search All",
      icon: <BiHomeAlt2 />,
    },
    {
      title: "Hotels",
      icon: <IoBedOutline />,
    },
    {
      title: "Restaurants",
      icon: <IoRestaurantSharp />,
    },
  ];
  const activeCategory = useSelector((state) => state.category.category);
  const searchResult = useSelector((state) => state.searchData);

  const dispatch = useDispatch();
  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.searchText.value;
    dispatch(setSearchText(searchText));
    fetch(
      `${import.meta.env.VITE_BACKEND_API}/searchResult/${
        activeCategory.toLowerCase() === "search all"
          ? "search-all"
          : activeCategory.toLowerCase() === "things to do"
          ? "search-all"
          : activeCategory.toLowerCase()
      }/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => dispatch(setSearchData(data)));
    e.target.reset();
    navigate("/searchResult");
  };

  return (
    <div className="w-full md:max-w-3xl mx-auto mt-20 ">
      <div>
        <div>
          <h1 className="text-center text-5xl text-[#79c7ff] font-bold hidden md:block">
            {activeCategory === "Hotels"
              ? "Stay somewhere great"
              : activeCategory === "Restaurants"
              ? "Find places to eat"
              : "Where to?"}
          </h1>
          <ul className="flex w-full justify-center mx-auto overflow-x-auto my-5">
            {categories.map((category, i) => (
              <li
                key={i}
                className={`searchFilter mx-2 ${
                  activeCategory === category.title ? "searchActive" : ""
                }`}
                onClick={() => {
                  handleCategoryClick(category.title);
                }}
              >
                <span className="mr-1 text-xl">{category.icon}</span>
                {category.title}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSearch}>
          <div className="searchField rounded-xl md:rounded-full w-[90%] mx-auto md:w-full p-2 relative">
            <p className="absolute top-3">
              <AiOutlineSearch className="text-3xl " />
            </p>
            <div>
              <input
                type="text"
                name="searchText"
                placeholder={
                  activeCategory === "Hotels"
                    ? "Hotel name or destination"
                    : activeCategory === "Things To Do"
                    ? "Attraction, activity or destination"
                    : activeCategory === "Restaurants"
                    ? "Restaurant or Destination"
                    : activeCategory === "Vacation Rentals"
                    ? "Destination"
                    : "Place to go, things to do, hotels..."
                }
                className="py-2 pl-7 block w-full md:rounded-full border-b-2 md:border-none focus:outline-0 text-md"
              />
            </div>
            <div className="w-full md:w-[120px] md:absolute md:bottom-[6px] md:right-2 ">
              <button
                className="
              hover:bg-[#6599b1] 
              text-white 
              bg-[#79c7ff] 
              transition duration-300 px-4 py-2 
              text-lg 
              font-semibold 
              rounded-full 
              w-full mt-5 
              flex justify-center items-center gap-2">
                <BsSearch></BsSearch>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;
 */

/* 
import "./searchSection.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";



const SearchSection = () => {
 
  

  const handleSearch = (e) => {
   
  };

  return (
    <div className="w-full md:max-w-3xl mx-auto mt-20 ">
      <div>
        <div>
          <h1 className="text-center text-xl text-[#0184a4] font-bold hidden md:block">
            Discover The World
          </h1>
        </div>
        <form >
          <div className="searchField rounded-xl md:rounded-full w-[90%] mx-auto md:w-full p-2 relative">
            <p className="absolute top-3">
              <AiOutlineSearch className="text-3xl " />
            </p>
            <div>
              <input
                type="text"
                name="searchText"
                placeholder="All Destinations"
                className="py-2 pl-10 block w-full md:rounded-full border-b-2 md:border-none focus:outline-0 text-md"
              />
            </div>
            <div className="w-full md:w-[120px] md:absolute md:bottom-[6px] md:right-2 ">
              <button className="
              hover:bg-[#6599b1] 
              text-white 
              bg-[#79c7ff] 
              transition duration-300 px-4 py-2 
              text-lg 
              font-semibold 
              rounded-full 
              w-full mt-5 
              flex justify-center items-center gap-2">
                <BsSearch></BsSearch>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { AiOutlineSearch } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const SearchSection = () => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("/destinations.json")
      .then((response) => response.json())
      .then((data) => {
        setResults(data.destinations);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const filteredResults = results.filter((destination) =>
      destination.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setResults(filteredResults); 
    navigate("/searchResult"); 
  };

  return (
    <div className="w-full md:max-w-3xl mx-auto mt-20">
      <div>
        <div>
          <h1 className="text-center text-xl text-[#0184a4] font-bold hidden md:block">
            Discover The World
          </h1>
        </div>
        <form onSubmit={handleSearch}>
          <div className="searchField rounded-xl md:rounded-full w-[90%] mx-auto md:w-full p-2 relative">
            <p className="absolute top-3">
              <AiOutlineSearch className="text-3xl " />
            </p>
            <div>
              <input
                type="text"
                name="searchText"
                placeholder="All Destinations"
                className="py-2 pl-10 block w-full md:rounded-full border-b-2 md:border-none focus:outline-0 text-md"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div className="w-full md:w-[120px] md:absolute md:bottom-[6px] md:right-2">
              <button className="
              hover:bg-[#6599b1] 
              text-white 
              bg-[#79c7ff] 
              transition duration-300 px-4 py-2 
              text-lg 
              font-semibold 
              rounded-full 
              w-full mt-5 
              flex justify-center items-center gap-2">
                <BsSearch></BsSearch>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;
 


/* 
import { AiOutlineSearch } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const SearchSection = () => {



  return (
    <div className="w-full md:max-w-3xl mx-auto mt-20">
      <div>
        <div>
          <h1 className="text-center text-xl text-[#0184a4] font-bold hidden md:block">
            Discover The World
          </h1>
        </div>
        <form>
          <div className="searchField rounded-xl md:rounded-full w-[90%] mx-auto md:w-full p-2 relative">
            <p className="absolute top-3">
              <AiOutlineSearch className="text-3xl " />
            </p>
            <div>
              <input
                type="text"
                name="searchText"
                placeholder="All Destinations"
                className="py-2 pl-10 block w-full md:rounded-full border-b-2 md:border-none focus:outline-0 text-md"
              />
            </div>
            <div className="w-full md:w-[120px] md:absolute md:bottom-[6px] md:right-2">
              <button
                className="
                hover:bg-[#6599b1] 
                text-white 
                bg-[#79c7ff] 
                transition duration-300 px-4 py-2 
                text-lg 
                font-semibold 
                rounded-full 
                w-full mt-5 
                flex justify-center items-center gap-2">
                <BsSearch></BsSearch>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;
 */