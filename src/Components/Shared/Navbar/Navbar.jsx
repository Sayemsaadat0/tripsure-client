import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsChevronDown } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { LuView } from 'react-icons/lu'
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import Dropdown from "../../Dropdown/Drpodown";
import MobileDropdown from "./MobileDropdown";
import { useGetYourFavoritItemsQuery } from "../../../Features/favorite/favoriteApi";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const { logOut, user, role, } = useAuth()
  const { data, refetch } = useGetYourFavoritItemsQuery(user?.email)
  const naviItems = [
    { id: 1, name: 'discover', dropdown: true, routes: [{ routeName: 'travel story', linkName: 'travelStory' }, { routeName: 'travel guides', linkName: 'travelGuides' }] },
    { id: 2, name: 'community', dropdown: true, routes: [{ routeName: 'post a story', linkName: 'postastory' }, { routeName: 'add a review', linkName: 'addareview' }] },
    { id: 3, name: 'more', dropdown: true, routes: [{ routeName: 'flights', linkName: 'flights' }, { routeName: 'Rental Cars', linkName: 'rentalcars' }] },
    { id: 4, name: 'dashboard', linkName: "dashboard/adminhome" },
  ]

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire("Good job!", "log Out your account ", "success");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };

  return (
    <div className="fixed top-0 z-10 h-16 w-full bg-white ">
      <div className='max-w-[1920px] mx-auto px-1 md:px-3 lg:px-5 h-full flex justify-between items-center  text-gray-800'>
        <Link to='/'>
          {/* logo */}
          <img className='md:w-full md:h-[30%] w-[120px] max-w-[180px]' src="https://i.ibb.co/9mX5YKW/logo-6.png" alt="" />
        </Link>

        <div className="hidden lg:flex items-center gap-4 lg:gap-7 text-[#79c7ff]">
          {naviItems.map((navItem) => (
            <div
              className=" cursor-pointer font-bold uppercase duration-300"
              key={navItem.id}>
              {navItem.dropdown ? (
                <div className="dropdown dropdown-hover">
                  <label className="group flex items-center gap-2" tabIndex={0}>
                    {navItem.name}{" "}
                    <BsChevronDown className="group-hover:rotate-180 duration-300"></BsChevronDown>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-10  menu shadow text-[#79c7ff] rounded-lg w-52 bg-base-300 p-0">
                    {navItem.routes.map((route, index) => (
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-[#79c7ff]" : ""
                        }
                        key={index}
                        to={`${route.linkName}`}
                      >
                        <li className="cursor-pointer rounded-lg font-medium uppercase px-6 py-3 hover:bg-base-100  duration-300">
                          {route.routeName}
                        </li>
                      </NavLink>
                    ))}
                  </ul>
                </div>
              ) : (
                <li className="my-link relative list-none cursor-pointer font-bold uppercase duration-300">
                  <NavLink
                    to={navItem.linkName}
                    className={({ isActive }) =>
                      isActive ? "text-[#79c7ff]" : ""
                    }
                  >
                    {navItem.name}
                  </NavLink>
                </li>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex">
          {user ? (
            <div className="flex gap-3 items-center">
              <NavLink
                to="favorite"
                className={`${role === 'admin' && 'hidden'} flex items-center gap-2 hover:text-[#19a0c9] duration-500 mr-2  font-medium uppercase`}>
                <span className="relative inline-block">
                  <MdFavoriteBorder className="w-6 h-6 text-gray-700 fill-current" size={25} color="19a0c9"></MdFavoriteBorder>
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{data?.length}</span>
                </span>
              </NavLink>
            {/*   {
                role === 'admin' || role === 'guide' ? '' : <button onClick={() => setIsOpen(true)} className={`inline-flex justify-center rounded-md border border-transparent bg-sky-100 px-4 py-2 text-sm font-medium text-gray-700  focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 whitespace-nowrap`}>become guide</button>
              } */}
              <Dropdown></Dropdown>
            </div>
          ) : (
            <li className="my-link relative cursor-pointer list-none font-bold uppercase duration-300">
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "text-[#79c7ff]" : "")} >
                login
              </NavLink>
            </li>
          )}
        </div>
        {/* <BecomeGuestModal isOpen={isOpen} setIsOpen={setIsOpen}></BecomeGuestModal> */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer  text-gray-800 lg:hidden"
        >
          {menuOpen ? (
            <FaTimes size={30}></FaTimes>
          ) : (
            <FaBars size={30}></FaBars>
          )}
        </div>


        {/* mobile device  */}
        {menuOpen && (
          <ul className="absolute z-10 top-12 bg-base-200 box-border md:mt-4 md:mr-2 shadow-lg w-full md:max-w-[50vw] rounded-xl py-6 right-0">
            {user ? (
              <div className="flex px-6  flex-col gap-2 items-center">
                <img
                  className="w-20 h-20 rounded-full border-2 border-[#19a0c9] p-[2px]"
                  src={`${user?.photoURL}`}
                  alt=""
                />
                <p className="text-lg font-medium text-[#428e8e]">{user?.displayName}</p>
                <button onClick={handleLogout} className=" logout-button w-full bg-white">  Log Out</button>
                <Link
                  onClick={() => setMenuOpen(false)}
                  to={`/profile/${user?.displayName.split(" ").join("-")}`}
                  className="flex items-center gap-3 w-full cursor-pointer  font-medium uppercase px-4 py-2 rounded hover:bg-gray-300  duration-300" >
                  <CgProfile size={20} color="19a0c9"></CgProfile>
                  <span>Your Profile</span>
                </Link>
                <Link
                  onClick={() => setMenuOpen(false)}
                  to='favorite'
                  className="flex items-center gap-3 w-full cursor-pointer  font-medium uppercase px-4 py-2 rounded hover:bg-gray-300  duration-300"
                >
                  <MdFavoriteBorder size={20} color="19a0c9"></MdFavoriteBorder>
                  <span>Your Favorite</span>
                </Link>
                <Link
                  onClick={() => setMenuOpen(false)}
                  to='overview'
                  className="flex items-center gap-3 w-full cursor-pointer  font-medium uppercase px-4 py-2 rounded hover:bg-gray-300  duration-300"
                >
                  <LuView size={20} color="19a0c9"></LuView>
                  <span>View Overview</span>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <li className="cursor-pointer font-medium uppercase px-6 py-3 hover:bg-gray-300  duration-300">
                  login
                </li>
              </Link>
            )}
            <div className="divider"></div>
            {/* this code render always when screen mobile or tablat */}
            {naviItems.map((navItem, index) =>
              <div key={index}>
                {navItem.dropdown ?
                  <MobileDropdown key={index} navItem={navItem}></MobileDropdown>
                  :
                  <li className="text-lg px-6">
                    <NavLink to={navItem.name}>{navItem.name}</NavLink>
                  </li>
                }
              </div>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
