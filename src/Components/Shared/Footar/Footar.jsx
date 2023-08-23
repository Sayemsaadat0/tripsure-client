import React from 'react';
import Container from '../../../LayOut/Container';
import logo from '../../../assets/logo.png'
import { MdOutlineEmail } from 'react-icons/md'
import { CiMobile4, CiYoutube } from 'react-icons/ci'
import { SlLocationPin, SlClock } from 'react-icons/sl'
import { FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import useAOSInit from '../../../Hooks/useAOSInit';
const Footar = () => { 
    useAOSInit()
    const currentYear = new Date().getFullYear()
    return (
        <div>
            <footer className="bg-black text-white">
                <Container>
                    <div className="p-4 mx-auto justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8 md:py-12 gap-8">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-xl font-semibold mb-2">About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam purus a ultrices.</p>
                            <img className='mt-4 w-full max-w-[200px]' src={"https://i.ibb.co/F6hSztb/2.png"} alt="" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Contact</h2>
                            <div className='flex items-center gap-4 mb-2'>
                                <MdOutlineEmail size={25}></MdOutlineEmail>
                                <p className='text-lg'>info@example5com</p>
                            </div>
                            <div className='flex items-center gap-4 mb-2'>
                                <CiMobile4 size={25}></CiMobile4>
                                <p className='text-lg'>+1 (123) 456-7890</p>
                            </div>
                            <div className='flex items-center gap-4 mb-2'>
                                <SlLocationPin size={25}></SlLocationPin>
                                <p className='text-lg'>London, 51 Street, 43</p>
                            </div>
                            <div className='flex items-center gap-4 mb-2'>
                                <SlClock size={25}></SlClock>
                                <p className='text-lg'>Mon - Sat 8.00 - 18.00</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Recent Trips</h2>
                            <div className='grid grid-cols-3 gap-4 '>
                                <img className='h-full w-full rounded-lg' src='https://mobirise.com/extensions/travelm4/assets/images/021.jpg' alt="" />
                                <img className='h-full w-full rounded-lg' src='https://mobirise.com/extensions/travelm4/assets/images/010.jpg' alt="" />
                                <img className='h-full w-full rounded-lg' src='https://mobirise.com/extensions/travelm4/assets/images/032.jpg' alt="" />
                                <img className='h-full w-full rounded-lg' src='https://mobirise.com/extensions/travelm4/assets/images/043.jpg' alt="" />
                                <img className='h-full w-full rounded-lg' src='https://mobirise.com/extensions/travelm4/assets/images/054.jpg' alt="" />
                                <img className='h-full w-full rounded-lg' src='https://mobirise.com/extensions/travelm4/assets/images/065.jpg' alt="" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
                            <div className="flex space-x-4">
                                <span className='bg-[#418c92] p-2 rounded-full hoer:bg-[#6bccd3] hover:scale-110 cursor-pointer duration-300'><FaFacebookF size={20}></FaFacebookF></span>
                                <span className='bg-[#418c92] p-2 rounded-full hoer:bg-[#6bccd3] hover:scale-110 cursor-pointer duration-300'><FaYoutube size={20}></FaYoutube></span>
                                <span className='bg-[#418c92] p-2 rounded-full hoer:bg-[#6bccd3] hover:scale-110 cursor-pointer duration-300'><FaLinkedinIn size={20}></FaLinkedinIn></span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className='w-full text-center py-6'>Copyright (c) {currentYear} by <span className='font-bold'>Tripsure Enterprise LTD.</span></p>
                </Container>
            </footer>
        </div>
    );
};

export default Footar;