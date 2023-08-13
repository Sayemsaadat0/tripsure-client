import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const FacebookLogin = () => {
    return (
        <button className=" relative w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 duration-500">
            <FaFacebook size={25}></FaFacebook>
        </button>
    );
};

export default FacebookLogin;