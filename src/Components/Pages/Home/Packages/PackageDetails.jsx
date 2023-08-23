import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PackageDetails = () => {
  const {id} = useParams();
  const [packageDetails,setPackageDetails] =useState({});
  useEffect(()=>{
    axios.get(`http://localhost:1000/packages/${id}`)
    .then((response)=>{
      setPackageDetails(response.data)
    })
  },[id])
  console.log(packageDetails);
    return (
        <div>
          {/* todo habibullah bhai - ekhane details asbe  */}
        </div>
    );
};

export default PackageDetails;