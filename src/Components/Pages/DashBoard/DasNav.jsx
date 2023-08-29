import React from 'react';
import { AiFillMessage } from 'react-icons/ai';


const DasNav = () => {
    return (
        <div className="navbar bg-white shadow ">
            <div className="flex-1">
                <h3 className='text-lg'> Welcome Back, <span className='text-2xl'>brother</span></h3>
            </div>
            <div className="noti icon flex gap-4">
            <AiFillMessage className='text-2xl'></AiFillMessage>  
             
                {/* profile */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.pinimg.com/564x/d3/ac/1d/d3ac1de97a56d35624bf829abb55cec6.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">Profile</a>
                        </li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DasNav;











/* 
border-radius: 6px;
background: #e0e0e0;
box-shadow:  5px 5px 10px #5a5a5a,
             -5px -5px 10px #ffffff;

*/