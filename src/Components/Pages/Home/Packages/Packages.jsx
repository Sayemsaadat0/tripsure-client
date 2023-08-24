import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Container from '../../../../LayOut/Container';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch('https://tripsure-server-sayemsaadat0.vercel.app/packages')
      .then(res => res.json())
      .then(data => setPackages(data));
  }, []);

  return (
    <div data-AOS="fade-left" data-aos-duration="3000" data-aos-easing="ease" className='p-10'>
      <Container>
        <div >
        <SectionTitle subText={'Create Memories'} text={'Select Your Ideal'} coloredText={'Tour Package'} />
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
            {packages.map((packageItem, index) => (
              <SwiperSlide className='lg:p-10' key={index}>
                <div className="card card-compact bg-white shadow-2xl relative ">
                  <p className='badge badge-primary absolute right-1 top-3 animate-bounce p-2'>Packages</p>
                  <figure><img className='rounded-lg' src={packageItem.picture} alt={packageItem.title} /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{packageItem.title}</h2>
                    <p>{packageItem.destination}</p>
                    <div>
                      {/* todo habibullah- bhai id diye data aina diyen */}
                      <Link to={`/packageDetails/${packageItem?._id}`} className="btn">View Details</Link>
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

export default Packages;
