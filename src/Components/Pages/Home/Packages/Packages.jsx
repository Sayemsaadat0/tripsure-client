
import React, { useEffect, useState } from 'react';

import Container from '../../../../LayOut/Container';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import useAuth from '../../../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { GoLocation, GoStarFill } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { useAddToFavoriteMutation } from '../../../../Features/favorite/favoriteApi';


const Packages = () => {

  const { user } = useAuth();
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1000/packages')
      .then(res => res.json())
      .then(data => {
        setPackages(data)
      });
  }, []);

  const [setFavorite, { isLoading, isError, data }] = useAddToFavoriteMutation()
  const handleAddToFavorite = (packages) => {
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
      } = packages
      const hotelId = packages._id
      const favoriteItem = {
        dealExpires, destination, discountPercentage, duration, newPrice, picture, price, reviews, savings, title, totalPeople, hotelId, displayName, email
      }
      setFavorite(favoriteItem)
    }
  }
  // console.log(data)

  return (
    <Container>

      <SectionTitle subText={'Create Memories'} text={'Select Your Ideal Tour Package'} />
      <section className='grid overflow-x-auto lg:grid-cols-3 gap-12 px-5 pb-24 pt-12'>

        {packages.map((packageItem, index) => {
          return (
            <div key={index} className="card card-compact bg-white border relative  overflow-hidden">
              <Link to={`/packageDetails/${packageItem?._id}`}>
                <img className='transition duration-700 ease-in-out hover:scale-110  rounded-lg' src={packageItem?.picture} alt={packageItem.title} />
              </Link>
              <button
                onClick={() => handleAddToFavorite(packageItem)}
                className="absolute top-2 right-2 p-2  rounded-full bg-white">
                <BsSuitHeartFill className="text-lg" />
                {/* <BsSuitHeart className="text-lg" /> */}
              </button>
              <div className="card-body">
                <h2 className="card-title text-black hover:text-[#79c7ff] duration-500">
                  <Link to={`/packageDetails/${packageItem?._id}`}>
                    {packageItem.title}
                  </Link>
                </h2>
                <p className='flex gap-1 items-center'><GoLocation className='text-xl'></GoLocation> {packageItem.destination}</p>

                <p className='flex gap-1 items-center'><span className='font-bold text-lg text-red-500'>{packageItem.price?.adult}</span>/person</p>

                <div className='flex'>
                  <p className='flex gap-1 items-center'><BiTimeFive className='text-xl'></BiTimeFive> Duration : {packageItem?.duration}</p>

                  <p className='flex gap-1 items-center justify-end'><GoStarFill className=' text-red-500'></GoStarFill> {packageItem?.reviews?.ratings?.overall} (45)</p>
                </div>
              </div>
            </div>);
        })}
      </section>
    </Container>
  );
};

export default Packages;


