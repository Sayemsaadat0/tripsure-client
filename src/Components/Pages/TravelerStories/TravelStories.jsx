import { Link } from "react-router-dom";
import FoodAndDrink from "./FoodAndDrink";

import "./TravelerStories.css";
import { useEffect, useState } from "react";
import axios from "axios";

const TravelarStories = () => {
  const [stories, setStories] = useState([])
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_API}/story`)
      .then(res => {
        setStories(res.data)
      })
  }, [])

  return (
    <div className="max-w-7xl mx-auto mt-20 pb-10">
      <div className="mx-auto">
        {/* Banner  */}
        <h2 className="text-center text-3xl tracking-widest underline underline-offset-2 ">Discover the Tales from the Trail</h2>
        {/* food and drink  */}
        <div>
          <div className="mx-auto text-center mt-10">
            <p className="font-light tracking-wider mt-3">
              Dig into the best restaurants and bars, street food, and culinary
              hotspots around the world. <br /> Whos hungry?
            </p>
          </div>
          {
            stories.map(story => <FoodAndDrink key={story._id} story={story} />)
          }
        </div>


      </div>
    </div>
  );
};

export default TravelarStories;
