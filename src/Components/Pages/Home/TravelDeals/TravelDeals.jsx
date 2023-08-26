import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Container from '../../../../LayOut/Container';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { GoLocation, GoStarFill } from 'react-icons/go';






const TravelDeals = () => {
  const [travelDeals, setTravelDeals] = useState([]);

  useEffect(() => {
    fetch('https://tripsure-server-sayemsaadat0.vercel.app/travelDeals')
      .then(res => res.json())
      .then(data => setTravelDeals(data));
  }, []);

  return (
    <div className='pt-24 px-10 '>
      <Container>
        <div >
          <SectionTitle subText={'Savings Safari'} text={'Hunt for the '} coloredText={'Hottest Deals'} />
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            {travelDeals.map((deals, index) => (
              <SwiperSlide className='lg:p-10  ' key={index}>
                <div className="card card-compact bg-white shadow-md overflow-hidden relative ">
                  <p className='badge badge-primary absolute right-1 z-10 top-3 animate-bounce p-2'>Save {deals.discountPercentage}%</p>

                  <Link to={`/TravelDeals/${deals?._id}`} >
                    <figure><img className='transition duration-700 ease-in-out hover:scale-110 rounded-lg' src={deals.picture} alt={deals.title} /></figure></Link>

                  <div className="card-body">
                    <Link to={`/TravelDeals/${deals?._id}`} ><h2 className="card-title hover:text-[#79c7ff] duration-500">{deals.title}</h2></Link>
                    <p className='flex gap-2'><GoLocation className='text-xl'></GoLocation> {deals.destination}</p>
                    <p>
                      <span
                        className='text-red-500 font-bold text-lg'>
                        {deals.newPrice?.adult}</span>/person
                    </p>


                    <div
                      className='flex justify-between w-full'>
                      <p>Booking End Date : {deals.dealExpires}</p>
                      <p
                        className='flex justify-end items-center gap-1'>
                        <GoStarFill className='text-red-500'></GoStarFill>
                        {deals.reviews?.ratings?.overall} (45)
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default TravelDeals;
