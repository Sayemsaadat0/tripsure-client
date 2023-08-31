import React, { useState } from "react";
import Container from "../../../LayOut/Container";

import { GoShare, GoLocation } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { BiDockTop } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import ShareModal from "../../Modal/ShareModal";
import PlaceDetails from "./PlaceDetails";

const SearchDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-16">
      <Container>
        <div className="mt-10 mb-14">
          <h2 className="text-xl md:text-3xl mb-2 font-semibold">
            Veluvana Bali - Owl Bamboo House
          </h2>
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center justify-between gap-4">
              <p className="flex items-center text-black gap-1">
                <FaStar></FaStar>4.86{" "}
                <span className="underline cursor-pointer">134 reviews</span>
              </p>
              <p>Superhost</p>
              <p className="underline cursor-pointer text-black ">
                Sidemen, Bali, Indonesia
              </p>
            </div>
            <div className="flex items-center">
              <p className="flex items-center text-black gap-2 px-2 py-1 hover:bg-gray-100 rounded-md">
                <GoShare></GoShare>
                <span className="underline cursor-pointer">Share</span>
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] mb-8">
            <div className="md:w-1/2">
              <img
                className="rounded-l-lg w-full"
                src="https://i.ibb.co/MZkMY4V/room4.webp"
                alt=""
              />
            </div>
            <div className="hidden md:grid grid-cols-2 md:w-1/2 gap-[10px]">
              <img
                className=""
                src="https://i.ibb.co/N6D9vcz/Treehouse.webp"
                alt=""
              />
              <img
                className="rounded-tr-lg"
                src="https://i.ibb.co/prXxK9m/Treehouse.webp"
                alt=""
              />
              <img
                className=""
                src="https://i.ibb.co/MZkMY4V/room4.webp"
                alt=""
              />
              <img
                className="rounded-br-lg"
                src="https://i.ibb.co/MZkMY4V/room4.webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="md:w-2/3  ">
              <div className="flex justify-between items-center ">
                <div>
                  <h2 className="text-2xl font-semibold">
                    Treehouse hosted by Veluvana
                  </h2>
                  <p>
                    <span>2 guests,</span> <span>1 bedroom,</span>{" "}
                    <span>1 bed,</span> <span>5 baths,</span>
                  </p>
                </div>
                <div>
                  <img
                    className="w-14 h-14 rounded-full"
                    src="https://i.ibb.co/MZkMY4V/room4.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="divider"></div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div>
                    <BiDockTop size={25}></BiDockTop>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">
                      Veluvana is a Superhost
                    </h4>
                    <p className="text-sm">
                      Superhosts are experienced, highly rated hosts who are
                      committed to providing great stays for guests.{" "}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <GoLocation size={25}></GoLocation>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Great location</h4>
                    <p className="text-sm">
                      90% of recent guests gave the location a 5-star rating.{" "}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <BiDockTop size={25}></BiDockTop>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">
                      Free cancellation for 48 hours.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
              <p>
                Veluvana is a unique bamboo house with a wonderful view of
                Sidemen Valley, a genuine tropical landscape with Mount Agung
                peak on its back. This getaway spot is a great place to bring
                into reality the dream adventure of the true wanderer. We invite
                you to feel the magnificent vibes of the entire house to escape
                the life that is full of drama into a journey with ultimate
                joys...
              </p>
              <div
                onClick={() => setIsOpen(true)}
                className="cursor-pointer group w-fit flex gap-1 items-center underline underline-offset-2 font-bold"
              >
                <span>Show More </span>
                <AiOutlineArrowRight className="duration-300 mt-2 group-hover:ml-1"></AiOutlineArrowRight>
              </div>
              <PlaceDetails
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              ></PlaceDetails>
              <div className="divider"></div>
            </div>
            <div className="md:w-1/3">
              {/* add a reserve box habibulla vai */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchDetails;
