import { Link } from "react-router-dom";
import FoodAndDrink from "./FoodAndDrink";
import KeepExploring from "./KeepExploring";
import PlacesToVisit from "./PlacesToVisit";
import "./TravelerStories.css";
import { useEffect, useState } from "react";
import axios from "axios";
import stories from "./Stories/Stories";

const TravelarStories = () => {
  const [stories, setStories] = useState([])
  useEffect(() => {
    axios.get(`https://tripsure-server-sayemsaadat0.vercel.app/story`)
      .then(res => {
        setStories(res.data)
        console.log(res.data)
      })
  }, [])

  return (
    <div className="max-w-7xl mx-auto mt-16 pb-10">
      <div className="mx-auto">
        {/* Banner  */}
        <div className="bg-story bg-cover bg-center max-w-7xl mx-auto h-[550px] md:h-[620px] relative">
          <div className="mx-5 lg:mx-16 absolute bottom-10">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Where to go between July 4th and Labor Day
            </h1>
            <p className="text-white text-2xl my-2 hidden md:block">
              Make the most of your summer.
            </p>
            <Link to="stories">
              <button className="text-lg text-white border-2 border-white py-2 px-3 font-semibold rounded-full hover:bg-gray-900 mt-4 md:mt-0">
                Read More
              </button>
            </Link>
          </div>
        </div>
        {/* food and drink  */}
        <div>
          <div className="mx-auto text-center mt-10">
            <h1 className="text-4xl font-bold text-black">Food and Drink</h1>
            <p className="text-xl mt-3">
              Dig into the best restaurants and bars, street food, and culinary
              hotspots around the world. <br /> Whos hungry?
            </p>
          </div>
          {
            stories.map(story => <FoodAndDrink key={story._id} story={story} />)
          }
        </div>

        <PlacesToVisit />
        <KeepExploring />
      </div>
    </div>
  );
};

export default TravelarStories;
