import React, { useState } from 'react';
import { FaGoogle, FaSpinner } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const navigate = useNavigate()
    const { googleLogin } = useAuth()
    const [loading, setLoading] = useState(false)
    const handleGoogleLogin = () => {
        setLoading(true)
        googleLogin()
            .then(result => {
                console.log(result)
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successful!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate('/', {replace: true})
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
                </button>
                    : <button onClick={handleGoogleLogin} className=" relative w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 duration-500">
                        <FaGoogle size={25}></FaGoogle>
                    </button>
            }
        </>
    );
};

export default GoogleLogin;