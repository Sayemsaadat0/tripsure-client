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
    const currentYear = new Date().getFullYear();
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

        <div className="min-h-screen flex ">
            <div className="w-3/5  bg-black hidden lg:block">
                <video className="relative h-full w-full object-fill" muted autoPlay loop src="signup.mp4"></video>
                <div className="absolute p-5 top-0">
                    <img className="w-40 z-10 " src="https://i.ibb.co/9mX5YKW/logo-6.png" alt="logo" />

                    {/* hello section */}
                    <div className="mt-96 text-white  w-[420px] gap-4 ">
                        <h2
                            className="text-4xl font-bold mb-4">
                            Create Your Account, Enter, and Discover a World of New Experiences.</h2>

                            <p className='text-lg'>Travel isn't just about reaching destinations; it's about discovering yourself along the way and finding the extraordinary in the ordinary.</p>
                            <p>- Unknown</p>
                    </div>
                </div>
                <p className="text-white absolute bottom-4 left-4">@{currentYear} Tripsure Ltd.</p>
            </div>
            {/* form section */}
            <div className="flex bg-gradient-to-tr from-blue-300 to-emerald-100 justify-center w-full min-h-screen items-center px-4">
                <div className=" lg:p-20">
                    <h2 className="text-center text-3xl md:text-4xl lg:text-5xl mb-10 "><span className="text-2xl lg:text-3xl tracking-widest">Join and Explore Fresh Horizons</span> <br /> <span className="font-bold">Sign Up Now</span> </h2>
                    <div >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4 mt-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Enter Name'
                                    {...register('name', { required: 'Name is required' })}
                                    className='w-full  px-3 py-4 border border-black  outline-black rounded-md placeholder-text-color'
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
                                    className='w-full  px-3 py-4 border border-black  outline-black rounded-md placeholder-text-color'
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
                                        className='w-full  px-3 py-4 border border-black  outline-black rounded-md placeholder-text-color'
                                    />
                                    {errors.phone && (
                                        <span className="text-red-500 text-sm">{errors.phone.message}</span>
                                    )}
                                </div>
                                <div className="w-full mb-4">

                                    <select
                                        className='w-full  px-3 py-4 border border-black  outline-black rounded-md placeholder-text-color'
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
                                    })}
                                    className="w-full  px-3 py-4 border border-black  outline-black rounded-md placeholder-text-color"
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
                                    className="w-full  px-3 py-4 border border-black  outline-black rounded-md placeholder-text-color" />
                                <span
                                    className="w-fit mr-0 cursor-pointer absolute right-4 top-5 "
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
                                    className="w-full  px-3 py-4 border border-black  outline-black rounded-md placeholder-text-color"
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
                                            className="w-full flex justify-center bg-[#1e2222] py-4 text-white rounded-md gap-4 my-3">
                                            Sign Up
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
        </div>
    );
};

export default Register;



