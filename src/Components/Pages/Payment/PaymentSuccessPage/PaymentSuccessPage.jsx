import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccessPage = () => {
    const {id} = useParams();
    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <h1 className='mt-24 text-7xl font-bold mx-auto'>Payment Successful</h1>
            <h3 className='mx-auto text-xl mt-10'>Your Transaction ID: <span className='text-green-500'>
            {id}</span></h3>
        </div>
    );
};

export default PaymentSuccessPage;