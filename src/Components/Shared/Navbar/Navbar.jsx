import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { BsChevronDown } from 'react-icons/bs'
import { MdFavoriteBorder } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom';
import Container from '../../../LayOut/Container';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import Dropdown from '../../Dropdown/Drpodown';
// import Dropdown from '../../Dropdown/Drpodown';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { logOut, user } = useAuth()
    const color = '19a0c9'
    const naviItems = [
        { id: 1, name: 'discover', dropdown: true, routes: [{ routeName: 'travel story', linkName: 'travelStory' }, { routeName: 'your guides', linkName: 'yourGuides' }] },
        { id: 2, name: 'community', dropdown: true, routes: [{ routeName: 'post a story', linkName: 'postStory' }, { routeName: 'add a review', linkName: 'addReview' }] },
        { id: 2, name: 'more', dropdown: true, routes: [{ routeName: 'post a story', linkName: 'postStory' }, { routeName: 'add a review', linkName: 'addReview' }] },
        { id: 3, name: 'dashboard' },
    ]

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'log Out your account ',
                    'success'
                )
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }

    return (
        <div className='sticky top-0 z-10 bg-white h-24 w-full border-b-[2px] lg:hover:shadow-xl border-gray-300 shadow-lg'>
            <div className='max-w-7xl mx-auto px-1 md:px-3 lg:px-5 h-full flex justify-between items-center  text-gray-800'>
                <Link c to='/'>
                    <img className='md:w-full md:h-[30%] w-[120px] max-w-[180px]' src="https://i.ibb.co/dQmmYnC/logo.png" alt="" />
                </Link>

                <div className='hidden lg:flex items-center gap-4 lg:gap-7'>
                    {
                        naviItems.map(navItem => <div className=' cursor-pointer font-bold uppercase duration-300' key={navItem.id}>
                            {
                                navItem.dropdown ? <div className="dropdown dropdown-hover">
                                    <label className='group flex items-center gap-2' tabIndex={0}>{navItem.name} <BsChevronDown className='group-hover:rotate-180 duration-300'></BsChevronDown></label>
                                    <ul tabIndex={0} className="dropdown-content z-[10] menu  shadow bg-base-100 rounded-box w-52">
                                        {
                                            navItem.routes.map((route, index) => <NavLink className={({ isActive }) => isActive ? "text-[#2d9693]" : ""} key={index} to={`${route.linkName}`}>
                                                <li className='cursor-pointer rounded-lg font-medium uppercase px-6 py-3 hover:bg-gray-300  duration-300'>
                                                    {route.routeName}
                                                </li>
                                            </NavLink>)
                                        }
                                    </ul>
                                </div> : <li className='my-link relative list-none cursor-pointer font-bold uppercase duration-300'>
                                    <NavLink to={navItem.name}
                                        className={({ isActive }) => isActive ? "text-[#2d9693]" : ""}>
                                        {navItem.name}
                                    </NavLink>
                                </li>
                            }
                        </div>)
                    }
                </div>
                <div className='hidden lg:flex'>
                    {
                        user ? <div className='flex gap-2 items-center'>
                            <NavLink to='favorite' className={`flex  items-center gap-2 hover:text-[#19a0c9] duration-500 w-full  font-medium uppercase ${({ isActive }) => isActive ? "text-[#19a0c9]" : ""}`} >
                                <MdFavoriteBorder size={25} color='19a0c9'></MdFavoriteBorder>
                                <span>Favorite</span>
                            </NavLink>
                            <Dropdown></Dropdown>
                        </div>
                            : <li className='my-link relative cursor-pointer list-none font-bold uppercase duration-300'>
                                <NavLink
                                    to='/login'
                                    className={({ isActive }) => isActive ? "text-[#19a0c9]" : ""}
                                >
                                    login
                                </NavLink>
                            </li>
                    }
                </div>

                <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer  text-gray-800 lg:hidden">
                    {
                        menuOpen ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>
                    }
                </div>

                {
                    menuOpen && <ul className='absolute z-10 top-20 bg-white box-border mt-4 mr-2 shadow-lg w-full min-w-[200px] max-w-[50vw] rounded-xl py-6 right-0'>
                        {
                            user ? <div className='flex px-6 mb-1 flex-col gap-3 items-center'>
                                <img className='w-20 h-20 rounded-full border-2 border-[#19a0c9] p-[2px]' src={`${user?.photoURL}`} alt="" />
                                <p className='text-lg font-medium'>{user?.displayName}</p>
                                <button onClick={handleLogout} className=" logout-button w-full bg-white">Log Out</button>

                                <Link onClick={() => setMenuOpen(false)} to={`/profile/${user?.displayName.split(' ').join('-')}`} className='flex items-center gap-3 w-full cursor-pointer  font-medium uppercase px-4 py-2 rounded hover:bg-gray-300  duration-300'>
                                    <CgProfile size={20} color='19a0c9'></CgProfile>
                                    <span>Your Profile</span>
                                </Link>
                            </div>
                                : <Link to='/login'>
                                    <li className='cursor-pointer font-medium uppercase px-6 py-3 hover:bg-gray-300  duration-300'>
                                        login
                                    </li>
                                </Link>
                        }
                        <div className="divider"></div>
                        {
                            naviItems.map((navItem, index) => <div onClick={() => setMenuOpen(false)} key={index} to={navItem.name}>
                                {
                                    navItem.dropdown ? <div className="dropdown dropdown-hover ">
                                        <div>
                                            <label className='w-full group flex items-center gap-2 font-medium uppercase px-6 py-3' tabIndex={0}>{navItem.name} <BsChevronDown className='group-hover:rotate-180 duration-300'></BsChevronDown></label>
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content z-[10] ml-3 menu shadow-lg bg-base-200 rounded-box  w-52">
                                            {
                                                navItem.routes.map((route, index) => <NavLink className={({ isActive }) => isActive ? "text-[#19a0c9]" : ""} key={index} to={`${route.linkName}`}>
                                                    <li className='cursor-pointer rounded-lg font-medium uppercase px-6 py-3 hover:bg-gray-300  duration-300'>
                                                        {route.routeName}
                                                    </li>
                                                </NavLink>)
                                            }
                                        </ul>
                                    </div> : <li className=' cursor-pointer font-medium uppercase px-6 py-3 hover:bg-gray-300  duration-300' >
                                        <NavLink to={navItem.name}>
                                            {navItem.name}
                                        </NavLink>
                                    </li>
                                }
                            </div>)
                        }
                    </ul>
                }

            </div>
        </div>
    );
};

export default Navbar;