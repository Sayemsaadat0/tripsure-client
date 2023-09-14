import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { FcGoogle} from 'react-icons/fc';
import { ImSpinner9 } from 'react-icons/im';
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
                    className="relative 
                    w-full  flex justify-center py-3 rounded-md   border border-black hover:bg-black hover:text-white duration-500 font-bold">
                    <ImSpinner9
                        className='animate-spin' size={25}>
                    </ImSpinner9>
                </button>
                    : <button onClick={handleGoogleLogin} className=" relative 
                    w-full  flex justify-center py-3 rounded-md   border border-black hover:bg-[#1e2222] gap-4 hover:text-white duration-500 font-bold">
                        <FcGoogle size={25}></FcGoogle> 
                        Sign in with Google 
                    </button>
            }
        </>
    );
};

export default GoogleLogin;


/* 
 */