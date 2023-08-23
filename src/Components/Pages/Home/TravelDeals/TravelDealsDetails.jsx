import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../../../LayOut/Container';

const TravelDealsDetails = () => {
    const { id } = useParams();
    const [travelDealsDetails, setTravelDealsDetails] = useState({});
    const { title, destination, duration, price, savings, newPrice, departureDates, totalPeople, limitPerBooking, conditions, picture, discountPercentage, dealExpires, details } = travelDealsDetails
    useEffect(() => {
        axios.get(`http://localhost:1000/travelDeals/${id}`)
            .then((res) => {
                setTravelDealsDetails(res.data)
            })
    }, [id])
    return (
        <Container>
            <div className='mt-10 mx-4'>
                <h2 className='text-4xl font-bold'>{title}</h2>
                <p>{destination}</p>
                <p>Duration : {duration}</p>
                <img src={picture} alt="" />
                {/* price */}
                <div>
                    <p>Price For Adult: {price?.adult}</p>
                    <p>Price For child: {price?.child}</p>
                    <p>Price For adult: {savings?.adult}</p>
                    <p>Price For child: {savings?.child}</p>
                    <p>Price For adult: {newPrice?.adult}</p>
                    <p>Price For child: {newPrice?.child}</p>
                    <p>discountPercentage: {discountPercentage}%</p>
                    <p>dealExpires: {dealExpires}</p>
                </div>

                {/* departure time */}
                <div>

                    {departureDates && departureDates.map((d, index) => (
                        <p key={index}>Departure Date: {d}</p>
                    ))}
                </div>
                {/*people */}
                <div>
                    <p>{limitPerBooking}</p>
                    <p>{totalPeople}</p>
                    <p>{dealExpires}</p>
                </div>
                {/*Condition */}
                <div>

                    <p>Conditions:</p>
                    {conditions && conditions.map((condition, index) => (
                        <p key={index}>{condition}</p>
                    ))}

                </div>

                {/* details  */}
                <div>
                    <p>Details:  {details?.description}</p>
                    <p>Details:  {details?.departureTime}</p>
                    <p>Details:  {details?.departurePlace}</p>
                    {/* includes item */}
                    <ul className=''>
                        {details?.includedItems.map((d, index) => (
                            <li className='list-disc' key={index}>{d}</li>

                        ))}
                    </ul>

                    {/* optional activites */}
                    <ul className=''>
                        optional :
                        {details?.optionalActivities.map((d, index) => (
                            <li className='list-disc' key={index}>{d}</li>

                        ))}
                    </ul>
                    {/* hotels */}
                    <div>
                        {details?.accommodationDetails?.hotels.map((d, index) => (
                            <div key={index}>
                                <p>Name: {d.name}</p>
                                <p>Type: {d.type}</p>
                                <p>Amenities:</p>
                                <ul>
                                    {d.amenities.map((amenity, index) => (
                                        <li key={index}>{amenity}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {/* meals */}
                    <div>
                        {/* breakfast  */}
                        <ul>
                            {details?.meals?.breakfast.map((d, index) => (
                                <li key={index}>{d}</li>
                            ))}
                        </ul>
                        {/* lunch  */}
                        <ul>
                            {details?.meals?.lunch.map((d, index) => (
                                <li key={index}>{d}</li>
                            ))}
                        </ul>
                        {/* dinner  */}
                        <ul>
                            {details?.meals?.dinner.map((d, index) => (
                                <li key={index}>{d}</li>
                            ))}
                        </ul>
                    </div>
                    {/* itinerary */}
                    <div>
                        {details?.itinerary?.map((day, dayIndex) => (
                            <div key={dayIndex}>
                                <h3>Day {day.day}</h3>
                                <ul>
                                    {day.activities.map((activity, activityIndex) => (
                                        <li key={activityIndex}>{activity}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>

                    <div>
                        <ul>
                            {details?.additionalInfo.map((d, index) => (
                                <li key={index}>{d}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TravelDealsDetails;





// todo sayem  design this section