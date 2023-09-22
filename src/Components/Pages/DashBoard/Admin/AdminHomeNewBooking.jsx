import axios from 'axios';
import classNames from 'classnames'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const NewBookings = () => {
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_BACKEND_API}/payments/pay`)
            .then((data) => {
                console.log(data)
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className="bg-white w-full">
            <h3 className="font-semibold text-base  px-4 py-3">New Bookings</h3>
            <table className="w-full mx-auto overflow-x-auto">
                <thead className="justify-between">
                    <tr className="bg-[#34A0A4]">
                        <th className="px-4 py-2">
                            <span className="text-gray-100 font-semibold">Image</span>
                        </th>
                        <th className="px-4 py-2">
                            <span className="text-gray-100 font-semibold">Name</span>
                        </th>
                        <th className="px-4 py-2">
                            <span className="text-gray-100 font-semibold">Country</span>
                        </th>
                        <th className="px-4 py-2">
                            <span className="text-gray-100 font-semibold">Email</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-gray-200">
                    {/* {
                        newUser?.slice(0, 5).map(user => <tr key={user._id} className="bg-white border-b-2 border-gray-200">
                            <td className="pl-4 md:pl-8 py-2 flex flex-row items-center">
                                <img
                                    className="h-8 w-8 rounded-full object-cover"
                                    src={user.photo}
                                    alt=""
                                />
                            </td>
                            <td className='pl-4 md:pl-8'>
                                <span className="text-center ml-2 font-semibold">{user.name}</span>
                            </td>
                            <td className="pl-4 md:pl-8 py-2">
                                <span>{user.countryName ? user.countryName : 'not available'}</span>
                            </td>
                            <td className="pl-4 md:pl-8 py-2">
                                <span>{user.email}</span>
                            </td>
                        </tr>)
                    } */}
                </tbody>
            </table>
        </div>
    )
}

export default NewBookings