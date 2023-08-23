import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PackageDetails = () => {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState({});

  const { title, destination, country, description, price, departureDates, departureTime, departurePlace, totalPeople, limitPerBooking, includedItems, optionalActivities, conditions, accommodationDetails, meals, itinerary, additionalInfo, picture, ratings, reviews } = packageDetails
  useEffect(() => {
    axios.get(`http://localhost:1000/packages/${id}`)
      .then((response) => {
        setPackageDetails(response.data)
      })
  }, [id])
  return (
    <div>
      <h2 className='text-4xl font-bold'>{title}</h2>
      <p>{destination}</p>
      <p> {additionalInfo} </p>
      <p> {ratings} </p>
      <img src={picture} alt="" />

      <div>
        <p>Price For Adult: {price?.adult}</p>
        <p>Price For child: {price?.child}</p>

      </div>

      {/* departure time */}
      <div>

        {departureDates && departureDates.map((d, index) => (
          <p key={index}>Departure Date: {d}</p>
        ))}

        <p>{limitPerBooking}</p>
        <p>{totalPeople}</p>

        <p>Conditions:</p>
        {conditions && conditions.map((condition, index) => (
          <p key={index}>{condition}</p>
        ))}
        {/* includes item */}
        <p>includedItems:</p>
        {includedItems && includedItems.map((includedItem, index) => (
          <p key={index}>{includedItem}</p>
        ))}
        {/* optionalActivities */}
        <p>optionalActivities:</p>
        {optionalActivities && optionalActivities.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>


      {/* hotels */}
      <div>
        {accommodationDetails?.hotels.map((d, index) => (
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
          {meals?.breakfast.map((d, index) => (
            <li key={index}>{d}</li>
          ))}
        </ul>
        {/* lunch  */}
        <ul>
          {meals?.lunch.map((d, index) => (
            <li key={index}>{d}</li>
          ))}
        </ul>
        {/* dinner  */}
        <ul>
          {meals?.dinner.map((d, index) => (
            <li key={index}>{d}</li>
          ))}
        </ul>
      </div>

      {/* itinerary */}
      <div>
        {itinerary?.map((day, dayIndex) => (
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

      {/* review */}
      <div>
        {reviews?.map((review, index) => (
          <div key={index}>
            <h3>{review.author}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageDetails;


// todo sayem