import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Container from "../../../../LayOut/Container";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import useAuth from "../../../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { GoLocation, GoStarFill } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import SocialMediaShare from "../../../Shared/SocialMediaShare/SocialMediaShare";

const Packages = () => {
  const { logOut, user } = useAuth();
  const [packages, setPackages] = useState([]);
  const [favoritePackageIds, setFavoritePackageIds] = useState([]); // Store favorite package IDs
  const [showSocialMediaIcons, setShowSocialMediaIcons] = useState(false);

  useEffect(() => {
    fetch("https://tripsure-server-sayemsaadat0.vercel.app/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://tripsure-server-sayemsaadat0.vercel.app/getFavoritePackage/${user?.email}/favorite-packages`
        )
        .then((res) => {
          const favoriteIds = res.data.map((item) => item._id);
          setFavoritePackageIds(favoriteIds);
        });
    }
  }, [user]);
// todo : button toggol problem 
  const handleOpenSocialIcon = (packageId) => {
    console.log(packageId)
    let findId = packages.find(p => p._id === packageId)
    console.log(findId)
    setShowSocialMediaIcons(!showSocialMediaIcons)
  };

  return (
    <div className="px-10 pb-10">
      <Container>
        <div>
          <SectionTitle
            subText={"Create Memories"}
            text={"Select Your Ideal"}
            coloredText={"Tour Package"}
          />
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {packages.map((packageItem, index) => {
              const isFavorite = favoritePackageIds.includes(packageItem._id);
              return (
                <SwiperSlide className="lg:p-10" key={index}>
                  <div className="card card-compact bg-white shadow-md  relative h-96 md:h-auto overflow-hidden">
                    <Link to={`/packageDetails/${packageItem?._id}`}>
                      <img
                        className="transition duration-700 ease-in-out hover:scale-110  rounded-lg"
                        src={packageItem?.picture}
                        alt={packageItem.title}
                      />
                    </Link>
                    <button
                      onClick={() => handleAddToFavorite(packageItem?._id)}
                      className="absolute top-2 right-2 p-2  rounded-full bg-white"
                    >
                      {isFavorite ? (
                        <BsSuitHeartFill className="text-lg" />
                      ) : (
                        <BsSuitHeart className="text-lg" />
                      )}
                    </button>
                    <div className="card-body">
                      <h2 className="card-title text-black hover:text-[#79c7ff] duration-500">
                        <Link to={`/packageDetails/${packageItem?._id}`}>
                          {packageItem.title}
                        </Link>
                      </h2>

                      <p className="flex gap-1 items-center">
                        <GoLocation className="text-xl"></GoLocation>{" "}
                        {packageItem.destination}
                      </p>

                      <p className="flex gap-1 items-center">
                        <span className="font-bold text-lg text-red-500">
                          {packageItem.price?.adult}
                        </span>
                        /person
                      </p>

                      <div className="flex">
                        <p className="flex gap-1 items-center">
                          <BiTimeFive className="text-xl"></BiTimeFive> Duration
                          : {packageItem?.duration}
                        </p>

                        <p className="flex gap-1 items-center justify-end">
                          <GoStarFill className=" text-red-500"></GoStarFill>{" "}
                          {packageItem?.reviews?.ratings?.overall} (45)
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={() => handleOpenSocialIcon(packageItem._id)}
                          className={
                            showSocialMediaIcons
                              ? "btn flex justify-between items-center "
                              : " btn"
                          }
                        >
                          <IoIosShareAlt size={22}/>
                          {showSocialMediaIcons && <SocialMediaShare />}
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Packages;
