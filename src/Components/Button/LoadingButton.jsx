import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingButton = () => {
    return (
        <button 
        data-testid="loading-button" 
        disabled={true} 
        className=" relative w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 duration-500">
            <FaSpinner  className='animate-spin' size={25} data-testid="loading-spinner">
                
            </FaSpinner>
        </button>
    );
};

export default LoadingButton;