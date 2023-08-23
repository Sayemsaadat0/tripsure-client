import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PackageDetails = () => {
  const [allPackagesData,setAllPackagesData] =useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:1000/packages`)
    .then((response)=>{
      setAllPackagesData(response.data)
    })
  },[])
  console.log(allPackagesData);
    return (
        <div>
          {/* todo habibullah bhai - ekhane details asbe  */}
        </div>
    );
};

export default PackageDetails;