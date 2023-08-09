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


        <div className='z-10 bg-white w-full  border-b lg:hover:shadow-xl border-gray-300 shadow-lg'>
            <Container>
                <div className='mx-auto h-full flex justify-between items-center text-gray-800 mr-4 p-2'>
                    <Link to='/'>
                        <img className='w-[30%] ' src={logo} alt="" />
                    </Link>



                    <ul className='hidden lg:flex items-center gap-4 lg:gap-7'>

                        {
                            naviItems.map(navItem =>
                                <li className='my-link relative cursor-pointer font-bold uppercase duration-300' key={navItem.id}>
                                    <NavLink to={navItem.name}
                                        className={({ isActive }) => isActive ? "active" : ""}
                                    >
                                        {navItem.name}
                                    </NavLink>
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
            </Container>
        </div>

    );
};

export default Navbar;