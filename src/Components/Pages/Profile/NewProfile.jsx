import React, { useEffect, useState } from "react";
import { AiTwotoneStar, AiOutlineGlobal } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { GrDocumentVerified } from "react-icons/gr";
import useAuth from "../../../Hooks/useAuth";
import { findUserbyEmail } from "../../../apiCall/users";
import { imageUpload } from "../../../api/utilities";
import GuidesReview from "./GuidesReview";
import LazyLoad from "react-lazy-load";
import WeatherForecast from "../Overview/WeatherForecast";
import PageTitle from "../../PageTitle/PageTitle";

const NewProfile = () => {
  const { user } = useAuth();
  const [userDetails, setUserDetails] = useState({});
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const { countryName, phone, name, email, gender, photo, coverPhoto, role } =
    userDetails;

  useEffect(() => {
    if (user) {
      findUserbyEmail(user.email).then((data) => setUserDetails(data));
    }
  }, [user]);

  return (
      <div>
          <PageTitle title="My Profile"/>
      {role === "guide" ? (
        <div className=" flex justify-center px-4 sm:px-0 items-center pt-20 sm:pt-0  relative w-full min-h-screen">
          <div className="max-w-5xl">
            <div className=" flex flex-col lg:flex-row gap-10">
              <div className="w-full">
                <WeatherForecast></WeatherForecast>

                <div className="bg-white rounded-2xl border-4 border-opacity-0 py-7 px-5 w-full h-fit mx-auto shadow-lg gap-5 flex">
                  <div className="text-center w-2/3">
                    <LazyLoad>
                      <img
                        className=" w-32 h-32 rounded-full mx-auto"
                        src={photo}
                        alt=""
                      />
                    </LazyLoad>

                    <p className="text-xl font-semibold my-3">{name}</p>
                    <p className="text-xl font-semibold flex justify-center items-center gap-2">
                      <FaLocationDot></FaLocationDot> Bangladesh
                    </p>
                  </div>
                  <div className="divide-y-2 space-y-2 w-1/3">
                    <div className="w-full">
                      <h2 className="text-[1.625rem] font-bold text-[#222222]">
                        0
                      </h2>
                      <p>reviews</p>
                    </div>
                    <div className="w-full">
                      <h2 className="text-[1.625rem] font-bold text-[#222222] flex items-center">
                        {" "}
                        0<AiTwotoneStar size={17} />
                      </h2>
                      <p>Rating</p>
                    </div>
                    <div className="w-full">
                      <h2 className="text-[1.625rem] font-bold text-[#222222]">
                        0
                      </h2>
                      <p>Years guiding</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl mt-10 border-[2px] border-[#DDDDDD] py-7 px-5 space-y-3 shadow-lg w-full h-fit mx-auto">
                  <p className="text-[#222222] text-[1.375rem] font-semibold">
                    {" "}
                    Confirmed Information
                  </p>
                  <p className="flex items-center gap-3">
                    <GrDocumentVerified />{" "}
                    <span className="text-[1.2rem]">Identity</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <GrDocumentVerified />{" "}
                    <span className="text-[1.2rem]">Email address</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <GrDocumentVerified />{" "}
                    <span className="text-[1.2rem]">Phone Number</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <GrDocumentVerified />{" "}
                    <span className="text-[1.2rem]">
                      Joined on Tripsure : 12/12/2022
                    </span>
                  </p>
                </div>

                {/* <button className='pt-10 btn-link text-black'>Report Profile</button> */}
              </div>
              <div className="lg:w-2/3 ">
                <div>
                  <h2 className="text-2xl font-semibold tracking-widest mb-4">
                    About {name}
                  </h2>
                  <p className="flex items-center mb-4 gap-3">
                    <AiOutlineGlobal size={17} />{" "}
                    <span className="text-[1.2rem]">
                      Speaks English, Bangla,Hindi
                    </span>
                  </p>
                  <p className="text-[1.1rem]">
                    Hello All! We are team under Vacayandco Company Limited
                    registered in Thailand. Our company comes with travel agent
                    license now managing properties and taking private villa
                    rental/ yacht charter trip reservation in beach destination.
                  </p>
                </div>
                <div className="mt-12">
                  <h5 className="text-lg font-semibold">{name}'s Reviws</h5>
                  <GuidesReview></GuidesReview>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center px-4 sm:px-0 items-center pt-20 sm:pt-0  relative w-full min-h-screen">
          <div className="max-w-5xl">
            {/*  <div className=''>
                                <WeatherForecast></WeatherForecast>
                            </div> */}
            <div className=" flex flex-col lg:flex-row gap-10">
              <div className="w-full">
                <div className=" rounded-2xl border-4 py-7 px-5  h-fit  shadow-lg md:flex justify-center text-center md:text-left items-center gap-4">
                  <LazyLoad>
                    <img
                      className="w-40 h-40 rounded-full mx-auto"
                      src={user?.photoURL}
                      alt=""
                    />
                  </LazyLoad>
                  <div>
                    <p className="text-xl font-semibold my-3 ">{name}</p>
                    <p className="text-xl font-semibold flex justify-center items-center gap-2">
                      <FaLocationDot></FaLocationDot> Bangladesh
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl mt-10 border-[2px] border-[#DDDDDD] py-7 px-5 space-y-3 shadow-lg w-full h-fit mx-auto">
                  <p className="font-bold "> information</p>
                  <p>Email : {email}</p>
                  <p>Resideence : Dhaka , Bangladesh</p>
                  <p> Phone Number : 015212221586 </p>
                  <p> BIrth Date : 26/04/1999</p>
                  <p> Gender : Male </p>
                  <p> Joined on Tripsure : 12/12/2022</p>
                </div>
                {/* <button className='pt-10 btn-link text-black'>Report Profile</button> */}
              </div>
              <div className="lg:w-2/3 ">
                <div>
                  <p className="flex items-center mb-4 gap-3">
                    <AiOutlineGlobal size={17} />{" "}
                    <span className="text-[1.2rem]">
                      Speaks English, Bangla,Hindi
                    </span>
                  </p>
                  <h2 className="text-2xl font-semibold tracking-widest mb-4">
                    Bio
                  </h2>
                  <p className="text-[1.1rem]">
                    Hello All! We are team under Vacayandco Company Limited
                    registered in Thailand. Our company comes with travel agent
                    license now managing properties and taking private villa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewProfile;
