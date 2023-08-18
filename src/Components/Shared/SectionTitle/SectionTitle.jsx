import React from 'react';
import { BsChatQuoteFill } from 'react-icons/bs';

const SectionTitle = ({ text, subText }) => {
    return (
        <div className='mt-10 mb-10 ms-2 text-center mx-auto'>

            <div >
                <p className='font-extralight'>{subText}</p>
            </div>
            <hr className='w-1/2 mx-auto' />
            <div className='flex justify-center gap-2 mt-2'>
                <h2 className='text-3xl font-semibold'>{text}</h2>
              <BsChatQuoteFill className='text-2xl'></BsChatQuoteFill>
            </div>

        </div>
    );
};

export default SectionTitle;