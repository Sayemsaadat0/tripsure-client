import React from "react";
import { Link } from "react-router-dom";
import CommonSwiper from "../../CommonSwiper/CommonSwiper";

const TopDestinationDetails = () => {
 
  return (
    <div className="lg:mx-10 mx-2">
      <div>
        <h1 className="text-5xl space-x-5 font-bold">Explore Tulum</h1>
        <div className="text-center mx-auto lg:grid lg:overflow-x-hidden overflow-y-hidden flex lg:grid-cols-4 my-4 gap-2 overflow-scroll  ">
          <button className="btn btn-md btn-outline lg:btn-wide">Hotel</button>
          <button className="btn btn-md btn-outline lg:btn-wide">
            Things To do
          </button>
          <button className="btn btn-md btn-outline lg:btn-wide">
            Trip Advice
          </button>
          <button className="btn btn-md btn-outline lg:btn-wide">
            Trip Advice
          </button>
          <button className="btn btn-md btn-outline lg:btn-wide">
            Trip Advice
          </button>
          <button className="btn btn-md btn-outline lg:btn-wide">
            Trip Advice
          </button>
          <button className="btn btn-md btn-outline lg:btn-wide">
            Trip Advice
          </button>
          <button className="btn btn-md btn-outline lg:btn-wide">
            Trip Advice
          </button>
        </div>
        <div className="my-6">
          <img
            className="w-full h-60 md:h-72 lg:h-[28rem] object-bottom rounded-md bg-cover object-cover"
            src="https://plus.unsplash.com/premium_photo-1683134415500-097cfbf33d7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div>
          <div className="lg:flex justify-between">
            <div className="lg:w-2/3">
              <h1 className="text-2xl font-bold">About Tulum</h1>
              <p className="text-xl my-5">
                Yes, Tulum may well be one of the most Instagrammed spots in
                Mexico, with plenty of smoothie stands and yoga retreats, but
                the Caribbean beach town is so much more. In between dips in the
                cerulean waters, you can hike through dense jungle and explore a
                subterranean river at LabnaHa Eco Park. Or tour the ancient
                Mayan ruins that tower over town. (Tulum was the last city
                inhabited by the indigenous group.) Or hop on an ATV for an
                off-roading adventure across the sugary sand dunes. And after
                all that heart-pumping activity, eat your heart out at the
                authentic mezcalerias, low-key beach shacks, and celeb-chef,
                fine-dining spots.
              </p>
            </div>
            <h4>Tulum Tourism: Best of Tulum</h4>
          </div>

          {/* travel advice section design start */}

          <div>
            <h3 className="text-2xl text-black font-bold">Travel Advice</h3>
            <div className="text-center lg:flex grid grid-cols-2 gap-4 my-6  justify-between">
              <Link className="inline-flex p-4 px-8 gap-3 items-center border-2 border-black rounded-3xl">
                <div>
                  <img
                    className="w-14 rounded-full "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAuTWa_9svFXYKl_R7w5WOuNO1J_OAtcFStg&usqp=CAU"
                    alt=""
                  />
                </div>
                <h3 className="font-bold">Best Time to Visit</h3>
              </Link>
              <Link className="inline-flex p-4 px-8 gap-3 items-center border-2 border-black rounded-3xl">
                <div>
                  <img
                    className="w-14 rounded-full "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKj8BFMfRxojqSibeUdynDLWvd4O6WcnmAdIVQf3rgGzbpzE3bxe6FPiD51LKr0xkhLs&usqp=CAU"
                    alt=""
                  />
                </div>
                <h3 className="font-bold">Local Guides for Travel</h3>
              </Link>
              <Link className="inline-flex p-4 px-8 gap-3 items-center border-2 border-black rounded-3xl">
                <div>
                  <img
                    className="w-14 rounded-full "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAuTWa_9svFXYKl_R7w5WOuNO1J_OAtcFStg&usqp=CAU"
                    alt=""
                  />
                </div>
                <h3 className="font-bold">Best Trip For You</h3>
              </Link>
              <Link className="inline-flex px-8 p-4 gap-3 items-center border-2 border-black rounded-3xl">
                <div>
                  <img
                    className="w-14 rounded-full "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKj8BFMfRxojqSibeUdynDLWvd4O6WcnmAdIVQf3rgGzbpzE3bxe6FPiD51LKr0xkhLs&usqp=CAU"
                    alt=""
                  />
                </div>
                <h3 className="font-bold">Travel Trips & Tricks</h3>
              </Link>
            </div>
          </div>
          {/* do section and swiper slider */}
          <div>
            <h3 className="text-2xl font-bold text-black my-8">Essential Tulum</h3>
            <div className="lg:grid justify-between gap-2 grid-cols-[300px_minmax(900px,_1fr)_100px]">
              <div className="">
                <h3 className="text-2xl font-bold text-black">Do</h3>
                <p>
                  Places to see, ways to wander, and signature experiences that
                  define Tulum.
                </p>
                <Link className="underline">See all</Link>
              </div>
              <div>
               <CommonSwiper></CommonSwiper>
              </div>
            </div>
            <div className="lg:grid lg:my-32 my-20 justify-between gap-2 grid-cols-[300px_minmax(900px,_1fr)_100px]">
              <div className="">
                <h3 className="text-2xl font-bold text-black">Stay</h3>
                <p>
                  Places to see, ways to wander, and signature experiences that
                  define Tulum.
                </p>
                <Link className="underline">See all</Link>
              </div>
              <div>
               <CommonSwiper></CommonSwiper>
              </div>
            </div>
            <div className="lg:grid justify-between gap-2 grid-cols-[300px_minmax(900px,_1fr)_100px]">
              <div className="">
                <h3 className="text-2xl font-bold text-black">Eat</h3>
                <p>
                  Places to see, ways to wander, and signature experiences that
                  define Tulum.
                </p>
                <Link className="underline">See all</Link>
              </div>
              <div>
               <CommonSwiper></CommonSwiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestinationDetails;
