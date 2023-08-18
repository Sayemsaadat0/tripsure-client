import React, { useState } from 'react';
import { FaFacebook, FaSpinner } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
const FacebookLogin = () => {
    const { facebookLogin } = useAuth()
    const [loading, setLoading] = useState(false)
    const handleFacebookLogin = () => {
        setLoading(true)
        facebookLogin()
            .then(result => {
                console.log(result)
                Swal.fire({
                    title: 'Success!',
                    text: 'Facebook login successful!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                setLoading(false)
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })

                console.log(error)
                setLoading(false)
            })
    }
    return (
        <>
            {
                loading ? <button disabled={true} className=" relative w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 duration-500">
                    <FaSpinner className='animate-spin' size={25}></FaSpinner>
                </button> : <button onClick={handleFacebookLogin} className=" relative w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 duration-500">
                    <FaFacebook size={25}></FaFacebook>
                </button>
            }
        </>
    );
};

export default FacebookLogin;