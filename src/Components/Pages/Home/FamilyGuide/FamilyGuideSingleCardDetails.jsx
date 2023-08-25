import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FamilyGuideSingleCardDetails = () => {
    const [familyGuideDetails, setFamilyGuideDetails] = useState({});
    const {id} = useParams();
        useEffect(()=>{
            axios.get(`https://tripsure-server-sayemsaadat0.vercel.app/familyDetails/${id}`)
            .then((res)=>{
                setFamilyGuideDetails(res.data);
            })
        },[id])
    
    console.log('family details',id, familyGuideDetails);
    return (
        <div>
            single card
        </div>
    );
};

export default FamilyGuideSingleCardDetails;