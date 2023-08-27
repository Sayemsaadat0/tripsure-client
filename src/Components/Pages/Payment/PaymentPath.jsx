import React from 'react';

const PaymentPath = ({active}) => {
    return (
        <div className='pt-5 md:pt-20 pb-5 md:pb-10 border border-b-2 border-gray-300'>
            <div className='flex flex-col md:flex-row mx-5 md:mx-0 justify-center gap-5 md:gap-20 font-semibold'>
                <p><span className='bg-black text-white rounded-full px-2 mr-1'>1</span> Contact Details</p>
                <p><span className={`${active === true ? 'bg-black text-white rounded-full px-2 mr-1' : 'bg-gray-200 text-black rounded-full px-2 mr-1' }`}>2</span> Activity Details</p>
                <p><span className='bg-gray-200 text-black rounded-full px-2 mr-1'>3</span> Payment Details</p>
            </div>
        </div>
    );
};

export default PaymentPath;