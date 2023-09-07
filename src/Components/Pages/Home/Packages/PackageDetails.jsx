import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../../../../LayOut/Container';
import { FaCalendarDay, FaHotel } from 'react-icons/fa';
import { GrCircleInformation } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';
import { BiTime } from 'react-icons/bi';



const PackageDetails = () => {
    const { id } = useParams();
    const [packageDetails, setPackageDetails] = useState({});

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

                        {/* price */}
                        <div>
                            <p className='font-bold'> Price </p>
                            <p>Cost Per Adult : <span className='text-red-400 font-bold '>{price?.adult}</span></p>
                            <p>Cost Per child : <span className='text-red-400 font-bold '>{price?.child}</span> </p>


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



