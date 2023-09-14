import React from "react";
import PaymentPath from "../PaymentPath";
import ReviewCard from "../ReviewCard";
import BookInfoCard from "../BookInfoCard";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useForm } from "react-hook-form";
import {
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcVisa,
  FaCreditCard,
  FaDiscord,
} from "react-icons/fa";
import { FaMasksTheater } from "react-icons/fa6";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const PaymentDetails = () => {
  const location = useLocation();
  const price = location?.state?.orderDetails?.price?.totalPrice
  const totalPrice = parseFloat(price?.toFixed(2)) 
  console.log(location,totalPrice);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
const stripePromise  = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK)

  return (
    <div>
      <PaymentPath  active={true}></PaymentPath>
      <div className="mx-5 md:mx-20 mt-5">
        <Link to="/activityDetails">
          <span className="flex items-center gap-1 text-sm">
            {" "}
            <AiOutlineArrowRight /> Contact Details
          </span>
        </Link>
        <h1 className="font-semibold text-2xl text-black mt-10">
          Payment Details
        </h1>
        <div className="pb-10 flex flex-col lg:flex-row justify-between lg:gap-5">
          <div className="lg:w-[60%] pt-10 mb-10 lg:mb-0">
            <h4 className="font-semibold mb-2">Pay with:</h4>
            <Elements stripe={stripePromise}>
            <CheckoutForm orderDetails={location?.state?.orderDetails} price={totalPrice}></CheckoutForm>
            </Elements>
          </div>
          <div className="space-y-3 w-4/4 mx-auto">
            <ReviewCard orderDetails={location?.state?.orderDetails} />
            <BookInfoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
