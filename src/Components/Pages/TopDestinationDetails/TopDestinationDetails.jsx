import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import CommonSwiper from "../../CommonSwiper/CommonSwiper";
import axios from "axios";
import DoSwiper from "../../CommonSwiper/DoSwiper";
import RestaurantSwiper from "../../CommonSwiper/RestaurantSwiper";
import ClockLogo from "../../../assets/time-png-6175.png";
import lightLogo from "../../../assets/light.png";
import tripcustome from "../../../assets/tripcustome.png";
import Container from "../../../LayOut/Container";
import LazyLoad from "react-lazy-load";
import bestTrip from "../../../assets/travelpng.png";

const TopDestinationDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [topDestinationDetails, setTopDestinationsDetails] = useState({})
  const [allHotels, setAllHotels] = useState([])
  const [doPlace, setDoPlace] = useState([])
  const [restaurants, setRestaurants] = useState([]);
  const eatWithSwiper = doPlace.slice(1,)

  const location = useLocation()

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_API}/top-destinations/${location.state}`)
      .then((data) => {
        setTopDestinationsDetails(data.data);
      });
  }, []);



  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_API}/all-hotels/${
          topDestinationDetails?.country
        }`
      )
      .then((data) => {
        setAllHotels(data.data);
      });
  }, [topDestinationDetails]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_API}/tourCountry/${
          topDestinationDetails?.country
        }`
      )
      .then((data) => {
        setDoPlace(data.data);
      });
  }, [topDestinationDetails]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_API}/restaurant/${
          topDestinationDetails?.country
        }`
      )
      .then((data) => {
        setRestaurants(data.data);
      });
  }, [topDestinationDetails]);

 
  return (
    <Container>
      <div className="mx-2 mt-20">
        <div>
          <h1 className="text-2xl md:text-5xl underline underline-offset-4 tracking-widest">{topDestinationDetails?.placetitle}</h1>
         
          <div className="my-6">
            <img
              className="w-full 
              h-60 
              lg:h-[40rem] 
            object-bottom
            rounded-md 
            bg-cover 
            object-cover"
              src={topDestinationDetails?.picture}
              alt=""
            />
          </div>

          {/* do section and swiper slider */}
          <div>
            <h3
              className="
              text-2xl 
              tracking-widest underline text-center text-black my-12">
              Essential {topDestinationDetails?.cardtitle} </h3>
            <div className="lg:grid justify-between gap-2 grid-cols-[300px_minmax(900px,_1fr)_100px]">
              <div className="">
                <h3 className="tracking-widest font-bold my-2 text-gray-700">
                  Local Adventures
                </h3>
                <p>
                  Places to see, ways to wander, and signature experiences that
                  define .
                </p>
              </div>
              <div>
                <DoSwiper doPlace={doPlace.slice(1)}></DoSwiper>
              </div>
            </div>
            <div className="lg:grid lg:my-32 my-20 justify-between gap-2 grid-cols-[300px_minmax(900px,_1fr)_100px]">
              <div className="">
                <h3 className="tracking-widest font-bold my-2 text-gray-700">Overnight Options</h3>
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
                <h3 className="tracking-widest font-bold my-2 text-gray-700">Culinary Experiences</h3>
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
    </Container>
  );
};

export default TopDestinationDetails;

// ${import.meta.env.VITE_BACKEND_API}
