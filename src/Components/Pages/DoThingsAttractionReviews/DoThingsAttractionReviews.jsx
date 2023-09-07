import React, { useEffect, useState } from "react";
import Container from "../../../LayOut/Container";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Rating from "react-rating";
import { FaCircle, FaCircleNotch } from "react-icons/fa";

const DoThingsAttractionReviews = () => {
  const [doThingsAttractionReviews, setDoThingsAttractionReview] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://tripsure-server-sayemsaadat0.vercel.app/doThingsAttractionReviews/${id}`)
      .then((data) => {
        setDoThingsAttractionReview(data.data);
      });
  }, [id]);
  console.log(doThingsAttractionReviews);
  return (
    <Container>
      <div className="mx-4 lg:mx-10">
        <div>
          <h2 className="text-4xl my-4 font-bold">
            {doThingsAttractionReviews?.placetitle}
          </h2>
          <div className="lg:flex gap-2 items-center">
            <p>
              <Rating
                placeholderRating={doThingsAttractionReviews?.ratings}
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
            <p>{doThingsAttractionReviews?.visitcount} Visited</p>
            <p>Things to do in {doThingsAttractionReviews?.placetitle}</p>
            <p>• {doThingsAttractionReviews?.categoryname}</p>
          </div>
          <h4 className="my-2 space-x-2">Open now<Link className="underline"></Link><span>8:00 AM - 4:45 AM</span></h4>
          <div className="md:grid gap-4 justify-between my-10 grid-cols-[30%_minmax(70%,_1fr)_100px]">
            <div className="shadow-2xl  border rounded-2xl p-6">
              <h1 className="font-bold text-xl my-3">About</h1>
              <p>
                {doThingsAttractionReviews?.placedetails} 
              </p>
              <h3 className="font-bold mt-4">Suggested duration</h3>
              <p>{doThingsAttractionReviews?.conditions?.duration}</p>
              <h2 className="font-semibold mt-2">Suggest edits to improve what we show.</h2>
              <Link className="">Improve this listing</Link>
              <div className="divider"></div>
              <h2 className="font-semibold">Tours & experiences</h2>
              <p>Explore different ways to experience this place.</p>
            </div>
            <div className="w-full">
                <img className="w-full" src={doThingsAttractionReviews?.picture} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DoThingsAttractionReviews;
