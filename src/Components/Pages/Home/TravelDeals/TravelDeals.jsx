import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import {  GoStarFill } from 'react-icons/go';
import { FaLocationDot} from 'react-icons/fa6';
import Container from '../../../../LayOut/Container';


const TravelDeals = () => {
  const [travelDeals, setTravelDeals] = useState([]);
  console.log(travelDeals);
  useEffect(() => {
    fetch('https://tripsure-server-sayemsaadat0.vercel.app/travelDeals')
      .then(res => res.json())
      .then(data => setTravelDeals(data));
  }, []);
  return (
    <Container>
      <SectionTitle subText={'Savings Safari'} text={'Hunt for the Hottest Deals'} />
      <section className='overflow-x-auto md:grid  md:grid-cols-3 gap-12 px-5 py-12 '>

        {travelDeals.map((deals, index) => (
          <div className="card card-compact bg-white border shadow-xl overflow-hidden">
            <p className='badge badge-primary absolute right-1 z-10 top-1  p-3'>Save {deals.discountPercentage}%</p>

            <Link to={`/TravelDeals/${deals?._id}`} >
              <figure>
                <img className='transition duration-700 ease-in-out hover:scale-110 rounded-lg h-48 object-cover w-full' src={deals.picture} alt={deals.title} />
              </figure>
            </Link>

            <div className="card-body">
              <Link to={`/TravelDeals/${deals?._id}`} ><h2 className="card-title hover:text-[#79c7ff] duration-500">{deals.title}</h2></Link>
              <div className='flex justify-between w-full'>
                <p className='flex gap-2 '><FaLocationDot className='text-xl'></FaLocationDot> {deals.destination}  </p>
                <p className='text-right'>
                  <span
                    className='text-red-500  font-bold text-lg'>
                    ${deals.newPrice?.adult}</span>/person
                </p>
              </div>
              <div
                className='flex justify-between w-full'>
                <p>Booking End Date : {deals.dealExpires}</p>
                <p
                  className='flex justify-end items-center gap-1'>
                  <GoStarFill className='text-red-500'></GoStarFill>
                  {/* todo add ratings */}
                  4.5(40)
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default TravelDeals;

/* 




*/



/* 

*/