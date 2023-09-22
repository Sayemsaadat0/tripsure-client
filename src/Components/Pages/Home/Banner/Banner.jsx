


import React, { useState, useEffect } from "react";
import Container from '../../../../LayOut/Container';
import CountUp from 'react-countup';
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Banner = () => {

  const [searchData, setSearchData] = useState("")
  const [results, setResults] = useState([])
  const navigate = useNavigate()


  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target.searchText.value
    setSearchData(form)
    console.log("search clicked");
  };

  useEffect(() => {
    if (searchData) {
      fetch(`https://tripsure-server-sayemsaadat0.vercel.app/search?searchTerm=${searchData}`)
        .then(res => res.json())
        .then(data => {
          setResults(data)
        })
    } else {
      setResults([]);
    }
  }, [searchData])
  return (
    <div>
      <div className="relative h-[45rem] bg-cover bg-center">
        <div className="absolute inset-0 flex items-center justify-start bg-black">
          <video className='h-full object-cover mx-auto w-full ' src="Travel.mp4" autoPlay loop muted></video>
          <div className="text-center text-white  bg-opacity-70 w-full rounded-r-lg banner py-12">
            <Container>
              <img className='w-96 mx-auto' src="https://i.ibb.co/PcF17Pp/Travel-1.png" alt="" />
              <form onSubmit={handleSearch}>
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
                    <button type="submit"
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

      <Container>
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="mb-2">
              <p>{result.title}</p>
              {result.type === "country" && <p>This is a country</p>}
              {result.type === "hotel" && <p>This is hotel data</p>}
              {result.type === "restaurant" && <p>This is restaurant</p>}
              {result.type === "area" && <p>This is area</p>}
              {result.type === "resort" && <p>This is resort</p>}
            </div>
          ))
        ) : " "}
      </Container>
    </div>
  );
};

export default Banner;

