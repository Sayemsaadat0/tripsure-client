import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SearchCardDetails = () => {

    const searchCardData = useLoaderData();
    
    return (
        <div className='my-24'>
            <h2>Details { searchCardData.title}</h2>
        </div>
    );
};

export default SearchCardDetails;