import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TravelDealsDetails = () => {
    const {id} = useParams();
    const [travelDealsDetails, setTravelDealsDetails] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:1000/travelDeals/${id}`)
        .then((res )=>{
            setTravelDealsDetails(res.data)
        })
    },[id])
    console.log(travelDealsDetails);
    return (
        <div>
            <h1>Travel deals details page</h1>
        </div>
    );
};

export default TravelDealsDetails;