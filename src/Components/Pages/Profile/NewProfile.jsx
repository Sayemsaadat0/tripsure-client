import React, { useEffect, useState } from 'react';
import { AiTwotoneStar, AiOutlineGlobal } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6'
import { GrDocumentVerified } from 'react-icons/gr'
import useAuth from '../../../Hooks/useAuth';
import { findUserbyEmail } from '../../../apiCall/users';
import { imageUpload } from '../../../api/utilities';
import GuidesReview from './GuidesReview';
import LazyLoad from 'react-lazy-load';
import WeatherForecast from '../Overview/WeatherForecast';
import EditUserDataModal from '../../Modal/EditUserDataModal';
import EditGuideDetails from './EditGuideDetails';
import { useParams } from 'react-router-dom';

const NewProfile = () => {
    // const e = useParams()
    // console.log(e)
    const eml = useParams()
    console.log(eml)
    const { user } = useAuth()
    const [userDetails, setUserDetails] = useState({})
    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    const { countryName, phone, name, email, gender, photo, registerDate, role, bio, birthDate, comfortableLanguage } = userDetails
    console.log(userDetails)

    useEffect(() => {
        if (user) {
            findUserbyEmail(user.email).then(data => setUserDetails(data))
        }
    }, [user])

    return (
        <div className='pt-20 mb-20'>
            {
                role === 'guide' ? <div className=' flex justify-center px-4 sm:px-0 items-center pt-20 sm:pt-0  relative w-full min-h-screen'>
                    <div className='max-w-5xl'>
                        <div className='flex justify-between'>
                            <div>
                                <WeatherForecast></WeatherForecast>
                            </div>
                            <div className="">
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className='mb-5 rounded-md border-2 bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'
                                >
                                    Edit Profile
                                </button>
                            </div>

                        </div>
                        <div className=' flex flex-col lg:flex-row gap-10'>
                            <div className='w-full'>


                                <div className='bg-white rounded-2xl border-4 border-opacity-0 py-7 px-5 w-full h-fit mx-auto shadow-lg gap-5 flex flex-col md:flex-row'>
                                    <div className='w-full md:w-2/3'>
                                        <LazyLoad>
                                            <img className=' w-full h-32 mb-2 rounded-md  mx-auto' src={photo} alt="" />
                                        </LazyLoad>
                                        <p className='text-xl text-center font-semibold -mt-2'>{name}</p>
                                        <div className='flex items-center gap-3 justify-center'>
                                            <p className='text-lg font-medium flex justify-center items-center gap-2'><FaLocationDot></FaLocationDot> {countryName},</p>
                                            <p className='text-lg font-medium '>{phone}</p>
                                        </div>
                                    </div>
                                    <div className='md:divide-y-2 space-y-2 w-full md:w-1/3 flex md:flex-col border-t-2 md:border-t-0'>
                                        <div className='w-full'>
                                            <h2 className='text-[1.625rem] font-bold text-[#222222]'>0</h2>
                                            <p>reviews</p>
                                        </div>
                                        <div className='w-full'>
                                            <h2 className='text-[1.625rem] font-bold text-[#222222] flex items-center'> 0<AiTwotoneStar size={17} /></h2>
                                            <p>Rating</p>
                                        </div>
                                        <div className='w-full'>
                                            <h2 className='text-[1.625rem] font-bold text-[#222222]'>0</h2>
                                            <p>Years guiding</p>
                                        </div>
                                    </div>

                                </div>

                                <div className='bg-white rounded-2xl mt-10 border-[2px] border-[#DDDDDD] py-7 px-5 space-y-3 shadow-lg w-full h-fit mx-auto'>
                                    <p className='text-[#222222] text-[1.375rem] font-semibold'> Confirmed  Information</p>
                                    <p className='flex items-center gap-3'><GrDocumentVerified /> <span className='text-[1.2rem]'>Identity</span></p>
                                    <p className='flex items-center gap-3'><GrDocumentVerified /> <span className='text-[1.2rem]'>Email address</span></p>
                                    <p className='flex items-center gap-3'><GrDocumentVerified /> <span className='text-[1.2rem]'>Phone Number</span></p>
                                    <p className='flex items-center gap-3'><GrDocumentVerified /> <span className='text-[1.2rem]'>Joined on Tripsure :  {registerDate}</span></p>
                                </div>

                                {/* <button className='pt-10 btn-link text-black'>Report Profile</button> */}
                            </div>
                            <div className='lg:w-2/3 '>
                                <div>
                                    <h2 className='text-2xl font-semibold tracking-widest mb-4'>About {name}</h2>
                                    <p className='flex items-center mb-4 gap-3 text-[1.2rem]'><AiOutlineGlobal size={17} />
                                            Speaks {
                                                comfortableLanguage?.map(language => <span className='text-[1.2rem]'> {language.value}, </span>)
                                            }
                                        </p>
                                    <p className='text-[1.1rem]'>
                                        {bio}
                                    </p>
                                </div>
                                <div className='mt-12'>
                                    <h5 className='text-lg font-semibold'>{name}'s  Reviws</h5>
                                    <GuidesReview></GuidesReview>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <EditGuideDetails isOpen={isOpen} setIsOpen={setIsOpen}></EditGuideDetails> */}
                    <EditUserDataModal closeModal={closeModal} isOpen={isOpen}></EditUserDataModal>
                </div> :
                    <div className=' flex justify-center px-4 sm:px-0 items-center pt-20 sm:pt-0  relative w-full min-h-screen'>
                        <div className='max-w-5xl'>
                            {/*  <div className=''>
                                <WeatherForecast></WeatherForecast>
                            </div> */}
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className='mb-5 rounded-md border-2 bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'
                                >
                                    Edit Profile
                                </button>
                            </div>

                            <div className=' flex flex-col lg:flex-row gap-10'>
                                <div className='w-full'>

                                    <div className=' rounded-2xl border-4 py-7 px-5  h-fit  shadow-lg md:flex justify-center text-center md:text-left items-center gap-4'>

                                        <LazyLoad>
                                            <img className='w-40 h-40 rounded-full mx-auto' src={user?.photoURL} alt="" />
                                        </LazyLoad>
                                        <div>
                                            <p className='text-xl font-semibold my-3 '>{name}</p>
                                            <p className='text-xl font-semibold flex justify-center items-center gap-2'><FaLocationDot></FaLocationDot> {countryName}</p>
                                        </div>


                                    </div>

                                    <div className='bg-white rounded-2xl mt-10 border-[2px] border-[#DDDDDD] py-7 px-5 space-y-3 shadow-lg w-full h-fit mx-auto'>
                                        <p className='font-bold '> information</p>
                                        <p>Email : {email}</p>
                                        <p>Resideence : Dhaka , Bangladesh</p>
                                        <p> Phone Number : {phone ? phone : 'not available'} </p>
                                        <p> BIrth Date : {birthDate ? birthDate : 'not available'}</p>
                                        <p> Gender : {gender ? gender : 'not available'} </p>
                                        <p> Joined on Tripsure : {registerDate}</p>
                                    </div>
                                    {/* <button className='pt-10 btn-link text-black'>Report Profile</button> */}
                                </div>
                                <div className='lg:w-2/3 '>
                                    <div>
                                        <p className='flex items-center mb-4 gap-3 text-[1.2rem]'><AiOutlineGlobal size={17} />
                                            Speaks {
                                                comfortableLanguage?.map(language => <span className='text-[1.2rem]'> {language.value}, </span>)
                                            }
                                        </p>
                                        <h2 className='text-2xl font-semibold tracking-widest mb-4 text-justify'>Bio</h2>
                                        <p className='text-[1.1rem]'>
                                            {bio}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <EditUserDataModal closeModal={closeModal} isOpen={isOpen}></EditUserDataModal>
                    </div>

            }
        </div>
    );
};

export default NewProfile;









