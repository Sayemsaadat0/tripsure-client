import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import GoogleLogin from '../../Components/socialLogin/GoogleLogin';
// import FacebookLogin from '../../Components/socialLogin/FacebookLogin';
// import useAuth from '../../Hooks/useAuth';
// import LoadingButton from '../../Components/Button/LoadingButton';
// import ResetPassword from '../../Components/Modal/ResetPassword';
import Swal from 'sweetalert2';
// import { toast } from 'react-toastify';

import loginImg from '../../../../assets/login/login.png'
// import ResetPassword;
import useAuth from '../../../../Hooks/useAuth';
import LoadingButton from '../../../Button/LoadingButton';
import GoogleLogin from '../../../SocialLogin/GoogleLogin';
import FacebookLogin from '../../../SocialLogin/FacebookLogin';
import ResetPassword from '../../../Modal/ResetPassword';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const { signInUser } = useAuth()
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const [show, setShow] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    const onSubmit = (data) => {
        // Handle form submission here, e.g., make an API call to register the user
        console.log(data);
        const { email, password } = data
        setLoading(true)
        signInUser(email, password)
            .then((result) => {
                console.log(result)
                Swal.fire({
                    title: 'Success!',
                    text: 'Your account has been successfully login.',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate(from, { replace: true })
                setLoading(false)

            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })

                setLoading(false)
            })
    };

    return (
        <div style={{ backgroundImage: `url(${loginImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='flex bg-black bg-opacity-60 p-4  items-center justify-center flex-col h-full min-h-[calc(100vh-0px)]'>
                <div className="max-w-lg w-full mx-auto mt-4 border-2 border-[#2d969e] p-4 md:p-8 lg:p-12 text-gray-300 bg-white bg-opacity-80 rounded-lg hover:shadow-lg">
                    <h2 className="text-2xl text-[#2d969e] text-center font-bold mb-4">Please Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                placeholder='Enter Email'
                                {...register('email', {
                                    required: 'Email is required',
                                    /* pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address',
                                    }, */
                                })}
                                className="w-full border text-[#2d969e] border-gray-300 px-3 py-2 rounded-md focus:outline-none ring-[#6bccd3] focus:ring-2 placeholder-[#2d969e] ring-offset-2 focus:border-blue-500"
                            />
                            {/*  {errors.email && (
                            <span className="text-red-500 text-sm">{errors.email.message}</span>
                        )} */}
                        </div>
                        <div className="mb-4">

                            <input
                                type={`${show ? 'text' : 'password'}`}
                                name="password"
                                placeholder='Enter Password'
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters',
                                    },
                                })}
                                className="w-full border text-[#2d969e] border-gray-300 px-3 py-2 rounded-md focus:outline-none ring-[#6bccd3] focus:ring-2 placeholder-[#2d969e] ring-offset-2 focus:border-blue-500"
                            />
                            <span className=' w-fit mr-0 cursor-pointer text-[#2d969e]' onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</span>
                            {errors.password && (
                                <span className="text-red-500 text-sm">{errors.password.message}</span>
                            )}
                        </div>

                        <div className='flex justify-between items-center gap-3 md:gap-0 '>
                            <p className=' w-fit text-[#2d969e]'>New this site? Please <Link className='my-link text-[#2d969e] font-bold relative' to={'/register'}>Register</Link></p>
                            <span onClick={() => setIsOpen(true)} className='my-link cursor-pointer relative text-[#2d969e] font-bold '>Forget Password</span>
                        </div>
                        <div className="mt-4">
                            {
                                loading ? <LoadingButton></LoadingButton>
                                    : <button
                                        type="submit"
                                        className="logout-button"
                                    >
                                        login
                                    </button>
                            }
                        </div>
                        <div className='flex justify-center gap-2 my-2 items-center'>
                            <span className='border-[2px] w-full border-white'></span>
                            <span className='text-white'>or</span>
                            <span className='border-[2px] w-full border-white'></span>
                        </div>
                        <div className='flex justify-center items-center gap-4'>
                            <GoogleLogin></GoogleLogin>
                            <FacebookLogin></FacebookLogin>
                        </div>
                    </form>
                </div>
                <ResetPassword closeModal={closeModal} isOpen={isOpen}></ResetPassword>
            </div>
        </div>
    );
};

export default Login;