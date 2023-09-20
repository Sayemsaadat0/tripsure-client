import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../../../../LayOut/Container';
import { FaCalendarDay, FaHotel, FaMinus, FaPlus } from 'react-icons/fa';
import { GrCircleInformation } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';
import { BiTime } from 'react-icons/bi';
import { DatePicker } from 'antd';
import { FaUserGroup } from 'react-icons/fa6';
import useAuth from '../../../../Hooks/useAuth';



const PackageDetails = () => {
  const [modalForCountPeople, setModalForCountPeople] = useState(false);
  const [adultCount, setAdultCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState({});
  const [unavailableDates, setUnavailableDates] = useState([]);
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


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

  const { title,
    destination,
    duration,
    price,
    //todo add departureDates,
    totalPeople,
    limitPerBooking,
    conditions,
    picture,
    dealExpires,
    description,
    departureTime,
    optionalActivities,
    itinerary,
    departurePlace,
    additionalInfo,
    hotels,
    includedItems,
  } = packageDetails
  console.log(packageDetails);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_API}/packages/${id}`)
      .then((response) => {
        setPackageDetails(response.data)
      })
  }, [id])

  const orderDetails = {
    email: user?.email,
    card: packageDetails,
    selectedDate: selectedDate?.format("YYYY-MM-DD"),
    price: {
      adult: packageDetails?.price?.adult * adultCount,
      children: packageDetails?.price?.child * childrenCount,
      totalPrice: packageDetails?.price?.adult * adultCount + packageDetails?.price?.child * childrenCount

    },
    travelerCount: {
      adult: adultCount,
      children: childrenCount,
      infants: infantsCount
    }
  }

  return (
    <Container>
      <div className='md:my-20  leading-8'>
        {/* primary */}
        <h2 className='text-4xl font-bold text-[#89cdff]'>{title}</h2>
        <div className='flex items-center my-3 gap-5 '>
          <p className='flex items-center gap-2 '><GoLocation className='text-xl'></GoLocation> {destination}</p>
          <p className='flex items-center gap-2 '><BiTime className='text-xl'></BiTime> Duration : {duration}</p>
          <p>Booking End: {dealExpires}</p>
        </div>
        {/* about */}
        <div className='my-3'>
          <h4 className='font-bold'>About : </h4>
          <p>{description}</p>
        </div>
        {/* price and section image */}
        <div className='grid grid-cols-1  md:grid-cols-2 md:gap-10 w-full'>
          <div>
            <img className='w-full rounded-xl' src={picture} alt="" />

            <p className='font-bold'>Package Price </p>
            <div className='flex items-center gap-3 '>
              <p className='font-light text-sm'><span className='text-2xl font-bold text-red-500'>${price?.adult}</span> /Adult </p>
            </div>
            <div className='flex gap-3 items-center '>
              <p className='font-light text-sm'> <span className='text-2xl font-bold text-red-500'>${price?.child}</span> /Child</p>
            </div>
            <div className='mt-5'>
              <h3 className='text-lg font-semibold'>Departure Details : </h3>
              <div>
                <p>Departure Time :  {departureTime}</p>
                <p>Departure Place :  {departurePlace}</p>
              </div>
            </div>

             {/* Conditions */}
          <div>
            <p className='font-bold'>Conditions:</p>
            {conditions && conditions.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </div>
   
          </div>

          <div className=' p-4'>

            {/* price */}
            <div className="border-2 h-fit  rounded-2xl">
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
                        Selected date: {selectedDate.format("YYYY-MM-DD")}
                      </p>
                    )}
                  </button>
                  <button
                    onClick={handlePeopleForReserve}
                    className="btn btn-outline rounded-full  font-bold">
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
                              disabled
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
                  <p className="text-xl font-bold">{title}</p>
                  <p>Pickup included</p>
                  <p>
                    {adultCount} Adults x ${price?.adult * adultCount}
                  </p>
                  <p>
                    {childrenCount} Children x ${price?.child * childrenCount}
                  </p>
                  <p className="text-xl font-semibold">
                    Total $
                    {price?.adult * adultCount +
                      price?.child * childrenCount}
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

        {/* items and activies */}
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {/* includes item */}
          <div>
            <p className='font-bold'>Includes Items : </p>
            {includedItems?.map((d, index) => (
              <li className='list-disc' key={index}>{d}</li>

            ))}
          </div>
          {/* optional activites */}
          <div >
            <p className='font-bold'>optional Activities </p>
            {optionalActivities?.map((d, index) => (
              <li className='list-disc' key={index}>{d}</li>
            ))}
          </div>
        </div>
        <hr />

        {/* itinerary */}
        <div className='md:my-10'>
          <p className='font-bold md:my-5'>Itinerary</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg::grid-cols-3 md:my-5'>
            {itinerary?.map((day, dayIndex) => (
              <div key={dayIndex}>
                <h3 className='font-bold flex items-center gap-2'>
                  <FaCalendarDay></FaCalendarDay> Day {day.day}</h3>
                <p>
                  {day.activities.map((activity, activityIndex) => (
                    <li key={activityIndex}>{activity}</li>
                  ))}
                </p>
              </div>
            ))}

          </div>
          <hr />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 md:my-20'>
          {/* hotels */}
          <div>
            <p className='font-bold flex items-center gap-2'><FaHotel></FaHotel> Accommodations </p>
            {hotels?.map((hotel, index) => (
              <div key={index}>
                <h2>Title  : {hotel.name}</h2>
                <p>Type : {hotel.type}</p>
                <p>Duration of Stay : {hotel.nights} Nights</p>
              </div>
            ))}
          </div>
          <div>
            {/* Additional Info*/}
            <div>
              <p className='font-bold list-none flex items-center gap-2'><GrCircleInformation className='text-2xl'></GrCircleInformation> Additional Information  </p>
              {additionalInfo?.map((d, index) => (
                <li className='' key={index}>  {d}</li>
              ))}
            </div>
          </div>
        </div>
        <hr />
      </div>
    </Container>
  );
};

export default PackageDetails;


// todo sayem



