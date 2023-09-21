/* import { Typewriter } from 'react-simple-typewriter';
import Container from '../../../../LayOut/Container';
import CountUp from 'react-countup';


const Banner = () => {
  const words = ['The TripeSure', 'Wanderlust Unleashed', 'Adventure Awaits', 'Cultural Odyssey', "Nature's Paradise", "Luxury Escapades"]





  return (
    <div className="relative h-[45rem] bg-cover bg-center" >

      <div className="absolute inset-0 flex items-center justify-start bg-black">
        <video className='h-full object-cover mx-auto w-full ' src="video.mp4" autoPlay loop muted></video>


        <div className="text-center text-white  bg-opacity-70 w-full rounded-r-lg banner py-16">
          <Container>

            <h1 className="text-3xl md:text-7xl  font-bold mb-2 ">
              <Typewriter
                words={words}
                cursor
                cursorStyle='_'
                loop={Infinity}
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={2000} />
            </h1>
            <p className=" md:w-[50%] mx-auto md:mt-6">
              Unearth a treasure trove brimming with captivating content and dive headfirst into the world of our truly exceptional services.
            </p>
          </Container>

        </div>


        <div className='hidden md:flex justify-around w-full md:w-[80%]  rounded-2xl absolute -bottom-12 left-0 font-bold md:left-32 h-28 text-black bg-[url("https://i.ibb.co/FxFXgFm/Untitled-design-7.png")] bg-no-repeat bg-cover '>
          <div className='h-full flex flex-col justify-center items-center border-b-4 border-[#0184a4]'>
            <h3 className='text-3xl font-semibold '><CountUp start={20} end={220} duration={5} suffix='+' /></h3>
            <p>Destinations</p>
          </div>

          <div className='h-full flex flex-col justify-center items-center border-b-4 border-[#0184a4]'>
            <h3 className='text-3xl font-semibold '><CountUp start={20} end={80} duration={5} suffix='+' /></h3>
            <p>Travel Agencies</p>
          </div>

          <div className='h-full flex flex-col justify-center items-center border-b-4 border-[#0184a4]'>
            <h3 className='text-3xl font-semibold '><CountUp start={10000} end={40000} duration={5} suffix='+' /></h3>
            <p>Satisfied Customer</p>
          </div>

          <div className='h-full flex flex-col justify-center items-center border-b-4 border-[#0184a4]'>
            <h3 className='text-3xl font-semibold '><CountUp start={10000} end={19000} duration={5} suffix='+' /></h3>
            <p>Reviews</p>
          </div>

        </div>
      </div>



    </div>
  );
};

export default Banner; */



import React, { useState, useEffect } from "react";
import Container from '../../../../LayOut/Container';
import CountUp from 'react-countup';
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Banner = () => {

  const handleSearch = async (e) => {
    e.preventDefault();

  };
  return (
    <div className="relative h-[45rem] bg-cover bg-center">
      <div className="absolute inset-0 flex items-center justify-start bg-black">
        <video className='h-full object-cover mx-auto w-full ' src="Travel.mp4" autoPlay loop muted></video>
        <div className="text-center text-white  bg-opacity-70 w-full rounded-r-lg banner py-12">
          <Container>
            <img className='w-96 mx-auto' src="https://i.ibb.co/PcF17Pp/Travel-1.png" alt="" />
            <form >
              <div className="rounded-xl md:rounded-full lg:w-[60%] mx-auto w-full p-2 relative">
                <div>
                  <input
                    
                    
                    type="text"
                    name="searchText"
                    placeholder="All Destinations"
                    className="py-4 pl-10 block w-full rounded-full border-b-2 md:border-none focus:outline-none text-black text-md"
                  />
                </div>
                <div className="w-full flex justify-center md:w-[120px] md:absolute  md:bottom-[14px] md:right-4 ">
                  <button 
                  onClick={handleSearch}
                  className="
                    hover:bg-[#6599b1] 
                    text-white 
                    bg-[#79c7ff] 
                    transition duration-300 px-4 py-2 
                    text-lg 
                    font-semibold 
                    rounded-full 
                    mt-5 
                    flex justify-center items-center gap-2">
                    <BsSearch></BsSearch>
                    Search
                  </button>
                </div>
              </div>
            </form>
          </Container>
        </div>
        <div className='hidden md:flex justify-around w-full md:w-[80%]  rounded-2xl absolute -bottom-12 font-bold md:left-36 h-28 text-black bg-[url("https://i.ibb.co/FxFXgFm/Untitled-design-7.png")] bg-no-repeat bg-cover '>
          <div className='h-full flex flex-col justify-center items-center border-b-4 border-[#0184a4]'>
            <h3 className='text-3xl font-semibold '>
              <CountUp start={20} end={220} duration={5} suffix='+' /></h3>
            <p>Destinations</p>
          </div>
          <div className='h-full flex flex-col justify-center items-center border-b-4 border-[#0184a4]'>
            <h3 className='text-3xl font-semibold '><CountUp start={20} end={80} duration={5} suffix='+' /></h3>
            <p>Travel Agencies</p>
          </div>
          <div className='h-full flex flex-col justify-center items-center border-b-4 border-[#0184a4]'>
            <h3 className='text-3xl font-semibold '><CountUp start={10000} end={40000} duration={5} suffix='+' /></h3>
            <p>Satisfied Customer</p>
          </div>
          <div className='h-full flex flex-col justify-center items-center border-b-4 border-[#0184a4]'>
            <h3 className='text-3xl font-semibold '><CountUp start={10000} end={19000} duration={5} suffix='+' /></h3>
            <p>Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;


/* 
import Container from '../../../../LayOut/Container';
import CountUp from 'react-countup';
import { BsSearch } from "react-icons/bs";


const Banner = () => {
  const words = ['The TripeSure', 'Wanderlust Unleashed', 'Adventure Awaits', 'Cultural Odyssey', "Nature's Paradise", "Luxury Escapades"]

  const handleSearch = (e) => {
   
  };





  return (
    <div className="relative h-[45rem] bg-cover bg-center" >

      <div className="absolute inset-0 flex items-center justify-start bg-black">
        <video className='h-full object-cover mx-auto w-full ' src="Travel.mp4" autoPlay loop muted></video>


        <div className="text-center text-white  bg-opacity-70 w-full rounded-r-lg banner py-12">
          <Container> 

            <img className='w-96 mx-auto' src="https://i.ibb.co/PcF17Pp/Travel-1.png" alt="" />
          <form >
          <div className="rounded-xl md:rounded-full lg:w-[60%] mx-auto w-full p-2 relative">
            <div>
              <input
                type="text"
                name="searchText"
                placeholder="All Destinations"
                className="py-4 pl-10 block w-full rounded-full border-b-2 md:border-none focus:outline-none text-black text-md"
              />
            </div>
            <div className="w-full flex justify-center md:w-[120px] md:absolute  md:bottom-[14px] md:right-4 ">
              <button className="
              hover:bg-[#6599b1] 
              text-white 
              bg-[#79c7ff] 
              transition duration-300 px-4 py-2 
              text-lg 
              font-semibold 
              rounded-full 
              mt-5 
              flex justify-center items-center gap-2">
                <BsSearch></BsSearch>
                Search
              </button>
            </div>
          </div>
        </form>
          </Container>

        </div>


        <div className='hidden md:flex justify-around w-full md:w-[80%]  rounded-2xl absolute -bottom-12 font-bold md:left-36 h-28 text-black bg-[url("https://i.ibb.co/FxFXgFm/Untitled-design-7.png")] bg-no-repeat bg-cover '>
          <div className='h-full flex flex-col justify-center items-center border-b-4 border-[#0184a4]'>
            <h3 className='text-3xl font-semibold '>
              <CountUp start={20} end={220} duration={5} suffix='+' /></h3>
            <p>Destinations</p>
          </div>

          <div className='h-full flex flex-col justify-center items-center border-b-4 border-[#0184a4]'>
            <h3 className='text-3xl font-semibold '><CountUp start={20} end={80} duration={5} suffix='+' /></h3>
            <p>Travel Agencies</p>
          </div>

          <div className='h-full flex flex-col justify-center items-center border-b-4 border-[#0184a4]'>
            <h3 className='text-3xl font-semibold '><CountUp start={10000} end={40000} duration={5} suffix='+' /></h3>
            <p>Satisfied Customer</p>
          </div>

          <div className='h-full flex flex-col justify-center items-center border-b-4 border-[#0184a4]'>
            <h3 className='text-3xl font-semibold '><CountUp start={10000} end={19000} duration={5} suffix='+' /></h3>
            <p>Reviews</p>
          </div>

        </div>
      </div>



    </div>
  );
};

export default Banner; */