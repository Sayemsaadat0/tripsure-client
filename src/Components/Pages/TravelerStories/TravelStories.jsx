import { Link } from "react-router-dom";
import FoodAndDrink from "./FoodAndDrink";
import KeepExploring from "./KeepExploring";
import PlacesToVisit from "./PlacesToVisit";
import "./TravelerStories.css";

const TravelarStories = () => {
  return (
    <div className="max-w-7xl mx-auto pb-10">
      <div className="mx-auto">
        {/* Banner  */}
        <div className="bg-story bg-cover bg-center max-w-6xl mx-auto h-[550px] md:h-[620px] relative">
          <div className="mx-5 lg:mx-16 absolute bottom-10">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Where to go between July 4th and Labor Day
            </h1>
            <p className="text-white text-2xl my-2 hidden md:block">
              Make the most of your summer.
            </p>
            <Link to="stories"><button className="text-lg text-white border-2 border-white py-2 px-3 font-semibold rounded-full hover:bg-gray-900 mt-4 md:mt-0">
              Read More
            </button></Link>
          </div>
        </div>
        {/* food and drink  */}
        <FoodAndDrink />
        <PlacesToVisit />
        <KeepExploring />
      </div>
    </div>
  );
};

export default TravelarStories;
