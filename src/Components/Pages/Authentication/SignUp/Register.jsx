import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../../Hooks/useAuth';
import LoadingButton from '../../../Button/LoadingButton';
import GoogleLogin from '../../../SocialLogin/GoogleLogin';
import { saveUser } from '../../../../apiCall/users';
import Particle from '../Particle';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';










const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, updateUserProfile, logOut } = useAuth()
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const onSubmit = (data) => {

        setLoading(true)
        const { name, email, password, image, countryName, phone, gender } = data

        const fromData = new FormData()
        fromData.append('image', image[0])
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`
        axios.post(url, fromData)
            .then(imgData => {
                const photoUrl = imgData?.data?.data?.display_url
                createUser(email, password)
                    .then(result => {
                        console.log(result)
                        updateUserProfile(name, photoUrl)
                            .then(() => {
                                reset()
                                Swal.fire({
                                    text: 'Your account has been successfully created.',
                                    icon: 'success',
                                })
                                setLoading(false)
                                logOut()
                                navigate('/login', { replace: true })
                                saveUser(result.user, countryName, phone, gender)
                            })
                            .catch(error => {
                                console.log(error)
                                Swal.fire({
                                    title: 'Error!',
                                    text: `${error.message}`,
                                    icon: 'error',
                                    confirmButtonText: 'error'
                                })

                                setLoading(false)
                            })
                    })
                    .catch(error => {
                        console.log(error)
                        setLoading(false)
                    })
            })
            .catch(error => {
                console.log(error);
                setLoading(false)
            });
    };

    return (
        <div className='authenticationImg'>
            <div className='flex items-center justify-center w-full min-h-screen'>
      
                <div className="p-6  w-96 shadow-sm hover:shadow-sm rounded-lg text-white md:hover:shadow-white duration-700">
                    <div className='flex gap-2'>
                        <img className="w-16 h-16" loading='lazy' src="https://i.ibb.co/ng9Sdrp/Untitled-design-1-unscreen.gif" alt="" />
                        <div>
                            <h2 className="text-2xl   font-bold ">Welcome to Tripsure</h2>
                            <p>Register Your Account</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4 mt-4">
                            <input
                                type="text"
                                name="name"
                                placeholder='Enter Name'
                                {...register('name', { required: 'Name is required' })}
                                className='w-full shadow-sm  shadow-white bg-transparent px-3 py-2 rounded-md focus:outline-none placeholder-text-color'
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm">{errors.name.message}</span>
                            )}
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="country"
                                placeholder='Country Name'
                                {...register('countryName', { required: 'Country Name is required' })}
                                className='w-full shadow-sm  shadow-white bg-transparent px-3 py-2 rounded-md focus:outline-none placeholder-text-color'
                            />
                            {errors.countryName && (
                                <span className="text-red-500 text-sm">{errors.countryName.message}</span>
                            )}
                        </div>
                        <div className='md:flex gap-3 '>
                            <div className="w-full mb-4">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder='Enter Phone'
                                    {...register('phone', { required: 'phone is required' })}
                                    className='w-full shadow-sm  shadow-white bg-transparent px-3 py-2 rounded-md focus:outline-none placeholder-text-color'
                                />
                                {errors.phone && (
                                    <span className="text-red-500 text-sm">{errors.phone.message}</span>
                                )}
                            </div>
                            <div className="w-full mb-4">

                                <select
                                    className='w-full shadow-sm  shadow-white bg-transparent px-3 py-2 rounded-md focus:outline-none placeholder-text-color'
                                    {...register("gender")} >
                                    <option className='text-black ' value="female">female</option>
                                    <option className='text-black ' value="male">male</option>
                                    <option className='text-black ' value="other">other</option>
                                </select>
                            </div>
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
                                className="w-full shadow-sm  shadow-white bg-transparent px-3 py-2 rounded-md focus:outline-none placeholder-text-color"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">{errors.email.message}</span>
                            )}
                        </div>
                        <div className="mb-4 relative">

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
                                className="w-full shadow-sm  shadow-white bg-transparent px-3 py-2 rounded-md focus:outline-none placeholder-text-color" />
                            <span
                                className="w-fit mr-0 cursor-pointer absolute right-2 top-3 "
                                onClick={() => setShow(!show)}>
                                {show ? <BsFillEyeFill></BsFillEyeFill> : <BsFillEyeSlashFill></BsFillEyeSlashFill>}
                            </span>
                            {errors.password && (
                                <span className="text-red-500 text-sm">{errors.password.message}</span>
                            )}
                        </div>
                        <div className="mb-4">

                            <input
                                type="file"
                                name="image"
                                {...register('image', { required: 'Image is required' })}
                                className="w-full border   px-3 py-2 rounded-md focus:outline-none ring-[#6bccd3] focus:ring-2  ring-offset-2 focus:border-blue-500"
                            />
                            {errors.image && (
                                <span className="text-red-500 text-sm">{errors.image.message}</span>
                            )}
                        </div>

                        <div className="mt-4">
                            {
                                loading ? <LoadingButton></LoadingButton>
                                    : <button
                                        type="submit"
                                        className=" w-full flex justify-center shadow-sm py-2 rounded-lg shadow-white hover:scale-105 duration-500">
                                        Register
                                    </button>}
                        </div>
                        <p className=' w-fit '>alredy have an account <Link className='my-link  font-bold relative' to={'/login'}>Login</Link></p>
                        <div className='divider'>
                            <p>or</p>
                        </div>
                        <GoogleLogin></GoogleLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
