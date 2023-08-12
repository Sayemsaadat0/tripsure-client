import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footar from '../../Components/Shared/Footar/Footar';

const Main = () => {
    return (
        <div>
           
            <Navbar></Navbar>
            <div className="py-28">
            <Outlet></Outlet>
           </div>
            <Footar></Footar>
        </div>
    );
};

export default Main;