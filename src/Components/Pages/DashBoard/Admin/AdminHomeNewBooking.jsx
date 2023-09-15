import axios from 'axios';
import classNames from 'classnames'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const popularProducts = [
    {
        id: '3432',
        product_name: 'Macbook M1 Pro 14"',
        product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
        product_price: '$1499.00',
        product_stock: 341
    },
    {
        id: '7633',
        product_name: 'Samsung Galaxy Buds 2',
        product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
        product_price: '$399.00',
        product_stock: 24
    },
    {
        id: '6534',
        product_name: 'Asus Zenbook Pro',
        product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
        product_price: '$899.00',
        product_stock: 56
    },
    {
        id: '9234',
        product_name: 'LG Flex Canvas',
        product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
        product_price: '$499.00',
        product_stock: 98
    },
    {
        id: '4314',
        product_name: 'Apple Magic Touchpad',
        product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
        product_price: '$699.00',
        product_stock: 0
    },
    {
        id: '4342',
        product_name: 'Nothing Earbuds One',
        product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
        product_price: '$399.00',
        product_stock: 453
    }
]


const NewBookings = () => {
    useEffect(() => {
        axios
            .get(`http://localhost:1000/payments/pay`)
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