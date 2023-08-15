import React from "react";
import Container from "../../../../LayOut/Container";
import { Rating } from "@smastrom/react-rating";

const AirLineReview = () => {
  return (
    <Container>
      <h3 className="text-2xl font-semibold my-6">Airline Review</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="card w-full bg-base-100 ">
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co/mTSvPS1/image.png"
              alt="airplane"
              className="rounded-xl w-full h-32"
            />
          </figure>
          <div className="card-body ">
            <h2 className="text-lg font-medium">American Airlines</h2>
            <div className="flex gap-2 items-center">
              <Rating style={{ maxWidth: 120 }} value={3} readOnly />
              <p>77,2323 reviews</p>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 ">
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co/gwzrGTz/image.png"
              alt="airplane"
              className="rounded-xl w-full h-32"
            />
          </figure>
          <div className="card-body ">
            <h2 className="text-lg font-medium">American Airlines</h2>
            <div className="flex gap-2 items-center">
              <Rating style={{ maxWidth: 120 }} value={4} readOnly />
              <p>77,2323 reviews</p>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 ">
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co/hWBkKFM/image.png"
              alt="airplane"
              className="rounded-xl w-full h-32"
            />
          </figure>
          <div className="card-body ">
            <h2 className="text-lg font-medium">American Airlines</h2>
            <div className="flex gap-2 items-center">
              <Rating style={{ maxWidth: 120 }} value={5} readOnly />
              <p>77,2323 reviews</p>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 ">
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co/Wnbx1PN/image.png"
              alt="airplane"
              className="rounded-xl w-full h-32"
            />
          </figure>
          <div className="card-body ">
            <h2 className="text-lg font-medium">American Airlines</h2>
            <div className="flex gap-2 items-center">
              <Rating style={{ maxWidth: 120 }} value={3} readOnly />
              <p>77,2323 reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <h3 className="text-xl font-semibold">Best Flight Deals</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          accusantium veniam sint voluptas. Incidunt libero et ad rem id maxime!
        </p>
      </div>
      <div className="my-5">
        <h3 className="text-xl font-semibold">Flight Search Filters</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          accusantium veniam sint voluptas. Incidunt libero et ad rem id maxime!
        </p>
      </div>
      <div className="my-5">
        <h3 className="text-xl font-semibold">In-Flight Experience</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          accusantium veniam sint voluptas. Incidunt libero et ad rem id maxime!
        </p>
      </div>
      <div className="my-5">
        <h3 className="text-xl font-semibold">Airplane Photos</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          accusantium veniam sint voluptas. Incidunt libero et ad rem id maxime!
        </p>
      </div>
    </Container>
  );
};

export default AirLineReview;
