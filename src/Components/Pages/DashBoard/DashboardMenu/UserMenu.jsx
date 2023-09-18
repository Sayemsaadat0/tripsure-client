import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from '../../providers/AuthProvider'
// import Logo from '../Shared/Navbar/Logo'
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { BsFillHouseAddFill } from "react-icons/bs";
import useAuth from "../../../../Hooks/useAuth";
import Logo from "../../../Shared/Navbar/Logo";
import GuideMenu from "./GuideMenu";
import AdminMenu from "./AdminMenu";
import DasNav from "../DasNav";
const UserMenu = () => {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)
  const { user, logOut, role } = useAuth()

  const [isActive, setActive] = useState("false");
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Logo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && "-translate-x-full"
          }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto">
              <Logo />
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <AdminMenu></AdminMenu>
            </nav>
          </div>
        </div>

        <div>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
