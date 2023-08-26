import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../../../../LayOut/Container';
import { GoLocation } from 'react-icons/go';
import { BiTime } from 'react-icons/bi';
import { Typewriter } from 'react-simple-typewriter'
import { FaCalendarDay, FaHotel } from 'react-icons/fa';
import { GrCircleInformation } from 'react-icons/gr';

const TravelDealsDetails = () => {
    const { id } = useParams();
    const [travelDealsDetails, setTravelDealsDetails] = useState({});
    const { title,
        destination,
        duration,
        price,
        savings,
        newPrice,
        departureDates,
        totalPeople,
        limitPerBooking,
        conditions,
        picture,
        discountPercentage,
        dealExpires,
        description,
        departureTime,
        optionalActivities,
        itinerary,
        departurePlace,
        additionalInfo,
        hotels,
        includedItems,
        reviews } = travelDealsDetails
    useEffect(() => {
        axios.get(`https://tripsure-server-sayemsaadat0.vercel.app/travelDeals/${id}`)
            .then((res) => {
                setTravelDealsDetails(res.data)
            })
    }, [id])


    const words = [
        `Experience joy and save  ${discountPercentage}%`,
        `Get ${savings?.adult} off per adult`,
        `and ${savings?.child} off per child.`,
    ];

    return (
        <Container>
            <div className='my-4 md:my-20 px-4 md:px-10 leading-8'>
                {/* primary */}
                <h2 className='text-4xl font-bold text-[#7bb9b9]'>{title}</h2>
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
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 w-full'>
                    <div>
                        <img src={picture} alt="" />
                    </div>
                    <div className=' p-4'>
                        {/* percentage */}
                        <div>
                            <h2 className='font-bold'>Grab it Now, Save Big</h2>
                            <h3 className='text-3xl font-bold text-[#7bb9b9]'>

                                <Typewriter words={words}
                                    loop={Infinity}
                                    delaySpeed={2000}
                                    typeSpeed={120}
                                    deleteSpeed={80}
                                    cursor />
                            </h3>
                        </div>

                        {/* price */}
                        <div>
                            <p className='font-bold'>Offer Price </p>
                            <div className='flex items-center gap-3 '>
                                <p className='font-light text-sm'><span className='text-2xl font-bold text-red-500'>{newPrice?.adult}</span> (Adult) </p>
                                <p className='line-through font-light text-sm'> {price?.adult}</p>
                            </div>
                            <div className='flex gap-3 items-center '>
                                <p className='font-light text-sm'> <span className='text-2xl font-bold text-red-500'>{newPrice?.child}</span> (Child)</p>
                                <p className='line-through font-light text-sm'>{price?.child}</p>
                            </div>

                            <div className='mt-5'>
                                <hr />
                                <p>Total Available Spots : {totalPeople}</p>
                                <p>Reservation Limit : {limitPerBooking} spots per person</p>
                            </div>
                            {/*todo Reserve your spot */}
                            <Link to='/contactDetails' className='btn mt-10'>Reserve Now</Link>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {/* departure  */}
                    <div className='mt-5'>
                        <h3 className='text-lg font-semibold'>Departure Details : </h3>

                        <p className='flex gap-2'>Departure  Dates :
                            <span >    {departureDates && departureDates.map((d, index) => (
                                <li key={index}>{d}</li>
                            ))}</span>
                        </p>
                        <div>
                            <p>Departure Time :  {departureTime}</p>
                            <p>Departure Place :  {departurePlace}</p>
                        </div>
                        <hr className='my-2' />
                    </div>

                    {/* Conditions */}
                    <div>
                        <p className='font-bold'>Conditions:</p>
                        {conditions && conditions.map((condition, index) => (
                            <li key={index}>{condition}</li>
                        ))}
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
                <div>
                    <p className='font-bold'>Itinerary</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg::grid-cols-3'>
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

                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {/* hotels */}
                    <div>
                        <p className='font-bold flex items-center gap-2'><FaHotel></FaHotel> Accommodations </p>
                        {hotels?.map((hotel, index) => (
                            <div key={index}>
                                <h2>Title  : {hotel.name}</h2>
                                <p>Type : {hotel.type}</p>
                                <p>Duration of Stay : {hotel.nights} Nights</p>

                                <p className='font-bold'> Amenity  </p>
                                {hotel.amenities.map((amenity, amenityIndex) => (
                                    <li key={amenityIndex}>{amenity}</li>
                                ))}
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
                {/* review */}
                <div>
                    <div className=' p-4'>
                        <p className='font-bold'>Reviews</p>
                        <div className='border rounded-lg p-4'>

                            {/* <img src={reviews?.userImage} alt="df" /> */}
                            {/* <h3>{reviews?.name}</h3> */}

                            <div className='flex'>
                                <div className='w-full'>
                                        <img className='w-16 h-16 rounded-full' src="https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="df" />
                                        {<h3 className='text-xl font-semibold'>Rafin Hossain</h3>}
                                        <p>Ratings :</p>
                                        <h3>overall : {reviews?.ratings?.overall}</h3>
                                        <h3>accommodation : {reviews?.ratings?.accommodation}</h3>
                                        <h3>activities : {reviews?.ratings?.activities}</h3>
                                        <h3>food : {reviews?.ratings?.food}</h3>
                                        <h3>guide : {reviews?.ratings?.guide}</h3>
                                </div>
                                <div>
                                    <p>{reviews?.review}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TravelDealsDetails;





{/* 

toggle see more button

 const [showFullReview, setShowFullReview] = useState(false);

    const toggleShowReview = () => {
        setShowFullReview(!showFullReview);
    };


<h3>
Review :{' '}
{showFullReview ? (
    <>
        {reviews?.review}
        <button className='text-blue-500 btn-link' onClick={toggleShowReview}>Show Less</button>
    </>
) : (
    <>
        {reviews?.review.split(' ').slice(0, 10).join(' ')}...
        <button className='text-blue-500 btn-link' onClick={toggleShowReview}>Show More</button>
    </>
)}
</h3> */}