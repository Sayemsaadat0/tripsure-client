import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import Container from '../../../LayOut/Container';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const naviItems = [
        { id: 1, name: 'link 1' },
        { id: 2, name: 'link 2' },
        { id: 3, name: 'link 3' },
        { id: 4, name: 'link 4' },

    ]
    return (
        <div className='mb-20 fixed z-10 bg-white h-20 w-full border-b-[2px] lg:hover:shadow-xl border-gray-300 shadow-lg'>
            <div className='max-w-7xl mx-auto px-1 md:px-3 lg:px-5 h-full flex justify-between items-center  text-gray-800'>
                <Link to='/'>
                    <img className='md:w-full md:h-[70px] w-[120px] max-w-[180px]' src={logo} alt="" />
                </Link>



                <ul className='hidden lg:flex items-center gap-4 lg:gap-7'>

                    {
                        naviItems.map(navItem => <li className='my-link relative cursor-pointer font-bold uppercase duration-300' key={navItem.id}>
                            {/* index.css file contain my-link class name */}
                            <NavLink
                                to={navItem.name}
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                {navItem.name}
                            </NavLink>
                           {/*  <Link className='my-link' to={navItem.name}>
                                {navItem.name}
                            </Link> */}
                        </li>)
                    }


                </ul>

                <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer  text-gray-800 lg:hidden">
                    {
                        menuOpen ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>
                    }
                </div>

                {
                    menuOpen && <ul className='absolute z-10 top-20 bg-white box-border shadow-lg w-full min-w-[200px] max-w-[50vw] rounded-xl py-6 right-0'>

                        {
                            naviItems.map((navItem, index) => <Link onClick={() => setMenuOpen(false)} key={index} to={navItem.name}>
                                <li className=' cursor-pointer  font-medium uppercase px-6 py-3 hover:bg-gray-300  duration-300' key={navItem.id}>
                                    {navItem.name}
                                </li>
                            </Link>)
                        }
                    </ul>
                }

            </div>
        </div>
    );
};

export default Navbar;