import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { GoLocation, GoStarFill } from 'react-icons/go';
import { BsSuitHeart } from 'react-icons/bs'
import Container from '../../../../LayOut/Container';
import { useAddToFavoriteMutation, useGetFavoriteItemsQuery } from '../../../../Features/favorite/favoriteApi';
import useAuth from '../../../../Hooks/useAuth';
import LazyLoad from 'react-lazy-load';
import Swal from 'sweetalert2';
import { Swiper, SwiperSlide } from 'swiper/react';

const TravelDeals = () => {
  const [travelDeals, setTravelDeals] = useState([]);
  const { user } = useAuth()
  
  useEffect(() => {
    fetch('https://tripsure-server-sayemsaadat0.vercel.app/travelDeals')
      .then(res => res.json())
      .then(data => setTravelDeals(data));
  }, []);

  const [setFavorite, { isLoading, isError, data }] = useAddToFavoriteMutation()
  const { data: favoriteItems, refetch } = useGetFavoriteItemsQuery()

  const handleAddToFavorite = (deals) => {
    if (user) {
      const { displayName, email } = user
      const {
        dealExpires,
        destination,
        discountPercentage,
        duration,
        newPrice,
        picture,
        price,
        reviews,
        savings,
        title,
        totalPeople,
      } = deals

      const id = deals._id
      const favoriteItem = {
        dealExpires, destination, discountPercentage, duration, newPrice, picture, price, reviews, savings, title, totalPeople, id, displayName, email
      }
      
      setFavorite(favoriteItem)  
      
      Swal.fire(
        'Added to Favorite',
        ' ',
        'success'
      )
    }
  }

  return (
    <Container>


      <SectionTitle subText={'Savings Safari'} text={'Hunt for the Hottest Deals'} />

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
        className="mySwiper"
      >
        {travelDeals.map((deals, index) => (
          <SwiperSlide key={index}>
            <div className="card card-compact bg-base-100 border w-full overflow-hidden">
              <button
                onClick={() => handleAddToFavorite(deals)}
                className={`absolute left-1 z-10 top-3 p-2 rounded-full bg-white`}
              >
                <BsSuitHeart className="text-lg" />
              </button>
              <p className='badge badge-primary absolute right-1 z-10 top-3 animate-bounce p-3'>
                Save {deals.discountPercentage}%
              </p>

              <Link to={`/TravelDeals/${deals?._id}`} >
                <figure>
                  <LazyLoad width={'100%'}>
                    <img className='transition duration-700 ease-in-out hover:scale-110 rounded-lg h-48 object-cover w-full' src={deals.picture} alt={deals.title} />
                  </LazyLoad>
                </figure>
              </Link>

              <div className="card-body">
                <Link to={`/TravelDeals/${deals?._id}`} ><h2 className="card-title hover:text-[#79c7ff] duration-500">{deals.title}</h2></Link>
                <div className='flex justify-between w-full'>
                  <p className='flex gap-2 '><GoLocation className='text-xl'></GoLocation> {deals.destination}  </p>
                  <p className='text-right'>
                    <span
                      className='text-red-500  font-bold text-lg'>
                      ${deals.newPrice?.adult}</span>/person
                  </p>
                </div>
                <div className='flex justify-between w-full'>
                  <p>Booking End Date : {deals.dealExpires}</p>
                  <p
                    className='flex justify-end items-center gap-1'>
                    <GoStarFill className='text-red-500'></GoStarFill>
                    4.5(40)
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default TravelDeals;
