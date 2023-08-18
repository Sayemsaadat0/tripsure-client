import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#7bb1eb] bg-opacity-40  text-xl">
          {/* Sidebar content here */}
          <div className="navbar mb-10">
          <NavLink to='/'>
             
                   <img className='md:w-full md:h-[30%] w-[120px] max-w-[180px]' src="https://i.ibb.co/F6hSztb/2.png" alt="" /> 
        </NavLink>

          </div>

          <li>
            <NavLink to="/dashboard/adminhome">Home</NavLink>
          </li>
          <li className="mt-2">
            <NavLink to="/dashboard/manageusers">Manage users</NavLink>
          </li>
          <li  className="mt-2">
            <NavLink to="/dashboard/managebookings">Manage Bookings</NavLink>
          </li>
          <li  className="mt-2">
            <NavLink to="/dashboard/managepackage">Manage Package</NavLink>
          </li>
          <li  className="mt-2">
            <NavLink to="/dashboard/reviews">Reviews</NavLink>
          </li>
          <li className="mt-2">
            <NavLink to="/dashboard/inquires">inquires</NavLink>
          </li>
          <li className="mt-2">
            <NavLink to="/dashboard/admin/totalview">totalview</NavLink>
          </li>

          {/* users Home */}

          <li className="mt-2">
            <NavLink to="/dashboard/usershome">Users Home</NavLink>
          </li>
          <li className="mt-2">
            <NavLink to="/dashboard/managetrip">ManageTrip</NavLink>
          </li>
          <li className="mt-2">
            <NavLink to="/dashboard/addtour">Add tour</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
