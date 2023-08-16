import { Link } from "react-router-dom";

const FoodAndDrink = () => {
    return (
      <div className="my-16">
        {/* title  */}
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold text-black">Food and Drink</h1>
          <p className="text-xl mt-3">
            Dig into the best restaurants and bars, street food, and culinary
            hotspots around the world. <br /> Whos hungry?
          </p>
        </div>
        <div className="mt-20">
          {/* article1 */}
          <div className="flex flex-col lg:flex-row mx-5 mb-10 lg:mx-0 justify-between gap-4 items-center">
            <div className="lg:w-[40%]">
              <img
                className="rounded-md"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/d8/a8/0c/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_2caabd6f175750cb5d01"
                alt=""
              />
            </div>
            <div  className="lg:w-[60%]">
              <h2 className="text-2xl md:text-3xl text-black font-bold">
                Where to eat in Cancun beyond your resort
              </h2>
              <p className="text-base md:text-lg font-medium my-2 text-justify">
                When you’re on a beach vacation, it’s easy to get lazy and stay at
                the resort since everything you need—especially food and drinks—is
                right there. Even more so at all-inclusives, where not only is it
                right there, but it’s also unlimited and included...
              </p>
              <Link to="stories">
              <button className="bg-transparent text-black border-2  border-[#19a0c9] hover:text-white  hover:bg-[#19a0c9] transition duration-300 px-3 py-2 text-md font-semibold rounded-full">
                Read More
              </button>
              </Link>
            </div>
          </div>
          {/* article2 */}
          <div className="flex flex-col lg:flex-row mx-5 mb-10 lg:mx-0 justify-between gap-4 items-center">
            <div  className="lg:w-[40%]">
              <img
                className="rounded-md"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/64/56/7a/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_8774b5779be5a3e74584"
                alt=""
              />
            </div>
            <div  className="lg:w-[60%]">
              <h2 className="text-2xl md:text-3xl text-black font-bold">
              Taste the World in One City: Washington, D.C.
              </h2>
              <p className="text-base md:text-lg font-medium my-2 text-justify">
              Instead, D.C. is a place with a large international community—and a wide range of cuisine to prove it. Below, we’ve rounded up eight Washington, D.C. restaurants where you can try food from around the world,...
              </p>
              <Link to="stories">
              <button className="bg-transparent text-black border-2  border-[#19a0c9] hover:text-white  hover:bg-[#19a0c9] transition duration-300 px-3 py-2 text-md font-semibold rounded-full">
                Read More
              </button>
              </Link>
            </div>
          </div>
          {/* article3 */}
          <div className="flex flex-col lg:flex-row mx-5 mb-10 lg:mx-0 justify-between gap-4 items-center">
            <div  className="lg:w-[40%]">
              <img
                className="rounded-md"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/7c/45/35/caption.jpg?w=1100&h=600&s=1&cx=512&cy=341&chk=v1_0c0c67688a9bb1f67fff"
                alt=""
              />
            </div>
            <div  className="lg:w-[60%]">
              <h2 className="text-2xl md:text-3xl text-black font-bold">
              Eat your way around Walt Disney World
              </h2>
              <p className="text-base md:text-lg font-medium my-2 text-justify">
              Does food shaped like Mickey Mouse actually taste better, or is it just being at Walt Disney World that makes everything seem so good? I’m still trying to figure out the answer, but I can’t resist any of it...
              </p>
              <Link to="stories">
              <button className="bg-transparent text-black border-2  border-[#19a0c9] hover:text-white  hover:bg-[#19a0c9] transition duration-300 px-3 py-2 text-md font-semibold rounded-full">
                Read More
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FoodAndDrink;
  