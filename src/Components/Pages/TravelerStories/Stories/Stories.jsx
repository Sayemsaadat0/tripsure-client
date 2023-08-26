import { useState } from "react";
import KeepExploring from "../KeepExploring";

const Stories = () => {
  const [allStoryData, setAllStoryData] = useState([]);

  fetch("http://localhost:1000/postStory")
    .then((res) => res.json())
    .then((data) => {
      setAllStoryData(data);
    });

  return (
    <div className="max-w-7xl mx-auto my-10">
      <article>
        {/* title  */}
        <div className="md:w-[70%] lg:w-[50%] mx-5 md:mx-auto">
          <h1 className="text-black text-3xl  md:text-5xl font-bold">
            Where to go between July 4th and Labor Day
          </h1>
          <h4 className="text-xl md:text-3xl font-bold text-black my-5">
            Make the most of your summer.
          </h4>
        </div>
        <div className="bg-cover bg-center w-[90%] lg:max-w-6xl mx-auto  lg:h-[639px]">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/79/4e/c1/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_31e5f4064be105cac4ff"
            alt=""
          />
        </div>
        <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto my-3 lg:my-10">
          <p className="text-xl text-black text-justify">
            The period between the Fourth of July and Labor Day is considered
            the peak summer vacation season in the U.S. Days are long, the sun
            is out, and everyone wants to get out of the house. But with flight
            prices high and a seemingly endless amount of destinations to
            consider, it can be hard to decide where to take your well-earned
            summer PTO. Whether youre looking for a domestic or international
            getaway, we’ve pulled together six destinations worthy of a visit
            between the two major summer holidays.
          </p>
          <h2 className="font-bold text-3xl my-5 text-black">Seattle</h2>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/79/01/06/caption.jpg?w=800&h=-1&s=1"
            alt=""
          />
          <p className="text-xl text-black text-justify">
            Come summer, Seattle is bathed in sunlight, a much-needed respite
            from its infamous rain. With mild temperatures and plenty of outdoor
            activities, its the perfect destination for soaking up the Pacific
            Northwests natural beauty.{" "}
          </p>
          <p className="text-xl text-black my-5 text-justify">
            But first? Coffee (you are in the birthplace of Starbucks, after
            all). Instead of standing in line for the original Starbucks at Pike
            Place, make the 10-minute walk to Monorail Espresso. While they’ve
            got a brick-and-mortar now, Monorail is credited as the world’s
            first espresso cart, made in the most Seattle way possible, out of
            an old Boeing surplus shuttle cart.
          </p>
          <p className="text-xl text-black text-justify">
            Then, it’s time to get outside. You have endless options, but we’re
            partial to The Chihuly Garden and Glass, best seen on sunny summer
            days when rays shine through the exquisite, ultra-colorful glass art
            installations. If you need more room to spread out (and let the kids
            run wild) amble through the free-to-enter Washington Park Arboretum,
            a 230-acre park with walking trails and a diverse collection of
            trees, plants, and flowers.
          </p>
        </div>
      </article>
      <KeepExploring />
    </div>
  );
};

export default Stories;
