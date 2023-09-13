import React from 'react';
import { AiFillMessage } from 'react-icons/ai';
import useAuth from '../../../Hooks/useAuth';
import { FaHandPaper } from 'react-icons/fa';
import moment from 'moment';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';



const DasNav = () => {
    const {logOut, user } = useAuth()
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

    const currentTime = moment();
    let greeting = '';

    const currentHour = currentTime.hour();

    if (currentHour >= 4 && currentHour < 12) {
        greeting = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Good Afternoon';
    } else if (currentHour >= 18 && currentHour < 22) {
        greeting = 'Good Evening';
    } else {
        greeting = 'Good Night';
    }

    return (
        <div className="navbar bg-white shadow mx-4">
            <div className="flex-1">
                <div>
                    <p className='font-extralight'>{greeting},</p>
                    <p className='flex gap-2 items-center text-lg font-semibold'>{user?.displayName} <FaHandPaper className='text-amber-400'></FaHandPaper></p>
                </div>
            </div>
            <div className="noti icon flex gap-4">

                {/* profile */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="avatar">
                        <div className="w-10 rounded-full">
                            <img className='cursor-pointer' src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link to={`/profile/${user?.email?.split('.')[0]}`} className="justify-between">Profile</Link>
                        </li>
                        <li onClick={handleLogout}><a>Logout</a></li>
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