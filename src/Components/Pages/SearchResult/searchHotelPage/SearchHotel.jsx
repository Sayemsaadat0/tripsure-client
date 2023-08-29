import React from 'react';
import HotelBanner from './hotelComponents/HotelBanner';
import SideBar from './hotelComponents/SideBar';

const SearchHotel = () => {
    return (
        <div className='mt-24'>
            <HotelBanner />
            <div>
                <SideBar/>
            </div>
           
        </div>
    );
};

export default SearchHotel;