import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SearchResultDetails = () => { 
    const datas = useLoaderData() 
    console.log(datas);
    return (
        <div>

        </div>
    );
};

export default SearchResultDetails;