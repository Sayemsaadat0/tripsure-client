import React, { useState } from 'react';
import { FaGoogle, FaSpinner } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../../apiCall/users';

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
                saveUser(result.user)
                setLoading(false)
                navigate('/', { replace: true })

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
                loading ? <button disabled={true}
                    className="relative w-full flex justify-center ">
                    <FaSpinner
                        className='animate-spin' size={25}>
                    </FaSpinner>
                </button>
                    : <button onClick={handleGoogleLogin} className=" relative w-full flex justify-center shadow-sm py-2 rounded-lg shadow-white hover:scale-105 duration-500">
                        <FaGoogle size={25}></FaGoogle>
                    </button>
            }
        </>
    );
};

export default GoogleLogin;