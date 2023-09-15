import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaCircle,
  FaCircleNotch,
  FaSimplybuilt,
  FaUserGroup,
  FaPhone,
  FaLanguage,
  FaClock,
  FaClockRotateLeft,
  FaMinus,
  FaPlus,
} from "react-icons/fa6";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import { DatePicker, Space } from "antd";
import useAuth from "../../../Hooks/useAuth";
const { RangePicker } = DatePicker;

const TourDetails = () => {
  const [tourDetails, setTourDetails] = useState({});
  const [modalForCountPeople, setModalForCountPeople] = useState(false);
  const [adultCount, setAdultCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);
  const { id } = useParams();
  const { user } = useAuth()
  const [unavailableDates, setUnavailableDates] = useState([]);

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  useEffect(() => {
    axios
      .get(`https://tripsure-server.vercel.app/tourDetails/${id}`)
      .then((data) => {
        setTourDetails(data.data);
        setUnavailableDates(data.data?.unavailableSlots)
      });
  }, [id]);
  const {
    placetitle,
    placedetails,
    costperperson,
    conditions,
    awards,
    picture,
    postedby,
    ratings,
    included,
    additionalInfo,
    faq,
    refundprocess,
    price,
  } = tourDetails;
  const handlePeopleForReserve = () => {
    setModalForCountPeople((modalForCountPeople) =>
      setModalForCountPeople(!modalForCountPeople)
    );
  };
  const onChange = (date, dateString) => {
    // dateString);
  };

  const isDateUnavailable = (date) => {
    return unavailableDates.includes(date.format("YYYY-MM-DD"));
  };


  const orderDetails = {
    email: user?.email,
    card: tourDetails,
    selectedDate: selectedDate?.format("YYYY-MM-DD"),
    price: {
      adult: tourDetails?.price?.[0]?.amount * adultCount,
      children: tourDetails?.price?.[1]?.amount * childrenCount,
      infants: tourDetails?.price?.[2]?.amount * infantsCount,
      totalPrice: tourDetails?.price?.[0]?.amount * adultCount + tourDetails?.price?.[1]?.amount * childrenCount + tourDetails?.price?.[2]?.amount * infantsCount

    },
    travelerCount: {
      adult: adultCount,
      children: childrenCount,
      infants: infantsCount
    }
  }
  //

  return (
    <div className="lg:mx-10 mx-4 mt-24">
      <div>
        <h2 className="text-3xl font-semibold tracking-widest underline">{placetitle}</h2>
        {/*    <h1 className="font-semibold flex items-center ">
          <p className=" flex gap-2">
            <p className="text-green-700">
              <Rating
                placeholderRating={ratings}
                emptySymbol={<FaCircleNotch className="w-4"></FaCircleNotch>}
                placeholderSymbol={<FaCircle className="w-4"></FaCircle>}
                fullSymbol={<FaCircle className="w-4"></FaCircle>}
                readonly
              />
            </p>
          </p>{" "}
          <span className="ms-5">9,324 reviews</span>
        </h1> */}
        <div className="my-6">
          <img
            className="w-full h-60 md:h-72 lg:h-[25rem] object-bottom rounded-md bg-cover object-cover"
            src={picture}
            alt=""
          />
        </div>
        <div className="grid lg:grid-cols-2">
          <div>
            <h3 className="text-2xl tracking-widest">About</h3>
            <p>
              {placedetails} Halona Blowhole, the Byodo-In Temple and the
              surfing beaches of the North Shore. Plus, you'll have time to
              explore Haleiwa town.
            </p>
            {price && <p className="my-3">
              from{" "}
              <span className="text-2xl font-semibold">
                ${price[0]?.amount}.00
              </span>{" "}
              per adult
            </p>}
            <p className="underline">Lowest price guarantee</p>{" "}
            <p className="underline">Reserve now & pay later</p>{" "}
            <p className="underline">Free cancellation</p>

            <div className="divider"></div>

            <p className="flex items-center gap-2">
              <FaUserGroup></FaUserGroup>
              {conditions?.agelimitations}
            </p>
            <p className="flex items-center gap-2">
              <FaClockRotateLeft></FaClockRotateLeft>
              {conditions?.duration}
            </p>
            <p className="flex items-center gap-2">
              <FaClock></FaClock>Start time: {conditions?.startTime}
            </p>
            <p className="flex items-center gap-2">
              <FaPhone></FaPhone>Mobile ticket
            </p>
            <p className="flex items-center gap-2">
              <FaLanguage></FaLanguage>
              {conditions?.language}
            </p>

            {/*    <div className="flex gap-2 items-center my-6">
              <img
                className="w-16"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb27p0pyMXikGN60bM3tbL8wwUWuwbb8caN9NTvKYuGyHN2EFb340SPXAcE7hFCm_Bku4&usqp=CAU"
                alt=""
              />
              <div>
                <span className="font-semibold">
                  Travelers’ Choice Best of the Best
                </span>{" "}
                <br />
                <span>2023</span>
              </div>
            </div> */}
            {/* accordion */}
            <div className="collapse collapse-arrow bg-base-200 mt-10">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                What's Includes
              </div>
              <div className="collapse-content">
                {included?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Additional information's
              </div>
              <div className="collapse-content">
                {additionalInfo?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">FAQ</div>
              <div className="collapse-content">
                {faq?.map((item, index) => (
                  <h2 key={index}>
                    <span className="font-bold">
                      Question: {item?.question}
                    </span>{" "}
                    <br /> Answer: {item?.answer}
                  </h2>
                ))}
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Re-Found Process
              </div>
              <div className="collapse-content">
                {refundprocess?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </div>
            </div>
          </div>
          <div className="border-2 h-fit m-6 rounded-2xl">
            {/* revers your slot section */}
            <div className="p-4">
              <h2 className="text-3xl font-bold pb-6">Reserve your spot</h2>
              <div className="flex gap-4 relative">
                <button className="font-bold h-10 border-2 border-black rounded-full">
                  {/* <Space direction="vertical" size={14}>
                    <DatePicker className="rounded-full" onChange={onChange} />
                  </Space> */}
                  <DatePicker
                    onChange={handleDateChange}
                    disabledDate={isDateUnavailable}
                    className=" border-none focus:outline-none rounded-full"
                  />
                  {selectedDate && (
                    <p className="mt-2">
                      Your departure date: {selectedDate.format("YYYY-MM-DD")}
                    </p>
                  )}
                </button>
                <button
                  onClick={handlePeopleForReserve}
                  className="btn btn-outline rounded-full  font-bold"
                >
                  <FaUserGroup className="w-5"></FaUserGroup>
                  <span className="text-xl">
                    {adultCount + childrenCount + infantsCount}
                  </span>
                </button>
                {modalForCountPeople && (
                  <div className="border-2 top-14 bg-white shadow-xl  rounded-2xl p-2 right-4 w-full lg:w-3/4 absolute">
                    <div className="m-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <h1 className="font-bold">Adults</h1>
                          <span>Age 12 - 99</span>
                        </div>
                        <div className="space-x-3">
                          <button
                            disabled={adultCount == 1 ? true : false}
                            onClick={() =>
                              setAdultCount((adultCount) => adultCount - 1)
                            }
                            className="btn btn-sm  bg-black hover:bg-black  rounded-full"
                          >
                            <FaMinus className="w-4 text-white "></FaMinus>
                          </button>
                          <span className="font-bold">{adultCount}</span>
                          <button
                            onClick={() =>
                              setAdultCount((adultCount) => adultCount + 1)
                            }
                            className="btn btn-sm  bg-black hover:bg-black  rounded-full"
                          >
                            <FaPlus className="w-4 text-white "></FaPlus>
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h1 className="font-bold">Children</h1>
                          <span>Age 3 - 11</span>
                        </div>
                        <div className="space-x-3">
                          <button
                            disabled={childrenCount == 0 ? true : false}
                            onClick={() =>
                              setChildrenCount(
                                (childrenCount) => childrenCount - 1
                              )
                            }
                            className="btn btn-sm  bg-black hover:bg-black  rounded-full"
                          >
                            <FaMinus className="w-4 text-white "></FaMinus>
                          </button>
                          <span className="font-bold">{childrenCount}</span>
                          <button
                            onClick={() =>
                              setChildrenCount(
                                (childrenCount) => childrenCount + 1
                              )
                            }
                            className="btn btn-sm  bg-black hover:bg-black  rounded-full"
                          >
                            <FaPlus className="w-4 text-white "></FaPlus>
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h1 className="font-bold">Infants</h1>
                          <span>Age 0 - 2</span>
                        </div>
                        <div className="space-x-3">
                          <button
                            disabled={infantsCount == 0 ? true : false}
                            onClick={() =>
                              setInfantsCount(
                                (infantsCount) => infantsCount - 1
                              )
                            }
                            className="btn btn-sm  bg-black hover:bg-black  rounded-full"
                          >
                            <FaMinus className="w-4 text-white "></FaMinus>
                          </button>
                          <span className="font-bold">{infantsCount}</span>
                          <button
                            onClick={() =>
                              setInfantsCount(
                                (infantsCount) => infantsCount + 1
                              )
                            }
                            className="btn btn-sm  bg-black hover:bg-black  rounded-full"
                          >
                            <FaPlus className="w-4 text-white "></FaPlus>
                          </button>
                        </div>
                      </div>

                      {/*  <div className="flex justify-end">
                        <button className="btn btn-warning rounded-full">
                          Update search
                        </button>
                      </div> */}
                    </div>
                  </div>
                )}
              </div>
              <p className="py-4 text-md">1 option available for 8/17</p>
              <div className="m-4 border-2 space-y-2 p-3 border-black rounded-3xl">
                <p className="text-xl font-bold">{placetitle}</p>
                <p>Pickup included</p>
                <p>
                  {adultCount} Adults x ${price?.[0]?.amount * adultCount}
                </p>
                <p>
                  {childrenCount} Children x ${price?.[1]?.amount * childrenCount}
                </p>
                <p>
                  {infantsCount} Infants x ${price?.[2]?.amount * infantsCount}
                </p>
                <p className="text-xl font-semibold">
                  Total $
                  {price?.[0]?.amount * adultCount +
                    price?.[1]?.amount * childrenCount +
                    price?.[2]?.amount * infantsCount}
                </p>
                <p>(No additional taxes or booking fees)</p>
              </div>
              <div className="flex gap-3 items-center justify-around">
                <Link disabled={selectedDate == null}
                  to={user ? '/contactDetails' : '/login'}
                  state={{ orderDetails: orderDetails }}
                  className="btn rounded-full lg:px-14 btn-warning"
                >
                  Reserve Now
                </Link>
              </div>
              <p className="p-4">
                Not sure? You can cancel this reservation up to 24 hours in
                advance for a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
