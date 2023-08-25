import React, { useDebugValue, useEffect, useState } from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import useAuth from '../../../Hooks/useAuth';
import { addCoverPhoto, findUserbyEmail } from '../../../apiCall/users';
import CoverEditModal from '../../Modal/CoverEditModal';
import { imageUpload } from '../../../api/utilities';
const NewProfile = () => {
    const { user } = useAuth()
    const [userDetails, setUserDetails] = useState({})
    // let [isOpen, setIsOpen] = useState(false)
    // const closeModal = () => {
    //     setIsOpen(false)
    // }
    const [image, setImage] = useState()

        useEffect(() => {
            if (image) {
                imageUpload(image)
                    .then(data => {
                        console.log(data.data.display_url)
                        addCoverPhoto(user.email, data.data.display_url)
                        console.log(data)
                    })
            }
        }, [image])

    const { countryName, phone, name, email, gender, photo ,coverPhoto} = userDetails

    useEffect(() => {
        if (user) {
            findUserbyEmail(user.email).then(data => setUserDetails(data))
        }
    }, [user])

    return (
        <div className='bg-[#EFEFF5] pt-20 relative w-full min-h-screen'>
            <div className='bg-white mt-10  p-5 rounded-md  max-w-3xl mx-auto '>
                <div className='relative'>
                    {/* cover photo */}
                    <img className='h-[200px] md:h-[300px] w-full' src={coverPhoto} alt="" />
                    <label>
                        <input
                            onChange={event => { setImage(event.target.files[0]) }}
                            className='text-sm cursor-pointer w-36 hidden'
                            type='file'
                            name='image'
                            id='image'
                            accept='image/*'
                            hidden
                        />
                        <div className='bg-gray-300 border-2 hover:bg-opacity-80 bg-opacity-70 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center  absolute top-5 right-5'>
                            {
                                image ? image.name : <>
                                    <AiTwotoneEdit className='fill-current w-4 h-4 mr-2'></AiTwotoneEdit>
                                    <span>Edit Cover</span>
                                </>
                            }
                        </div>
                    </label>
                    {/* <CoverEditModal closeModal={closeModal} isOpen={isOpen}></CoverEditModal> */}

                    {/* profile picture */}
                    <div className='flex gap-3'>
                        <img className='h-[100px] w-[100px] md:h-[120px] md:w-[120px] rounded-full ml-5 md:ml-10 -mt-14' src="https://i.ibb.co/XFpZysc/profile.jpg" alt="" />
                        <div>
                            <p className='font-medium text-lg '>{user.displayName}</p>
                            <p className='flex gap-2 items-center text-gray-700'><HiOutlineLocationMarker></HiOutlineLocationMarker><span>{countryName}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProfile;