import React from 'react';
import Container from '../../../LayOut/Container';
import { ImLocation } from 'react-icons/im'
import { MdOutlineWatchLater } from 'react-icons/md'
import CountDown from './CountDown';
import MyTrips from './MyTrips';
import WeatherForecast from './WeatherForecast';
import Marquee from 'react-fast-marquee';

const Overview = () => {
    const hotDeals = [
        {
            name: 'Gran Canaria holiday',
            price: 300,
            discount: 30,
            nights: 4,
            endDate: {
                days: 3, hours: 5, minutes: 30
            },
            location: 'Sherpur, bangladesh',
            image: 'https://i.ibb.co/kJNgNsG/santorini-416136-1280.jpg'
        },
        {
            name: 'Madhutila Eco-Park',
            price: 100,
            discount: 8,
            nights: 1,
            endDate: {
                days: 3, hours: 5, minutes: 30
            },
            location: 'Sherpur, bangladesh',
            image: 'https://i.ibb.co/ccCgmqj/modutila2.jpg'
        },
        {
            name: 'Gagni Obokash',
            price: 230,
            discount: 20,
            nights: 7,
            endDate: {
                days: 2, hours: 1, minutes: 14
            },
            location: 'Sherpur, bangladesh',
            image: 'https://i.ibb.co/022DykB/gajni1.jpg'
        }
    ]
    return (
        <div className='bg-[#f6f6f8] min-h-screen'>
            <Container>
                <div className='pt-10 max-w-xl mx-auto'>
                    <Marquee>
                        <h1 className='text-[#F85606]'>I can be a React component, multiple React components, or just some text.</h1>
                    </Marquee>
                </div>
                <div className='mb-10'>
                    <h2 className='text-2xl font-bold py-10 md:pt-14'>Hot Deals</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            hotDeals.map((deal, index) => <div key={index} className="card mx-auto max-w-md w-full bg-base-100 shadow-xl relative">
                                <figure><img className='h-[200px] w-full' src={deal.image} alt="" /></figure>
                                <div className="card-bod ">
                                    <div className='space-y-3 px-4 py-2'>
                                        <h2 className="card-title font-bold">{deal.name}</h2>
                                        <p className='flex gap-2 items-center text-gray-400'><ImLocation></ImLocation> {deal.location}</p>
                                        <p className='text-gray-400'><span className='text-lg  font-medium text-[#F85606]'>${deal.price - (deal.discount / 100) * deal.price}</span> <span className='line-through text-sm font-medium '>${deal.price}</span> <span>/ {deal.nights} nights</span></p>
                                        <div className='flex gap-2 items-center'>
                                            <MdOutlineWatchLater color='F85606'></MdOutlineWatchLater>
                                            <CountDown days={deal.endDate.days} hours={deal.endDate.hours} minutes={deal.endDate.minutes}></CountDown>
                                        </div>
                                    </div>
                                    <hr className='border-[1px]' />
                                    <div className="px-4 py-3 w-full text-center">
                                        <button className="px-4 py-2 mx-auto font-medium rounded border-2 border-[#F85606] hover:bg-[#d93f1e] hover:text-white duration-300 text-[#F85606]">View Details</button>
                                    </div>
                                </div>
                                <span className="inline-flex
   absolute top-4 right-0 
   items-center 
   rounded-l-full 
   bg-[#d93f1e] px-3 py-1 
   text-lg font-medium text-gray-100 
   ring-1 ring-inset ring-yellow-600/20">
                                    {deal.discount}%
                                </span>
                            </div>)
                        }
                    </div>
                </div>
                <div className='pb-10'>
                    <h2 className='text-2xl font-bold py-10 '>Upcomming Trips</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            hotDeals.map((deal, index) => <div key={index} className="card max-w-md w-full bg-base-100 shadow-xl relative">
                                <figure><img className='h-[200px] w-full' src={deal.image} alt="" /></figure>
                                <div className="card-bod ">
                                    <div className='space-y-3 px-4 py-2'>
                                        <h2 className="card-title font-bold">{deal.name}</h2>
                                        <p className='flex gap-2 items-center text-gray-400'><ImLocation></ImLocation> {deal.location}</p>
                                        <span className="inline-flex items-center rounded-full bg-[#d93f1e] px-3 py-1 text-sm font-medium text-gray-100 ring-1 ring-inset ring-yellow-600/20">
                                            Upcomming
                                        </span>
                                        <p className='text-gray-400'>Duration: <span>{deal.nights} nights</span></p>
                                        <div className='flex gap-2 items-center'>
                                            <MdOutlineWatchLater color='F85606'></MdOutlineWatchLater>
                                            <CountDown days={deal.endDate.days} hours={deal.endDate.hours} minutes={deal.endDate.minutes}></CountDown>
                                        </div>
                                    </div>

                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <WeatherForecast></WeatherForecast>
                <MyTrips></MyTrips>

                {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='shadow bg-white rounded-lg p-5 space-y-3 w-full max-w-[350px] h-[250px] mx-auto'>
                        <h2 className='text-xl text-[#dadada] font-medium'>UV Index</h2>
                    </div>
                    <div className='shadow bg-white rounded-lg p-5 space-y-3 w-full max-w-[350px] h-[250px] mx-auto'>
                        <h2 className='text-xl text-[#dadada] font-medium'>Wind Status</h2>
                    </div>
                    <div className='shadow bg-white rounded-lg p-5 space-y-3 w-full max-w-[350px] h-[250px] mx-auto'>
                        <h2 className='text-xl text-[#dadada] font-medium'>Sunrise & Sunset</h2>
                    </div>
                    <div className='shadow bg-white rounded-lg p-5 space-y-3 w-full max-w-[350px] h-[250px] mx-auto'>
                        <h2 className='text-xl text-[#dadada] font-medium'>Humidity</h2>
                    </div>
                    <div className='shadow bg-white rounded-lg p-5 space-y-3 w-full max-w-[350px] h-[250px] mx-auto'>
                        <h2 className='text-xl text-[#dadada] font-medium'>Visibility</h2>
                    </div>
                    <div className='shadow bg-white rounded-lg p-5 space-y-3 w-full max-w-[350px] h-[250px] mx-auto'>
                        <h2 className='text-xl text-[#dadada] font-medium'>Air Quality</h2>
                    </div>

                </div> */}

            </Container>
        </div>
    );
};

export default Overview;