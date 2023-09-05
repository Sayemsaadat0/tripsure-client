import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccessPage = () => {
    const {id} = useParams();
    return (
        <div>
            <h1 className='mt-20'>Payment Successful your Transaction ID: {id}</h1>
        </div>
    );
};

export default PaymentSuccessPage;