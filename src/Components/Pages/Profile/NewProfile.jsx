import React, { useEffect, useState } from 'react';
import { AiTwotoneEdit, AiTwotoneStar, AiOutlineGlobal } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { GrDocumentVerified } from 'react-icons/gr'
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

    const { countryName, phone, name, email, gender, photo, coverPhoto, role } = userDetails

    useEffect(() => {
        if (user) {
            findUserbyEmail(user.email).then(data => setUserDetails(data))
        }
    }, [user])

    return (
        <div className=' pt-20 relative w-full min-h-screen'>
            <div className='max-w-6xl mx-auto'>
                <div className=' flex flex-col lg:flex-row gap-10'>
                    <div className='max-w-sm w-full'>
                        <div className='bg-white rounded-2xl border-4 border-opacity-0 py-7 px-5 w-full h-fit mx-auto shadow-lg gap-5 flex'>
                            <div className='text-center w-1/2'>
                                <img className='h-[120px] w-[120px] rounded-full mx-auto' src={user?.photoURL} alt="" />
                                <p className='text-[2rem] font-bold text-[#222222]'>{name}</p>
                                <p className='font-semibold'>{role}</p>
                            </div>
                            <div className='divide-y-2 space-y-2 w-1/2'>
                                <div className='w-full'>
                                    <h2 className='text-[1.625rem] font-bold text-[#222222]'>38</h2>
                                    <p>reviews</p>
                                </div>
                                <div className='w-full'>
                                    <h2 className='text-[1.625rem] font-bold text-[#222222] flex items-center'>4.5 <AiTwotoneStar size={17} /></h2>
                                    <p>Rating</p>
                                </div>
                                <div className='w-full'>
                                    <h2 className='text-[1.625rem] font-bold text-[#222222]'>5</h2>
                                    <p>Years guiding</p>
                                </div>
                            </div>

                        </div>
                        <div className='bg-white rounded-2xl mt-10 border-[2px] border-[#DDDDDD] py-7 px-5 space-y-3 max-w-sm w-full h-fit mx-auto'>
                            <p className='text-[#222222] text-[1.375rem] font-semibold'>Pudding's confirmed information</p>
                            <p className='flex items-center gap-3'><GrDocumentVerified /> <span className='text-[1.2rem]'>Identity</span></p>
                            <p className='flex items-center gap-3'><GrDocumentVerified /> <span className='text-[1.2rem]'>Email address</span></p>
                            <p className='flex items-center gap-3'><GrDocumentVerified /> <span className='text-[1.2rem]'>Phone Number</span></p>
                            <p className='flex items-center gap-3'><GrDocumentVerified /> <span className='text-[1.2rem]'>Identity</span></p>
                        </div>
                    </div>
                    <div className='lg:w-2/3 '>
                        <h2 className='text-[2.5rem] font-bold text-[#222222] mb-4'>About {name}</h2>
                        <p className='flex items-center mb-4 gap-3'><AiOutlineGlobal size={17} /> <span className='text-[1.2rem]'>Speaks English, Thai</span></p>
                        <p className='text-[1.1rem]'>
                            Hello All! We are team under Vacayandco Company Limited registered in Thailand. Our company comes with travel agent license now managing properties and taking private villa rental/ yacht charter trip reservation in beach destination (Thailand).

                            We are new to Airbnb, yet not new in villa rental and yacht business. Our company established since 2019 and never stopped partner up with qualified exclusive villa and yacht partner. Guests can ensure only exclusive properties and yacht fleets selecte 
                            <button className='font-semibold underline underline-offset-2 ml-2'> Read More...</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        // <div className='bg-[#EFEFF5] pt-20 relative w-full min-h-screen'>
        //     <div className='bg-white mt-10  p-5 rounded-md  mx-auto '>
        //         <div className='relative'>
        //             {/* cover photo */}
        //             <img className='h-[200px] md:h-[300px] w-full' src={coverPhoto ? coverPhoto : 'no imge'} alt="" />
        //             <label>
        //                 <input
        //                     onChange={event => { setImage(event.target.files[0]) }}
        //                     className='text-sm cursor-pointer w-36 hidden'
        //                     type='file' name='image' accept='image/*' hidden
        //                 />
        //                 <div className='bg-black  hover:bg-opacity-60 duration-300 bg-opacity-50 text-white font-bold py-2 px-4 rounded inline-flex items-center  absolute top-5 right-5'>
        //                     {
        //                         image ? image.name : <>
        //                             <AiTwotoneEdit className='fill-current w-4 h-4 mr-2'></AiTwotoneEdit>
        //                             <span>Edit Cover</span>
        //                         </>
        //                     }
        //                 </div>
        //             </label>
        //             {/* profile picture */}
        //             <div className='flex gap-3'>
        //                 <img className='h-[100px] w-[100px] md:h-[120px] md:w-[120px] rounded-full ml-5 md:ml-10 -mt-14' src={user?.photoURL} alt="" />
        //                 <div>
        //                     <p className='font-medium text-lg '>{user.displayName}</p>
        //                     <p className='flex gap-2 items-center text-gray-700'><HiOutlineLocationMarker></HiOutlineLocationMarker><span>{countryName}</span></p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="overflow-x-auto bg-slate-0 mt-6">
        //             <div className='w-full text-right'>
        //             <button onClick={() => setIsOpen(true)} className='text-blue-500 font-medium hover:underline underline-offset-2 duration-300'>Edit Details</button>
        //             </div>
        //             <table className="table w-fit">
        //                 <tbody>
        //                     {/* row 1 */}
        //                     <tr>
        //                         <td><h3 className='font-bold'>Email</h3></td>
        //                         <td>{email}</td>

        //                     </tr>
        //                     {/* row 2 */}
        //                     <tr>
        //                         <td><h3 className='font-bold'>Phone</h3></td>
        //                         <td>{phone}</td>
        //                     </tr>
        //                     {/* row 3 */}
        //                     <tr>
        //                         <td><h3 className='font-bold'>Gender</h3></td>
        //                         <td>{gender}</td>
        //                     </tr>
        //                 </tbody>
        //             </table>
        //             <EditUserDataModal isOpen={isOpen} closeModal={closeModal}></EditUserDataModal>
        //         </div>
        //     </div>
        // </div>

    );
};

export default NewProfile;