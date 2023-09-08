import React from 'react';
import Container from '../../../../LayOut/Container';

const MadicalCard = () => {
    return (
        <div className="mt-20">
        <Container>
          <div className="text-center space-y-3 md:w-[60%] mx-auto">
            <h3 className="text-4xl font-bold">Travel Health and Safety Guide</h3>
            <p className="text-lg">
              Welcome to our Travel Health and Safety Guide, your go-to resource
              for staying healthy and safe while exploring the world. We
              understand that your well-being is a top priority, and this guide is
              designed to equip you with essential information and tips to ensure
              a worry-free and enjoyable travel experience.
            </p>
          </div>
          <img
            className="w-[100%] h-[390px] mt-8"
            src="https://i.ibb.co/RYqkf1K/image.png"
            alt="medical"
          />
          <div className="mt-10">
            <h3 className="text-2xl text-center font-bold underline">
              Specific Health Guidelines
            </h3>
            <div className=" grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-5 mt-8">
              <div className="group card w-full bg-base-100 border-2 hover:shadow-2xl  hover:border-none transition">
                <figure className="px-4 py-4">
                  <img
                    src="https://i.ibb.co/41xnK2X/image.png"
                    alt="health"
                    className="rounded-xl group-hover:scale-105 transition"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-lg font-bold">
                    [Destination Name] Health Guidelines
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-2xl text-center font-bold underline">
              Local Healthcare Resources
            </h3>
            <div className=" grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-5 mt-8">
              <div className="group card w-full bg-base-100 border-2 hover:shadow-2xl  hover:border-none transition">
                <figure className="px-4 py-4">
                  <img
                    src="https://i.ibb.co/854byK2/image.png"
                    alt="health"
                    className="rounded-xl group-hover:scale-105 transition"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-lg font-bold">
                    [Destination Name] Health Guidelines
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-2xl text-center font-bold underline">
              Traveler's First Aid Kit
            </h3>
            <div className=" grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-5 mt-8">
              <div className="group card w-full bg-base-100 border-2 hover:shadow-2xl  hover:border-none transition">
                <figure className="px-4 py-4">
                  <img
                    src="https://i.ibb.co/YcM8cq4/image.png"
                    alt="health"
                    className="rounded-xl group-hover:scale-105 transition"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-lg font-bold">First Aid Kit</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default MadicalCard;