import React, { useEffect, useState } from 'react';
import ShareModal from '../../Modal/ShareModal';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const BecomeGuestModal = ({ isOpen, setIsOpen }) => {
    const [login_user, setLogin_user] = useState({})
    const [loading, setLoading] = useState(true)
    const { user } = useAuth()
    useEffect(() => {
        axios(`${import.meta.env.VITE_BACKEND_API}/${user?.email}`)
            .then(res => {
                setLogin_user(res.data)
            })
    }, [user])

    const handleBecomeHost = () => {
        setLoading(true)
        console.log(user)
        fetch(`${import.meta.env.VITE_BACKEND_API}/users/updateRole/${login_user._id}`, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ role: 'guide' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `WOW is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setLoading(false)
                }
            })
    }
    return (
        <ShareModal isOpen={isOpen} setIsOpen={setIsOpen} title={'Become Guest'}>
            <div className='mt-2'>
                <p className='text-sm text-gray-500'>
                    Please read all the terms & conditions before becoming a
                    host.
                </p>
            </div>
            <hr className='mt-8 ' />
            <div className='flex mt-2 justify-around'>
                <button
                    type='button'
                    disabled={loading && true}
                    className={`inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 ${loading && 'cursor-not-allowed hover:bg-green-100 bg-green-100'}`}
                    onClick={handleBecomeHost}
                >
                    Continue
                </button>
                <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    onClick={() => setIsOpen(false)}
                >
                    Cancel
                </button>
            </div>
        </ShareModal>
    );
};

export default BecomeGuestModal;