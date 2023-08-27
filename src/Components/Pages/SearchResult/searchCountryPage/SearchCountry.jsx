import React from "react";
import Container from "../../../../LayOut/Container";
import { BiHotel } from "react-icons/bi";
import Stay from "./EssentialCountry/Stay";
import Eat from "./EssentialCountry/Eat";
import Do from "./EssentialCountry/Do";

// todo:button and fetch kore data dekhano baki ache

const SearchCountry = () => {
  return (
    <div className="my-20">
      <Container>
        <h2 className="text-5xl font-bold">
          <span className="text-red-500">Explore</span> Bangladesh
        </h2>
        {/* todo: todo overflow isnt working well */}

        <div className="mt-8 flex md:grid  md:grid-cols-4  overflow-x-auto gap-4 p-4">

          <button className="btn">Hotel</button>
          <button className="btn">Thingn to Do</button>
          <button className="btn">Thingn to Do</button>
          <button className="btn">Thingn to Do</button>
          <button className="btn">Thingn to Do</button>
          <button className="btn">Thingn to Do</button>
          <button className="btn">Thingn to Do</button>
          <button className="btn">Thingn to Do</button>
       

        </div>
        <div className="grid md:grid-cols-3 gap-1 mt-8">
          <div className="md:col-span-2 col-span-3 ">
            <img
              className="w-full hover:bg-white hover:opacity-80 duration-300"
              src="https://i.ibb.co/54DH6LW/image.png"
              alt=""
            />
          </div>
          <div className="space-y-1 hidden md:block">
            <div className="col-span-1 ">
              <img
                className="w-full hover:bg-white hover:opacity-80 duration-300"
                src="https://i.ibb.co/54DH6LW/image.png"
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                className="w-full hover:bg-white hover:opacity-80 duration-300"
                src="https://i.ibb.co/54DH6LW/image.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="space-y-[70px]">
          <Stay />
          <Eat />
          <Do />
        </div>
      </Container>
    </div>
  );
};

export default SearchCountry;
