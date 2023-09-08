import { NavLink } from 'react-router-dom'
import { FaHome, FaUserAlt, FaBookmark } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { BsFillDatabaseFill, BsDatabaseAdd, BsCollectionFill } from 'react-icons/bs';
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
const AdminMenu = () => {
    return (
        <>
            <NavLink
                to="/dashboard/adminhome"
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-4  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaHome className='w-5 h-5' />
                <span className='mx-4 font-medium'>Admin Home</span>
            </NavLink>

            <NavLink
                to="/dashboard/manageusers"
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-4  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaUserAlt className='w-5 h-5' />
                <span className='mx-4 font-medium'>User Management</span>
            </NavLink>
            <NavLink
                to="/dashboard/managebookings"
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-4  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <MdOutlineManageHistory className='w-5 h-5' />

                <span className='mx-4 font-medium'> Manage Bookings</span>
            </NavLink>
            <NavLink
                to='/dashboard/managebookings'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-4  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FiSettings className='w-5 h-5' />

                <span className='mx-4 font-medium'> Resource Management</span>
            </NavLink>
            <NavLink
                to="/dashboard/addresource"
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-4  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <BsDatabaseAdd className='w-5 h-5' />

                <span className='mx-4 font-medium'> Add resources</span>
            </NavLink>
            <NavLink
                to="/dashboard/usergueide"
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-4  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <BsCollectionFill className='w-5 h-5' />

                <span className='mx-4 font-medium'> User Guiede</span>
            </NavLink>
        </>
    )
}

export default AdminMenu