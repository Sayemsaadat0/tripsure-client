import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import GoogleLogin from '../../SocialLogin/GoogleLogin';
import FacebookLogin from '../../SocialLogin/FacebookLogin';
import LoadingButton from '../../Button/LoadingButton';
import signupImg from '../../../assets/login/signup.png'
const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, updateUserProfile } = useAuth()
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)

    const onSubmit = (data) => {
        // Handle form submission here, e.g., make an API call to register the user
        console.log(data);
        const { name, email, password, image } = data
        const fromData = new FormData()
        fromData.append('image', image[0])
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`
        axios.post(url, fromData)
            .then(imgData => {
                setLoading(true)
                console.log(imgData.data.data.display_url);
                const photoUrl = imgData?.data?.data?.display_url
                createUser(email, password)
                    .then(result => {
                        console.log(result)
                        updateUserProfile(name, photoUrl)
                            .then(() => {
                                setLoading(false)
                                reset()
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Your account has been successfully created.',
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                                })

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
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error);
                setLoading(false)
            });
    };

    return (
        <div style={{ backgroundImage: `url(https://i.ibb.co/rxYf1Nf/endgaem-register.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className=' flex bg-black bg-opacity-60 p-4 items-center justify-center flex-col h-full min-h-[calc(100vh)]'>
                <div className="max-w-lg w-full mx-auto mt-4 border-2 border-[#2d969e] p-4 md:p-8 lg:p-12 text-gray-300 bg-white bg-opacity-60 hover:bg-opacity-70 duration-500 rounded-lg hover:shadow-lg">
                    <h2 className="text-2xl text-[#2d969e] text-center font-bold mb-4">Please Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">

                            <input
                                type="text"
                                name="name"
                                placeholder='Enter Name'
                                {...register('name', { required: 'Name is required' })}
                                className='w-full border text-[#2d969e] border-gray-300 px-3 py-2 rounded-md focus:outline-none ring-[#6bccd3] focus:ring-2 placeholder-[#2d969e] ring-offset-2 focus:border-blue-500'
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm">{errors.name.message}</span>
                            )}
                        </div>
                        <div className="mb-4">

                            <input
                                type="email"
                                name="email"
                                placeholder='Enter Email'
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                                className="w-full border text-[#2d969e] border-gray-300 px-3 py-2 rounded-md focus:outline-none ring-[#6bccd3] focus:ring-2 placeholder-[#2d969e] ring-offset-2 focus:border-blue-500"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">{errors.email.message}</span>
                            )}
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
                        <div className="mb-4">

                            <input
                                type="file"
                                name="image"
                                {...register('image', { required: 'Image is required' })}
                                className="w-full border text-[#2d969e] border-[#2d969e] px-3 py-2 rounded-md focus:outline-none ring-[#6bccd3] focus:ring-2 placeholder-[#2d969e] ring-offset-2 focus:border-blue-500"
                            />
                            {errors.image && (
                                <span className="text-red-500 text-sm">{errors.image.message}</span>
                            )}
                        </div>
                        <p className=' w-fit text-[#2d969e]'>alredy have an account <Link className='my-link text-[#2d969e] font-bold relative' to={'/login'}>Login</Link></p>
                        <div className="mt-4">
                            {
                                loading ? <LoadingButton></LoadingButton>
                                    : <button
                                        type="submit"
                                        className="logout-button "
                                    >
                                        Register
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
            </div>
        </div>
    );
};

export default Register;
