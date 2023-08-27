import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUserAlt, FaBookmark } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { BsFillDatabaseFill, BsDatabaseAdd, BsCollectionFill } from 'react-icons/bs';
import useAuth from "../Hooks/useAuth";
import DasNav from "../Components/Pages/DashBoard/DasNav";


const Dashboard = () => {

  const { user } = useAuth()
  console.log(user);


  return (
    <div className="drawer lg:drawer-open max-w-7xl mx-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-gray-100">
        <DasNav></DasNav>

        <Outlet></Outlet>

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden" >
          Open drawer
        </label>
      </div>
      <div className="drawer-side  shadow">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="navbar grid grid-cols-1  ">
          <NavLink className="w-full pt-6  flex flex-col justify-center" to="/">
            <img
              className="w-20 hidden md:block"
              src="https://i.ibb.co/qkVKbxM/Untitled-design-4.png"
              alt="" />

            <p>TripSure</p>
          </NavLink>

          {/* optional */}
          {/*  <div className="">
            <img className="w-16 rounded-full" src={user.photoURL} />
            <div className="m-2">
              <p>{user.displayName}</p>
              <p>role</p>
            </div>
          </div> */}
        </div>

        <ul className="menu  text-xl">
          <li><NavLink
            to="/dashboard/adminhome">
            <FaHome></FaHome>
            Admin Home
          </NavLink></li>

          <li className="mt-2"><NavLink
            to="/dashboard/manageusers">
            <FaUserAlt></FaUserAlt>
            User Management
          </NavLink></li>

          <li className="mt-2"><NavLink
            to="/dashboard/managebookings">
            <FaBookmark></FaBookmark>
            Bookings Management
          </NavLink></li>

          <li className="mt-2">
            <NavLink to='/dashboard/managebookings'>
              <FiSettings></FiSettings>
              Resource  Management
            </NavLink>
          </li>

          <li className="mt-2">
            <NavLink
              to="/dashboard/addresource">
              <BsDatabaseAdd></BsDatabaseAdd>
              Add resources
            </NavLink>
          </li>
          <li className="mt-2">
            <NavLink
              to="/dashboard/addresource">
              <BsCollectionFill></BsCollectionFill>
              My Added Resources
            </NavLink>
          </li>
        </ul>
        <div className="flex justify-center items-end ">
        <img className="w-52" src="https://i.ibb.co/km4tN6D/Set-of-programmers-02-03.jpg" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


