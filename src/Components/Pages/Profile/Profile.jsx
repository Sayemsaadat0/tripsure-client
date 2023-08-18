import React from 'react';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md'
import { AiOutlineCalendar, AiOutlineAppstoreAdd, AiOutlineCamera } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import {BsPencilSquare} from 'react-icons/bs'
import useAuth from '../../../Hooks/useAuth';
import Container from '../../../LayOut/Container';
import ProfileTab from './ProfileTab';

const Profile = () => {
    const { user } = useAuth()
    const tabs = [
        { name: 'Activity feed', id: 1 },
        { name: 'Trips', id: 2 },
        { name: 'Photos', id: 3 },
        { name: 'Reviews', id: 4 },
        { name: 'Forums', id: 5 },
        { name: 'Badges', id: 6 },
        { name: 'Travel map', id: 7 },
    ]

    return (
        <div className='bg-[#f2f2f2] pb-10'>
            <div className='h-[200px] lg:h-[300px] font-medium px-2 bg-[#E0E0E0] flex items-center justify-center gap-2'>
                <MdOutlineAddPhotoAlternate size={20}></MdOutlineAddPhotoAlternate>
                <span>Add cover photo</span>
            </div>
            <Container>
                {/* small device */}
                <div className='lg:hidden p-3 lg:pt-40 bg-white'>
                    <div className='flex gap-2 md:gap-4 mb-5'>
                        <div>
                            <img className='-mt-10 w-20 h-20 md:w-[100px] md:h-[100px] rounded-full border-2 border-[#19a0c9] p-[2px]' src={`${user?.photoURL}`} alt="" />
                        </div>
                        <div>
                            <h2 className='font-medium'>{user?.displayName}</h2>
                            <p className='text-sm sm:text-[16px]'>{user?.email}</p>
                        </div>
                    </div>
                    <div className='flex gap-3 sm:gap-5 mb-5'>
                        <div>
                            <h2 className='font-medium'>Contributions</h2>
                            <p className='font-medium text-xl text-gray-500'>0</p>
                        </div>
                        <div>
                            <h2 className='font-medium'>Followers</h2>
                            <p className='font-medium text-xl text-gray-500'>0</p>
                        </div>
                        <div>
                            <h2 className='font-medium'>Following</h2>
                            <p className='font-medium text-xl text-gray-500'>0</p>
                        </div>
                    </div>
                    <button className='btn btn-outline hover:bg-gray-100 text-gray-800 hover:text-gray-900 w-full btn-sm'>Edit Profile</button>
                    <div className='mt-5 lg:hidden space-y-3'>
                        <p className='flex gap-2 items-center '><ImLocation></ImLocation> <span>Dhaka Division, Bangladesh</span></p>
                        <p className='flex gap-2 items-center '><AiOutlineCalendar></AiOutlineCalendar> <span> Joined in Aug 2023
                        </span></p>
                        <p className='flex gap-2 items-center '><AiOutlineAppstoreAdd></AiOutlineAppstoreAdd> <span> Add a website
                        </span></p>
                        <p className='flex gap-2 items-center '><AiOutlineAppstoreAdd></AiOutlineAppstoreAdd> <span> Write some details about yourself
                        </span></p>
                    </div>
                </div>
                {/* lerge device */}
                <div className='hidden lg:flex  gap-5 p-3 mx-5 bg-white -mt-10 '>
                    <div>
                        <img className='w-[150px] h-[150px] rounded-full border-2 border-[#19a0c9] p-[2px]' src={`${user?.photoURL}`} alt="" />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h2 className='font-medium'>{user?.displayName}</h2>
                            <p>{user?.email}</p>
                        </div>
                        <div className='flex gap-6'>
                            <div>
                                <h2 className='font-medium text-xl'>Contributions</h2>
                                <p className='font-medium text-xl text-gray-500'>0</p>
                            </div>
                            <div>
                                <h2 className='font-medium text-xl'>Followers</h2>
                                <p className='font-medium text-xl text-gray-500'>0</p>
                            </div>
                            <div>
                                <h2 className='font-medium text-xl'>Following</h2>
                                <p className='font-medium text-xl text-gray-500'>0</p>
                            </div>
                        </div>
                    </div>
                    <div className='grow text-right'>
                        <button className='btn btn-outline hover:bg-gray-100 text-gray-800 hover:text-gray-900 max-w-md w-full btn-sm'>Edit Profile</button>
                    </div>
                </div>
                <div className='lg:flex lg:mx-5 gap-5'>
                    <div className='flex flex-col gap-'>
                        <div className='mt-5 p-4 hidden lg:flex flex-col bg-white space-y-3'>
                            <h2 className='text-xl font-bold'>Intro</h2>
                            <p className='flex gap-2 items-center '><ImLocation></ImLocation> <span>Dhaka Division, Bangladesh</span></p>
                            <p className='flex gap-2 items-center '><AiOutlineCalendar></AiOutlineCalendar> <span> Joined in Aug 2023
                            </span></p>
                            <p className='flex gap-2 items-center '><AiOutlineAppstoreAdd></AiOutlineAppstoreAdd> <span> Add a website
                            </span></p>
                            <p className='flex gap-2 items-center '><AiOutlineAppstoreAdd></AiOutlineAppstoreAdd> <span> Write some details about yourself
                            </span></p>
                        </div>
                        <div className='mt-5 p-4 hidden lg:flex flex-col bg-white space-y-3'>
                            <h2 className='text-xl font-bold'>Share your travel advice</h2>
                            <p className='flex gap-2 items-center '><AiOutlineCamera></AiOutlineCamera> <span>Post Photo</span></p>
                            <p className='flex gap-2 items-center '><BsPencilSquare></BsPencilSquare> <span> Write review
                            </span></p>
                        </div>
                    </div>
                    <ProfileTab></ProfileTab>
                </div>
            </Container>
        </div>
    );
};

export default Profile;