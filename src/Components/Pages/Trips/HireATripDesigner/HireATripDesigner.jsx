import React from 'react';
import TravelersLoveDesign from './sections/TravelersLoveDesign';
import AllTripDesigners from './sections/AllTripDesigners';

const HireATripDesigner = () => {
    return (
        <div className='h-full'>
            <TravelersLoveDesign />
            <div className='mb-32 '>
            <AllTripDesigners/>
           </div>
        </div>
    );
};

export default HireATripDesigner;