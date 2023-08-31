import React, { useEffect, useState } from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import useAuth from '../../../Hooks/useAuth';
import { addCoverPhoto, findUserbyEmail } from '../../../apiCall/users';
import { imageUpload } from '../../../api/utilities';
import EditUserDataModal from '../../Modal/EditUserDataModal';
const NewProfile = () => {
    const { user } = useAuth()
    const [userDetails, setUserDetails] = useState({})
    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }
    const [image, setImage] = useState()

    useEffect(() => {
        if (image) {
            imageUpload(image)
                .then(data => {
                    const url = data.data?.display_url
                    addCoverPhoto(user.email, url)
                    console.log(data)
                })
        }
    }, [image])
    console.log(userDetails)
    
    const { countryName, phone, name, email, gender, photo, coverPhoto } = userDetails

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
                    <img className='h-[200px] md:h-[300px] w-full' src={coverPhoto ? coverPhoto : 'no imge'} alt="" />
                    <label>
                        <input
                            onChange={event => { setImage(event.target.files[0]) }}
                            className='text-sm cursor-pointer w-36 hidden'
                            type='file' name='image' accept='image/*' hidden
                        />
                        <div className='bg-black  hover:bg-opacity-60 duration-300 bg-opacity-50 text-white font-bold py-2 px-4 rounded inline-flex items-center  absolute top-5 right-5'>
                            {
                                image ? image.name : <>
                                    <AiTwotoneEdit className='fill-current w-4 h-4 mr-2'></AiTwotoneEdit>
                                    <span>Edit Cover</span>
                                </>
                            }
                        </div>
                    </label>
                    {/* profile picture */}
                    <div className='flex gap-3'>
                        <img className='h-[100px] w-[100px] md:h-[120px] md:w-[120px] rounded-full ml-5 md:ml-10 -mt-14' src={user?.photoURL} alt="" />
                        <div>
                            <p className='font-medium text-lg '>{user.displayName}</p>
                            <p className='flex gap-2 items-center text-gray-700'><HiOutlineLocationMarker></HiOutlineLocationMarker><span>{countryName}</span></p>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto bg-slate-0 mt-6">
                    <div className='w-full text-right'>
                    <button onClick={() => setIsOpen(true)} className='text-blue-500 font-medium hover:underline underline-offset-2 duration-300'>Edit Details</button>
                    </div>
                    <table className="table w-fit">
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td><h3 className='font-bold'>Email</h3></td>
                                <td>{email}</td>

                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td><h3 className='font-bold'>Phone</h3></td>
                                <td>{phone}</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td><h3 className='font-bold'>Gender</h3></td>
                                <td>{gender}</td>
                            </tr>
                        </tbody>
                    </table>
                    <EditUserDataModal isOpen={isOpen} closeModal={closeModal}></EditUserDataModal>
                </div>
            </div>
        </div>
    );
};

export default NewProfile;