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
  const price = location?.state?.orderDetails?.price?.totalPrice || location?.state?.orderDetails?.daily_rate
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

            {/* <form onClick={handleSubmit}>
              <div className="border-2 p-4 bg-[#F2F2F2] border-black rounded-xl">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span>Credit/Debit Card</span>
                  <FaCcVisa className="text-blue-700"></FaCcVisa>
                  <FaCreditCard className="text-blue-700"></FaCreditCard>
                  <FaCcJcb className="text-orange-500"></FaCcJcb>
                  <FaCcDiscover className="text-green-600"></FaCcDiscover>
                  <FaCcMastercard className="text-red-700"></FaCcMastercard>
                </h2>
                <div className="form-control mb- w-2/3">
                  <label className="label">
                    <span className="label-text  text-base font-semibold">
                      Cardholder Name *
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("cardHolderName", { required: true })}
                    className="input border-black "
                  />
                  {errors.cardHolderName && (
                    <span className="text-red-600">
                      Card holder name is required
                    </span>
                  )}
                </div>
                <div className="form-control mb-2 w-2/3">
                  <label className="label">
                    <span className="label-text  text-base font-semibold">
                      Credit/debit card number *
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("cardHolderName", { required: true })}
                    className="input border-black "
                  />
                  {errors.cardHolderName && (
                    <span className="text-red-600">
                      Card holder name is required
                    </span>
                  )}
                </div>
                <div className="flex gap-4">
                  <div className="form-control mb-2 w-40">
                    <label className="label">
                      <span className="label-text  text-base font-semibold">
                        Expiration date *
                      </span>
                    </label>
                    <input
                      type="date"
                      {...register("cardHolderName", { required: true })}
                      className="input border-black "
                    />
                    {errors.cardHolderName && (
                      <span className="text-red-600">
                        Card holder name is required
                      </span>
                    )}
                  </div>
                  <div className="form-control mb-2 w-40">
                    <label className="label">
                      <span className="label-text  text-base font-semibold">
                        CVC Code *
                      </span>
                    </label>
                    <input
                      type="number"
                      {...register("cardHolderName", { required: true })}
                      className="input border-black "
                    />
                    {errors.cardHolderName && (
                      <span className="text-red-600">
                        Card holder name is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="form-control w-2/3">
                    <h3 className="text-base font-semibold">Country *</h3>
                    <div className="w-2/3">
                      <select className="select w-full select-bordered">
                        <option>Bangladesh</option>
                        <option>India</option>
                        <option>United States</option>
                        <option>Nepal</option>
                        <option>Japan</option>
                        <option>Australia</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-control mb-2 w-40">
                    <label className="label">
                      <span className="label-text  text-base font-semibold">
                        Postal/Zip Code*
                      </span>
                    </label>
                    <input
                      type="number"
                      {...register("cardHolderName", { required: true })}
                      className="input border-black "
                    />
                    {errors.cardHolderName && (
                      <span className="text-red-600">
                        Card holder name is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer flex justify-start gap-2">
                    <input
                      type="checkbox"
                      {...register("receiveSMS")}
                      checked="checked"
                      className="checkbox"
                    />
                    <span className="label-text">
                      Add this card to your account for future use
                    </span>
                  </label>
                </div>
              </div>
              <div className="text-center mt-10">
                <Link to={"/paymentDetails"}>
                  <input
                    className="btn w-[40%] rounded-full bg-black hover:bg-[#584B9F] text-white"
                    type="submit"
                    value="Process Payment"
                  />
                </Link>
              </div>
            </form> */}
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
