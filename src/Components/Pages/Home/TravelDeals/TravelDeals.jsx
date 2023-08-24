import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Container from '../../../../LayOut/Container';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const TravelDeals = () => {
  const [travelDeals, setTravelDeals] = useState([]);

  useEffect(() => {
    fetch('https://tripsure-server-sayemsaadat0.vercel.app/travelDeals')
      .then(res => res.json())
      .then(data => setTravelDeals(data));
  }, []);

  return (
    <div data-AOS="fade-left" data-aos-duration="3000" data-aos-easing="ease">
      <Container>
        <div >
        <SectionTitle subText={'Savings Safari'} text={'Hunt for the '} coloredText={'THottest Deals'} />
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
              <SwiperSlide className='lg:p-10' key={index}>
                <div className="card card-compact bg-white shadow-2xl h-96 relative ">
                  <p className='badge badge-primary absolute right-1 top-3 animate-bounce p-2'>TravelDeals</p>
                  <figure><img className='rounded-lg' src={deals.picture} alt={deals.title} /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{deals.title}</h2>
                    <p>{deals.destination}</p>
                    <div>
                    
                      <Link to={`/TravelDeals/${deals?._id}`} className="btn">View Details</Link>
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
