import { Rating } from "@smastrom/react-rating";
import React from "react";
import Container from "../../../../../LayOut/Container";

const TravelersLoveDesign = () => {
  return (
    <div className="my-12">
      <h3 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold text-center mb-8">
        Travelers love our Trip Designers
      </h3>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-3  w-full bg-sky-300 lg:p-24 sm:p-12 p-8">
            <Rating style={{ maxWidth: 160 }} value={4} />
            <h4 className="md:text-2xl text-lg font-semibold">
              “Ana’s well-curated network of hosts and guides are knowledgeable
              and deeply committed to providing their guests with rewarding
              experiences. ”
            </h4>
            <div>
              <p>John’s review for Ana C</p>
              <p>Spain, March 2022</p>
            </div>
          </div>
          <div className="order-first md:order-last md:h-[100%] h-72 tripDesignBackground1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:space-y-3 space-y-1 lg:p-24 sm:p-12 p-8 w-full bg-orange-200">
            <Rating style={{ maxWidth: 160 }} value={5} />
            <h4 className="md:text-2xl text-lg font-semibold">
              “Mary was SO helpful and insightful! We felt so much more at ease
              during our vacation knowing we had someone to take care of things
              for us.”
            </h4>
            <div>
              <p>Laura’s review for Mary</p>
              <p>Costa Rica, April 2022</p>
            </div>
          </div>
          <div className="order-first md:h-[100%] h-72 tripDesignBackground2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:space-y-3 space-y-1 lg:p-24 sm:p-12 p-8 w-full bg-purple-300">
            <Rating style={{ maxWidth: 160 }} value={3} />
            <h4 className="md:text-2xl text-lg font-semibold">
              “Susan was accessible, flexible, kind, had great ideas, accepted
              my ideas, and worked around our constraints.”
            </h4>
            <div>
              <p>Daniela’s review for Susan C</p>
              <p>Turkey, April 2022</p>
            </div>
          </div>
          <div className="order-first md:order-last md:h-[100%] h-72 tripDesignBackground3"></div>
        </div>
      </div>
    </div>
  );
};

export default TravelersLoveDesign;
