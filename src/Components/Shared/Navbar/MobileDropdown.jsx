import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileDropdown = ({ navItem }) => {
    return (
        <details className="dropdown">
            <summary className="px-6 text-lg mb-1 cursor-pointer">{navItem.name}</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                {
                    navItem.routes.map((route, index) => <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-[#19a0c9]" : ""
                        }
                        to={`${route.linkName}`}
                        key={index}
                    >
                        <li className="cursor-pointer rounded-lg font-medium uppercase px-6 py-3 hover:bg-gray-300  duration-300">
                            {route.routeName}
                        </li>
                    </NavLink>)
                }
            </ul>
        </details>

    );
};

export default MobileDropdown;