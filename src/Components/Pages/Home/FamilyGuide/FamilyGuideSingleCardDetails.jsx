import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FamilyGuideSingleCardDetails = () => {
    const [familyGuideDetails, setFamilyGuideDetails] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:1000/familyDetails/${id}`)
        .then((res)=>{
            setFamilyGuideDetails(res.data);
        })
    },[id])
    console.log(familyGuideDetails);
    return (
        <div>

        </div>
    );
};

export default FamilyGuideSingleCardDetails;