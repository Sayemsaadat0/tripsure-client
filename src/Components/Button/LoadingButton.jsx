import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingButton = () => {
    return (
        <button disabled={true} className=" relative w-full flex justify-center btn-primary">
            <FaSpinner className='animate-spin' size={25}></FaSpinner>
        </button>
    );
};

export default LoadingButton;