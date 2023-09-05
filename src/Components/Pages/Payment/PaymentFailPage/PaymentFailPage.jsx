import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentFailPage = () => {
    const {id} = useParams();
    return (
        <div>
            <h1 className='mt-20'>Payment Failed,your transaction ID was {id}</h1>
        </div>
    );
};

export default PaymentFailPage;