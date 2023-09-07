import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaCircle,
  FaCircleNotch,
  FaClock,
  FaEnvelope,
  FaGlobe,
  FaLaptop,
  FaLocationDot,
  FaPen,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import Container from "../../../LayOut/Container";

const RestaurantAttractionReview = () => {
  const { id } = useParams();
  const [restaurantsDetails, setRestaurantsDetails] = useState({});
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/restaurantAttractionReviews/${id}`)
      .then((data) => {
        setRestaurantsDetails(data.data);
      });
  }, [id]);
  console.log(restaurantsDetails);

  return (
    <Container>
      <div className="mx-4 lg:mx-10">
        <h1 className="text-3xl font-bold my-5 mt-10">
          {restaurantsDetails?.title}
        </h1>
        <div className="flex gap-4 items-center">
          <p>
            <Rating
              placeholderRating={restaurantsDetails?.ratings?.food}
              emptySymbol={
                <FaCircleNotch className="w-4 text-green-600"></FaCircleNotch>
              }
              placeholderSymbol={
                <FaCircle className="w-4 text-green-600"></FaCircle>
              }
              fullSymbol={<FaCircle className="w-4"></FaCircle>}
              readonly
            />
          </p>
          <p>1,448 Visited</p>
          <p>Restaurant in {restaurantsDetails?.address?.city}</p>
        </div>
        <p className="flex gap-2 items-center">
          <FaLocationDot></FaLocationDot>
          {restaurantsDetails?.address?.city}
        </p>
        <div className="flex justify-between">
          <div className="md:flex gap-2 ">
            <Link
              to={restaurantsDetails?.website}
              className="flex gap-2 items-center underline"
            >
              <FaGlobe></FaGlobe>Visit restaurant website
            </Link>
            <Link
              to={`tel:${restaurantsDetails?.phone}`}
              className="flex gap-2 items-center underline"
            >
              <FaPhone></FaPhone>
              {restaurantsDetails?.phone}
            </Link>
            <Link
              to={`mailto:${restaurantsDetails?.email}`}
              className="flex gap-2 items-center underline"
            >
              <FaEnvelope></FaEnvelope>
              {restaurantsDetails?.email}
            </Link>
            <Link
              to={`https://wa.me/${restaurantsDetails?.phone}`}
              className="flex gap-2 items-center underline"
            >
              <FaWhatsapp></FaWhatsapp>
              {restaurantsDetails?.phone}
            </Link>
            <button
              onClick={() => window.my_modal_1.showModal()}
              className="flex gap-2 items-center underline"
            >
              <FaClock></FaClock> Closed now: See all hours
            </button>
            {/* Open the modal using ID.showModal() method */}

            <dialog id="my_modal_1" className="modal">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Hours</h3>
                <div className="divider"></div>
                <p>
                  <span className="font-semibold "> Monday:</span>{" "}
                  {restaurantsDetails?.hours?.monday}
                </p>
                <p>
                  <span className="font-semibold "> Tuesday:</span>{" "}
                  {restaurantsDetails?.hours?.tuesday}
                </p>
                <p>
                  <span className="font-semibold "> Wednesday:</span>{" "}
                  {restaurantsDetails?.hours?.wednesday}
                </p>
                <p>
                  <span className="font-semibold "> Thursday:</span>{" "}
                  {restaurantsDetails?.hours?.thursday}
                </p>
                <p>
                  <span className="font-semibold "> Friday:</span>{" "}
                  {restaurantsDetails?.hours?.friday}
                </p>
                <p>
                  <span className="font-semibold "> Saturday:</span>{" "}
                  {restaurantsDetails?.hours?.saturday}
                </p>
                <p>
                  <span className="font-semibold "> Sunday:</span>{" "}
                  {restaurantsDetails?.hours?.sunday}
                </p>

                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
          </div>
          <Link className="flex gap-2 items-center underline">
            <FaPen></FaPen> Write Reviews
          </Link>
        </div>
        <img
          className="w-full h-60 md:h-72 my-5 lg:h-[28rem] object-bottom rounded-md bg-cover object-cover"
          src={restaurantsDetails?.picture}
          alt=""
        />

        <div className="grid lg:grid-cols-3 gap-4">
          <div className="p-4 bg-[#F2F2F2]">
            <h2 className="text-xl font-semibold pb-4">Ratings and reviews</h2>
            <h4 className="space-x-2">
              <span className="text-3xl font-semibold">{restaurantsDetails?.ratings?.food}</span>
              <Rating
                placeholderRating={restaurantsDetails?.ratings?.food}
                emptySymbol={
                  <FaCircleNotch className="w-4 text-green-600"></FaCircleNotch>
                }
                placeholderSymbol={
                  <FaCircle className="w-4 text-green-600"></FaCircle>
                }
                fullSymbol={<FaCircle className="w-4"></FaCircle>}
                readonly
              />{" "}
              <span>Reviews</span>
            </h4>
            <h4 className="my-3 ">Restaurants in {restaurantsDetails?.address?.city} </h4>
            <h5 className="font-bold">Travelers' Choice 2023</h5>
            <p className="divider"></p>
            <h1 className="text-xl font-semibold">RATINGS</h1>
            <p className="flex justify-between items-center"><span>Food</span><Rating
                placeholderRating={restaurantsDetails?.ratings?.food}
                emptySymbol={
                  <FaCircleNotch className="w-4 text-green-600"></FaCircleNotch>
                }
                placeholderSymbol={
                  <FaCircle className="w-4 text-green-600"></FaCircle>
                }
                fullSymbol={<FaCircle className="w-4"></FaCircle>}
                readonly
              /></p>
            <p className="flex justify-between items-center"><span>Service</span><Rating
                placeholderRating={restaurantsDetails?.ratings?.service}
                emptySymbol={
                  <FaCircleNotch className="w-4 text-green-600"></FaCircleNotch>
                }
                placeholderSymbol={
                  <FaCircle className="w-4 text-green-600"></FaCircle>
                }
                fullSymbol={<FaCircle className="w-4"></FaCircle>}
                readonly
              /></p>
            <p className="flex justify-between items-center"><span>Value</span><Rating
                placeholderRating={restaurantsDetails?.ratings?.atmosphere}
                emptySymbol={
                  <FaCircleNotch className="w-4 text-green-600"></FaCircleNotch>
                }
                placeholderSymbol={
                  <FaCircle className="w-4 text-green-600"></FaCircle>
                }
                fullSymbol={<FaCircle className="w-4"></FaCircle>}
                readonly
              /></p>
          </div>
          <div className="p-4 bg-[#F2F2F2]">
            <h2 className="text-xl font-semibold ">Details</h2>
            <p className="mb-3">{restaurantsDetails?.description}</p>
            <h3 className="font-semibold">Specialties</h3>
            {
                restaurantsDetails?.specialties?.map((item,index)=> <li key={index}>{item}</li>)
            }
            <h4 className="my-3 font-semibold ">Features</h4>
            {
                restaurantsDetails?.features?.map((item,index)=> <li key={index}>{item}</li>)
            }
          </div>
          <div className="p-4 bg-[#F2F2F2]">
            <h2 className="text-xl font-semibold pb-4">Location and contact</h2>
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20220103/pngtree-young-woman-presenting-colorful-world-map-communication-land-beautiful-photo-image_7675206.jpg" alt="" />
           
            <h4 className="my-3 flex items-center gap-2"><FaLocationDot className="w-6"></FaLocationDot> {restaurantsDetails?.address?.street},{restaurantsDetails?.address?.city},{restaurantsDetails?.address?.state},{restaurantsDetails?.address?.country} </h4>
            <Link  to={restaurantsDetails?.website} className="my-3 flex items-center gap-2 underline"><FaLaptop className="w-6"></FaLaptop> Visit website</Link>
            <Link
              to={`tel:${restaurantsDetails?.phone}`}
              className="flex gap-2 items-center underline"
            >
              <FaPhone></FaPhone>
              {restaurantsDetails?.phone}
            </Link>
            
          </div>
          
        </div>
      </div>
    </Container>
  );
};

export default RestaurantAttractionReview;
