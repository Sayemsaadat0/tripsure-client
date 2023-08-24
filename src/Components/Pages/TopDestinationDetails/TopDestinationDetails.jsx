import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommonSwiper from "../../CommonSwiper/CommonSwiper";
import axios from "axios";
import DoSwiper from "../../CommonSwiper/DoSwiper";
import RestaurantSwiper from "../../CommonSwiper/RestaurantSwiper";
import ClockLogo from "../../../assets/time-png-6175.png"
import lightLogo from "../../../assets/light.png"
import tripcustome from "../../../assets/tripcustome.png"
import Container from "../../../LayOut/Container";

const TopDestinationDetails = () => {
  const {id} = useParams();
  const [topDestinationDetails, setTopDestinationsDetails] = useState({})
  const [allHotels, setAllHotels] = useState([])
  const [doPlace, setDoPlace] = useState([])
  const [restaurants, setRestaurants] = useState([]);
  const eatWithSwiper = doPlace.slice(1,)


 

  useEffect(()=> {
    axios.get(`https://tripsure-server-sayemsaadat0.vercel.app/top-destinations/${id}`)
    .then((data)=>{
      setTopDestinationsDetails(data.data);
    })
  },[])
  
  useEffect(()=> {
    axios.get(`https://tripsure-server-sayemsaadat0.vercel.app/all-hotels/${topDestinationDetails?.country}`)
    .then((data)=>{
      setAllHotels(data.data);
    })
  },[topDestinationDetails])
  useEffect(()=> {
    axios.get(`https://tripsure-server-sayemsaadat0.vercel.app/tourCountry/${topDestinationDetails?.country}`)
    .then((data)=>{
      setDoPlace(data.data);
    })
  },[topDestinationDetails])
  useEffect(()=> {
    axios.get(`https://tripsure-server-sayemsaadat0.vercel.app/restaurant/${topDestinationDetails?.country}`)
    .then((data)=>{
      setRestaurants(data.data);
    })
  },[topDestinationDetails])
 
  return (
    <Container>
      <div className="lg:mx-10 mx-2">
      <div>
        <h1 className="text-5xl space-x-5 font-bold">{topDestinationDetails?.cardtitle}</h1>
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
            src={topDestinationDetails?.picture}
            alt=""
          />
        </div>
        <div>
          <div className="lg:flex justify-between">
            <div className="lg:w-2/3">
              <h1 className="text-2xl font-bold">About {topDestinationDetails?.cardtitle}</h1>
              <p className="text-xl my-5">
                {topDestinationDetails?.placedetails} Or hop on an ATV for an
                off-roading adventure across the sugary sand dunes. And after
                all that heart-pumping activity, eat your heart out at the
                authentic mezcalerias, low-key beach shacks, and celeb-chef,
                fine-dining spots.
              </p>
            </div>
            <h4>Best of {topDestinationDetails?.placetitle}</h4>
          </div>

          {/* travel advice section design start */}

          <div>
            <h3 className="text-2xl text-black font-bold">Travel Advice</h3>
            <div className="text-center lg:flex grid grid-cols-2 gap-4 my-6  justify-between">
              <Link className="inline-flex p-4 px-8 gap-3 items-center border-2 border-black rounded-3xl">
                <div>
                  <img
                    className="w-14 rounded-full "
                    src={ClockLogo}
                    alt=""
                  />
                </div>
                <h3 className="font-bold">Best Time to Visit</h3>
              </Link>
              <Link className="inline-flex p-4 px-8 gap-3 items-center border-2 border-black rounded-3xl">
                <div>
                  <img
                    className="w-14 rounded-full "
                    src={tripcustome}
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
                    src={lightLogo}
                    alt=""
                  />
                </div>
                <h3 className="font-bold">Travel Trips & Tricks</h3>
              </Link>
            </div>
          </div>
          {/* do section and swiper slider */}
          <div>
            <h3 className="text-2xl font-bold text-black my-8">Essential {topDestinationDetails?.cardtitle}</h3>
            <div className="lg:grid justify-between gap-2 grid-cols-[300px_minmax(900px,_1fr)_100px]">
              <div className="">
                <h3 className="text-2xl font-bold text-black">Do</h3>
                <p>
                  Places to see, ways to wander, and signature experiences that
                  define .
                </p>
                <Link className="underline">See all</Link>
              </div>
              <div>
               <DoSwiper doPlace={doPlace.slice(1,)}></DoSwiper>
              </div>
            </div>
            <div className="lg:grid lg:my-32 my-20 justify-between gap-2 grid-cols-[300px_minmax(900px,_1fr)_100px]">
              <div className="">
                <h3 className="text-2xl font-bold text-black">Stay</h3>
                <p>
                  Places to see, ways to wander, and signature experiences that
                  define .
                </p>
                <Link className="underline">See all</Link>
              </div>
              <div>
               <CommonSwiper allHotels={allHotels}></CommonSwiper>
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
               <RestaurantSwiper restaurant={restaurants}></RestaurantSwiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default TopDestinationDetails;



// https://tripsure-server-sayemsaadat0.vercel.app
