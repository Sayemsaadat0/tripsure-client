import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../../../LayOut/Container';
import { GoLocation } from 'react-icons/go';
import { BiTime } from 'react-icons/bi';
import { Typewriter } from 'react-simple-typewriter'


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
            <div className='my-4 md:my-10 px-4 md:px-10 leading-8'>
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
                            <button className='btn mt-10'>Reserve Now</button>
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
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                        {itinerary?.map((day, dayIndex) => (
                            <div key={dayIndex}>
                                <h3 className='font-semibold'>Day {day.day}</h3>
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
                        <p className='font-bold'>Accommodations </p>
                        {hotels?.map((hotel, index) => (
                            <div key={index}>
                                <h2>Name : {hotel.name}</h2>
                                <p>Type : {hotel.type}</p>
                                <p>Stay : {hotel.nights}</p>
                                <ul>
                                    {hotel.amenities.map((amenity, amenityIndex) => (
                                        <li key={amenityIndex}>{amenity}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div>
                        {/* Additional Info*/}
                        <div>
                            <p className='font-bold'> Additional Information  </p>
                            {additionalInfo?.map((d, index) => (
                                <li key={index}>{d}</li>
                            ))}
                        </div>
                    </div>
                </div>
                <hr />
                {/* review */}
                <div>
                    <div>
                        <p className='font-bold'>Reviews</p>
                        <div>
                            <img src={reviews?.userImage} alt="df" />
                            <h3>{reviews?.name}</h3>
                            <h3>{reviews?.review}</h3>
                            <h3>{reviews?.ratings?.overall}</h3>
                            <h3>{reviews?.ratings?.accommodation}</h3>
                            <h3>{reviews?.ratings?.activities}</h3>
                            <h3>{reviews?.ratings?.food}</h3>
                            <h3>{reviews?.ratings?.guide}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TravelDealsDetails;





