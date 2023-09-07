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
import bestTrip from "../../../assets/travelpng.png"

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
              </div>
              <div>
               <DoSwiper doPlace={doPlace.slice(1,)}></DoSwiper>
              </div>
            </div>
            <div className="lg:grid lg:my-32 my-20 justify-between gap-2 grid-cols-[300px_minmax(900px,_1fr)_100px]">
              <div className="">
                <h3 className="text-2xl font-bold text-black">Stay</h3>
                <p>
                A mix of the charming, iconic, and modern.
                </p>
              </div>
              <div>
               <CommonSwiper allHotels={allHotels}></CommonSwiper>
              </div>
            </div>
            <div className="lg:grid justify-between gap-2 grid-cols-[300px_minmax(900px,_1fr)_100px]">
              <div className="">
                <h3 className="text-2xl font-bold text-black">Eat</h3>
                <p>
                Quintessential  restaurants, bars, and beyond.
                </p>
                
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
