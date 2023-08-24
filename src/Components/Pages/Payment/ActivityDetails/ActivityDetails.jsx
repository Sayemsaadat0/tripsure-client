import React from "react";
import PaymentPath from "../PaymentPath";
import { useForm } from "react-hook-form";
import { AiOutlineArrowRight } from "react-icons/ai";
import ReviewCard from "../ReviewCard";
import BookInfoCard from "../BookInfoCard";


const ActivityDetails = () => {
    const {register,handleSubmit,formState: { errors },} = useForm();
      const onSubmit = (data) => {
        console.log(data);
      };
  return (
    <div>
      <PaymentPath active={true} />
      <div className="mx-5 md:mx-20 mt-5">
        <span className="flex items-center gap-1 text-sm"> <AiOutlineArrowRight /> Contact Details</span>
        <h1 className="font-semibold text-2xl text-black mt-10">Activity Details</h1>
        <div className="pb-10 flex flex-col lg:flex-row justify-between lg:gap-5">
        <form onClick={handleSubmit(onSubmit)} className="lg:w-[60%] pt-10 mb-10 lg:mb-0">
            <h4 className="font-semibold">Lead Traveler</h4>
          <div className="flex gap-5">
            <div className="form-control mb-4 w-1/2">
              <label className="label">
                <span className="label-text  text-base font-semibold">First Name</span>
              </label>
              <input
                type="text"
                {...register("firstName", { required: true })}
                placeholder="First Name"
                className="input input-bordered"
              />
              {errors.firstName && (
                <span className="text-red-600">First Name Is Required</span>
              )}
            </div>
            <div className="form-control mb-4 w-1/2">
              <label className="label">
                <span className="label-text  text-base font-semibold">Last Name</span>
              </label>
              <input
                type="text"
                {...register("lastName", { required: true })}
                placeholder="Last Name"
                className="input input-bordered"
              />
              {errors.lastName && (
                <span className="text-red-600">Last Name Is Required</span>
              )}
            </div>
          </div>
          <div className="form-control mb-4">
              <label className="label flex-col justify-start items-start">
                <span className="label-text  text-base font-semibold">Pickup Location</span>
                <span className="label-text  text-xs font-medium">The provider offer pickup from select location</span>
              </label>
              <input
                type="text"
                {...register("location", { required: true })}
                placeholder="Pickup Location"
                className="input input-bordered"
              />
              {errors.location && (
                <span className="text-red-600">Pickup Location Is Required</span>
              )}
            </div>
          <div className="text-center">
            <input
              className="btn w-[40%] rounded-full bg-black hover:bg-[#584B9F] text-white"
              type="submit"
              value="Next"
            />
          </div>
        </form>
        <div className="space-y-3 w-4/4 mx-auto">
            <ReviewCard />
            <BookInfoCard />
        </div>
      </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
