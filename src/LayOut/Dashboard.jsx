import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaUserAlt, FaBookmark } from 'react-icons/fa';
import { BsFillDatabaseFill, BsDatabaseAdd, BsCollectionFill } from 'react-icons/bs';


const Dashboard = () => {


  return (
    <div className="drawer lg:drawer-open text-[#0184a4]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center px-4 DashColor">
        {/* Page content here */}

        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden" >
          Open drawer
        </label>
      </div>
      <div className="drawer-side DashNav  shadow">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu pl-0 h-full text-xl">
          {/* Sidebar content here */}
          <div className="navbar grid grid-cols-1 mb-10">
            <Link className="flex justify-center w-full" to="/">
              <img
                className="mb-10 md:w-full md:h-[30%] w-[120px] max-w-[180px]"
                src="https://i.ibb.co/tqZsGcq/logo-4.png"
                alt=""
              />
            </Link>


            <div className="flex flex-col justify-center">
              <img className="w-24 rounded-full" src="https://e1.pxfuel.com/desktop-wallpaper/170/458/desktop-wallpaper-super-saiyan-blue-vegeta-by-aubreiprince-vegeta-super-saiyan-blue-2.jpg" />
              <p>name name</p>
              <p>role</p>
            </div>
          </div>
          <hr />



          <li>
            <Link
              to="/dashboard/adminhome">
              <FaHome></FaHome>
              Admin Home
            </Link>
          </li>











          <li className="mt-2 ">
            <Link
              to="/dashboard/manageusers">
              <FaUserAlt></FaUserAlt>
              User Management
            </Link>
          </li>


          <li className="mt-2">
            <Link
              to="/dashboard/managebookings">
              <FaBookmark></FaBookmark>
              Bookings Management
            </Link>
          </li>

          <li className="mt-2">
            <Link to='/dashboard/managebookings'>
              <BsFillDatabaseFill></BsFillDatabaseFill>
              Resource  Management
            </Link>
          </li>

          <li className="mt-2">
            <Link
              to="/dashboard/addresource">
              <BsDatabaseAdd></BsDatabaseAdd>
              Add resources
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/dashboard/addresource">
              <BsCollectionFill></BsCollectionFill>
              My Added Resources
            </Link>
          </li>




        </ul>
      </div>
    </div>
  );
};

export default Dashboard;