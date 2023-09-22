import { Rating } from "@smastrom/react-rating";
import React from "react";
import Container from "../../../../../LayOut/Container";

const AllTripDesigners = () => {
  return (
    <div className="w-full ">
      <div className="text-center">
        <h3 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl  font-bold">
          Meet a few of our Trip Designers
        </h3>
        <p className="lg:text-xl text-sm font-normal">
          Get started now for a free consult about your desired travel
          destination.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-6 w-full mt-12">
        <div>
          <div className="md:h-[60%] md:w-[80%] lg:h-[80%] lg:w-[100%] h-full w-full text-center space-y-2">
            <img
              className=" rounded-[100%] md:h-full md:w-full h-96 w-96 mx-auto"
              src="https://i.ibb.co/fk7psMz/image.png"
              alt="trip Designer"
            />
            <h3 className="md:text-3xl text-2xl font-bold">Mauricio E</h3>
            <div className="flex flex-row gap-2 items-center justify-center">
              <Rating style={{ maxWidth: 140 }} value={4} />
              <p>7 Reviews</p>
            </div>
            <h4 className="text-lg font-bold">Costa Rica</h4>
            <div className="space-x-2">
              <div className="badge badge-primary">Luxury</div>
              <div className="badge badge-primary">Sultainable Travel</div>
              <div className="badge badge-primary">Beach</div>
              <div className="badge badge-primary">Local Culture</div>
              <div className="badge badge-primary">Parks & Green Spaces</div>
              <div className="badge badge-primary">Animal Encounters</div>
              <div className="badge badge-primary">Must see Attractions</div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:h-[60%] md:w-[80%] lg:h-[80%] lg:w-[100%] h-full w-full text-center space-y-2">
            <img
              className=" rounded-[100%] md:h-full md:w-full h-96 w-96 mx-auto"
              src="https://i.ibb.co/Wgjxy5t/image.png"
              alt="trip Designer"
            />
            <h3 className="text-3xl font-bold">Mauricio E</h3>
            <div className="flex flex-row gap-2 items-center justify-center">
              <Rating style={{ maxWidth: 140 }} value={4} />
              <p>7 Reviews</p>
            </div>
            <h4 className="text-lg font-bold">Costa Rica</h4>
            <div className="space-x-2">
              <div className="badge badge-primary">Luxury</div>
              <div className="badge badge-primary">Sultainable Travel</div>
              <div className="badge badge-primary">Beach</div>
              <div className="badge badge-primary">Local Culture</div>
              <div className="badge badge-primary">Parks & Green Spaces</div>
              <div className="badge badge-primary">Animal Encounters</div>
              <div className="badge badge-primary">Must see Attractions</div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:h-[60%] md:w-[80%] lg:h-[80%] lg:w-[100%] h-full w-full text-center space-y-2">
            <img
              className="rounded-[100%] md:h-full md:w-full h-96 w-96 mx-auto"
              src="https://i.ibb.co/TrcG347/image.png"
              alt="trip Designer"
            />
            <h3 className="text-3xl font-bold">Mauricio E</h3>
            <div className="flex flex-row gap-2 items-center justify-center">
              <Rating style={{ maxWidth: 140 }} value={4} />
              <p>7 Reviews</p>
            </div>
            <h4 className="text-lg font-bold">Costa Rica</h4>
            <div className="space-x-2">
              <div className="badge badge-primary">Luxury</div>
              <div className="badge badge-primary">Sultainable Travel</div>
              <div className="badge badge-primary">Beach</div>
              <div className="badge badge-primary">Local Culture</div>
              <div className="badge badge-primary">Parks & Green Spaces</div>
              <div className="badge badge-primary">Animal Encounters</div>
              <div className="badge badge-primary">Must see Attractions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTripDesigners;
