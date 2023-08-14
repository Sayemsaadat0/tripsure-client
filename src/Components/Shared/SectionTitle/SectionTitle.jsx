import React from 'react';

const SectionTitle = ({text, subText}) => {
    return (
        <div className='mt-10 mb-10 ms-2 text-left'>
            <p className='font-extralight'>{subText}</p> 
            <hr className='w-1/2'/>
            <h2 className='text-3xl font-semibold'>{text}</h2>
        </div>
    );
};

export default SectionTitle;