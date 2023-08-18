import "./searchSection.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { IoBedOutline, IoRestaurantSharp } from "react-icons/io5";
import { FaArrowsToDot } from "react-icons/fa6";
import { BsKey } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux"
import { setActiveCategory } from "../../../../Features/searchCategory/categorySlice";
import useAOSInit from "../../../../Hooks/useAOSInit";

const SearchSection = () => { 
  useAOSInit()
  const categories = [
    {
      title: "Search All",
      icon: <BiHomeAlt2 />
    },
    {
      title: "Hotels",
      icon: <IoBedOutline />
    },
    {
      title: "Things To Do",
      icon: <FaArrowsToDot />
    },
    {
      title: "Restaurants",
      icon: <IoRestaurantSharp />
    },
    {
      title: "Vacation Rentals",
      icon: <BsKey />
    }
  ]
  const activeCategory = useSelector(state => state.category.category)
  console.log(activeCategory)
  const dispatch = useDispatch()
  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category))
  };
  return (
    <div data-AOS="fade-down"
      data-aos-duration="3000"
      data-aos-easing="ease" 
      className="w-full md:max-w-3xl mx-auto mt-20">
      <div>
        <div>
          <h1 className="text-center text-5xl font-bold hidden md:block">
            {
              activeCategory === "Hotels" ? "Stay somewhere great" : activeCategory === "Things To Do" ? "Do something fun" : activeCategory === "Restaurants" ? "Find places to eat" : activeCategory === "Vacation Rentals" ? "Explore places to rent" : "Where to?"
            }

          </h1>
          <ul className="flex overflow-x-auto w-full my-5">
            {
              categories.map((category, i) => <li key={i} className={`searchFilter mx-2 ${activeCategory === category.title ? 'searchActive' : ''}`} onClick={() => { handleCategoryClick(category.title) }}>
                <span className="mr-1 text-xl">
                  {category.icon}
                </span>
                {category.title}
              </li>)
            }
          </ul>
        </div>

        <form className="">
          <div className="searchField rounded-xl md:rounded-full w-[90%] mx-auto md:w-full p-2 relative">
            <button className="absolute top-5">
              <AiOutlineSearch className="text-xl" />
            </button>
            <div>
              <input
                type="text"
                placeholder={
                  activeCategory === "Hotels" ? "Hotel name or destination" : activeCategory === "Things To Do" ? "Attraction, activity or destination" : activeCategory === "Restaurants" ? "Restaurant or Destination" : activeCategory === "Vacation Rentals" ? "Destination" : "Place to go, things to do, hotels..."
                }
                className="py-2 pl-7 block w-full md:rounded-full border-b-2 md:border-none focus:outline-0 text-md"
              />
            </div>
            <div className="w-full md:w-[120px] md:absolute md:bottom-2 md:right-2">
              <button className="bg-[#19a0c9] text-white  hover:bg-blue-600 transition duration-300 px-4 py-2 text-lg font-semibold rounded-full w-full mt-5">
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
