import React, { useEffect, useState } from 'react';
import ShareModal from '../../../Modal/ShareModal';
import { findUserbyEmail } from '../../../../apiCall/users';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
const UserDetailsModa = ({ isOpen, setIsOpen, userEmail }) => {
    // console.log(userEmail)
    const [userDetails, setUserDetails] = useState({})
    useEffect(() => {
        if (userEmail) {
            findUserbyEmail(userEmail).then(data => {
                setUserDetails(data)
                console.log(data)
            })
        }
    }, [userEmail])
    const { countryName, phone, name, email, gender, photo, coverPhoto, role } = userDetails

    return (
        <ShareModal isOpen={isOpen} setIsOpen={setIsOpen} title={`About ${name}`}>
            <div>
                <img className='w-full h-[180px] rounded-md image-full mt-7' src={coverPhoto ? coverPhoto : 'https://i.ibb.co/bLLVzPj/cover-black.png'} alt="" />
                <img className='w-[100px] h-[100px] rounded-full mx-auto -mt-10' src={photo ? photo : 'https://i.ibb.co/bLLVzPj/cover-black.png'} alt="" />
                <h3 className='text-[2rem]  text-center font-semibold'>{name}</h3>
                <p className='text-center text-[1.2rem]'>{role}, {gender}</p>
                <div className='divider'></div>
                <div className='md:flex justify-between items-center '>
                    <p className='text-[1.1rem] mb-2 flex gap-3 items-center'><AiOutlineMail /> <span>{email}</span></p>
                    {phone && <p className='text-[1.1rem] flex gap-3 mb-2 items-center'><AiOutlinePhone /> <span>{phone}</span></p>}
                </div>
                {countryName && <p className='flex text-[1.1rem] gap-3 items-center'><HiOutlineLocationMarker /> <span>{countryName}</span></p>}
            </div>
        </ShareModal>
    );
};

export default UserDetailsModa;