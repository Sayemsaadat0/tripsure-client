import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footar from '../../Components/Shared/Footar/Footar';
import OpenAi from '../../Components/Pages/Home/OpenAi/OpenAi';
import DialogflowAi from '../../Components/Pages/Home/OpenAi/DialogflowAi'

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <div className='scroll-container main'>
            {noHeaderFooter || <Navbar></Navbar>}
            {/* <OpenAi></OpenAi> */}
            <DialogflowAi/>
            <Outlet></Outlet>
            {noHeaderFooter || <Footar></Footar>}
        </div>
    );
};

export default Main;




// todo mobile responsiveness