import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1>this is our main jsx</h1>
            <Outlet></Outlet>   
        </div>
    );
};

export default Main;