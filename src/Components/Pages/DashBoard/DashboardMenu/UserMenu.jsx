import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
// import { AuthContext } from '../../providers/AuthProvider'
// import Logo from '../Shared/Navbar/Logo'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { BsFillHouseAddFill } from "react-icons/bs"
import useAuth from '../../../../Hooks/useAuth'
import Logo from '../../../Shared/Navbar/Logo'
import GuideMenu from './GuideMenu'
import AdminMenu from './AdminMenu'
import DasNav from '../DasNav'
const UserMenu = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const { user, logOut, role } = useAuth()

    const [isActive, setActive] = useState('false')
    const toggleHandler = event => {
        setToggle(event.target.checked)
    }
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between lg:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Logo />
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'>
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 lg:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  lg:translate-x-0  transition duration-200 ease-in-out`}   >
                <div>
                    {/* Branding & Profile Info */}
                    <div>
                        <div className='w-full hidden lg:flex py-2 justify-center items-center mx-auto'>
                            <Logo />
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>

                            {/* {
                                role === 'guide' ? <GuideMenu></GuideMenu> :
                                    role === 'admin' ? <AdminMenu></AdminMenu> : <> <label
                                        htmlFor='Toggle3'
                                        className='inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800'
                                    >
                                        <input
                                            onChange={toggleHandler}
                                            id='Toggle3'
                                            type='checkbox'
                                            className='hidden peer'
                                        />
                                        <span className='px-4 py-1 rounded-l-md bg-rose-400 peer-checked:bg-gray-300'>
                                            Guest
                                        </span>
                                        <span className='px-4 py-1 rounded-r-md bg-gray-300 peer-checked:bg-rose-400'>
                                            Guide
                                        </span>
                                    </label>



                                        <NavLink
                                            to='add-room'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <BsFillHouseAddFill className='w-5 h-5' />

                                            <span className='mx-4 font-medium'>Add Room</span>
                                        </NavLink>
                                    </>
                            } */}
                            <AdminMenu></AdminMenu>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserMenu