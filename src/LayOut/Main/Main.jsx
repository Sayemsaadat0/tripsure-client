import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footar from '../../Components/Shared/Footar/Footar';
import DialogflowAi from '../../Components/Pages/Home/OpenAi/DialogflowAi'
import CustomChatBot from '../../Components/Shared/CustomChatBot/CustomChatBot';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <div className='scroll-container main'>
            {noHeaderFooter || <Navbar></Navbar>}
            <div>
                <DialogflowAi />
                <CustomChatBot></CustomChatBot>
            </div>
            <Outlet></Outlet>
            {noHeaderFooter || <Footar></Footar>}
        </div>
    );
};

export default Main;



