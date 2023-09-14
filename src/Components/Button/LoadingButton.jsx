import React from 'react';
import { ImSpinner9 } from 'react-icons/im';
const LoadingButton = () => {
    return (
        <button 
        data-testid="loading-button" 
        disabled={true} 
        className=" relative w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 duration-500">
            <ImSpinner9  className='animate-spin' size={25} data-testid="loading-spinner">
                
            </ImSpinner9>
        </button>
    );
};

export default LoadingButton;