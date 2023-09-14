import React from "react";
import Container from "../../../../LayOut/Container";
import Stay from "./EssentialCountry/Stay";
import Eat from "./EssentialCountry/Eat";
import Do from "./EssentialCountry/Do";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

// todo:button and fetch kore data dekhano baki ache

const SearchCountry = () => {
  const [countryDatas, setCountryDatas] = useState([]);
  const { country } = useParams();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_API}/tourCountry/${country}`).then((data) => {
      setCountryDatas(data.data).catch(err => console.log(err))
    });
  
  }, [country]);




  return (
    <div className="my-20">
      <Container>
        <div>
          <h2 className="text-5xl font-bold">
            <span className="text-red-500">Explore</span> {country}
          </h2>
          {/* todo: todo overflow isnt working well */}


          <div className="grid md:grid-cols-3 gap-1 mt-8">
            <div className="md:col-span-2 col-span-3 ">
              <img
                className="w-full hover:bg-white  hover:opacity-80 duration-300"
                src="https://i.ibb.co/54DH6LW/image.png"
                alt=""
              />
            </div>
            <div className="space-y-1 hidden md:block">
              <div className="col-span-1 ">
                <img
                  className="w-full hover:bg-white hover:opacity-80 duration-300"
                  src="https://i.pinimg.com/564x/19/42/f9/1942f9f7422cfd6c564a19b289670c1e.jpg"
                  alt=""
                />
              </div>
              <div className="col-span-1">
                <img
                  className="w-full h-80 hover:bg-white hover:opacity-80 duration-300"
                  src="https://i.pinimg.com/736x/36/2c/11/362c11448cdc31e661cb509252f8f5df.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="space-y-[90px]">
            <Stay countryDatas={countryDatas} country={country } />
            <Eat country={ country} />
            <Do country={ country} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchCountry;
