import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { AiOutlineCamera } from 'react-icons/ai'
import Container from '../../../../LayOut/Container';
import AddPhotoModal from './AddPhotoModal';
import { imageUpload } from '../../../../api/utilities';
import axios from 'axios';

const PostStory = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [imgUrlTitleDescription, setImgUrlTitleDescription] = useState([])
    const closeModal = () => {
        setIsOpen(false)
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const storyss = { imgUrlTitleDescription, ...data }
        const { description, title, withYou, whenYouGo } = data
        imageUpload(data.image[0])
            .then(data => {
                const url = data.data.display_url
                const story = { description, title, withYou, whenYouGo, url, imgUrlTitleDescription }
                axios.post(`${import.meta.env.VITE_BACKEND_API}/story`, story)
                    .then(res => {
                        console.log(res)
                    })
                console.log(url)
            })
        // console.log(console.log(story))
    }

    const handleRemoveImage = (imageToRemove) => {
        console.log(imageToRemove)
        // setImgUrlTitleDescription((prevImages) => prevImages.filter((image) => image !== imageToRemove));
        const remainingImgTitle = imgUrlTitleDescription.filter((image) => image !== imageToRemove)
        setImgUrlTitleDescription(remainingImgTitle)

    };
    console.log('from post story page', imgUrlTitleDescription)

    // https://i.ibb.co/PzTmkVY/1.png
    // https://i.ibb.co/X8j5MnR/2.png
    return (
        <div className='pt-16 story bg-no-repeat'>
            <Container>

                <h2 className='font-semibold text-2xl underline  tracking-widest text-center pt-10 px-4'>Wanderlust Chronicles: A Traveler's Diary </h2>
                <p className='text-center my-2 '>
                    From remote villages to bustling cities, this diary-style narrative offers <br /> an easy-to-follow glimpse into my travel escapades.
                </p>
                <div className='mx-auto gap-20 mt-10  md:flex justify-center text-center items-center 
                 '>
                    <div className='p-10 backdrop-blur-md '>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className='text-gray-500'>Upload an Image</label>
                            <div className="my-3">
                                <input
                                    type="file"
                                    name="image"
                                    {...register('image', { required: 'Image is required' })}
                                    className='file-input file-input-ghost border file-input-sm rounded-md md:w-96  border-gray-400' />
                                {errors.image && (
                                    <span className="text-red-500 text-sm">{errors.image.message}</span>
                                )}
                            </div>
                            <div className=' mb-3  flex flex-col gap-2'>
                                <label htmlFor="title">Give a Title to Your Story</label>
                                <input type='text' placeholder='Summarize your experience' className='w-full border-2 border-gray-400 py-1 px-2 rounded-md md:w-96 ' {...register("title")} />
                            </div>
                            <div className=' mb-3 flex flex-col gap-2'>
                                <label htmlFor="title">Add Few Details About Your Trip </label>
                                <textarea placeholder='What were some things you enjoyed about this experience? How can it be improved?' className='rounded-xl  w-full border-2 border-gray-400 py-1 px-2'  {...register("description")} cols="30" rows="5"></textarea>
                            </div>
                            <div className=' mb-3 flex flex-col gap-2'>
                                <label htmlFor="deadline">When did you go? (required)</label>
                                <select className='rounded-md md:w-96  w-full  border-2 border-gray-400 py-1 px-2' {...register("whenYouGo")}>
                                    <option value="" disabled>Select one</option>
                                    <option value="8,2023">August 2023 </option>
                                    <option value="7,2023"> July 2023 </option>
                                    <option value="6,2023">June 2023 </option>
                                    <option value="5,2023">May 2023 </option>
                                    <option value="4,2023">April 2023 </option>
                                    <option value="3,2023"> March 2023 </option>
                                    <option value="2,2023">February 2023 </option>
                                    <option value="1,2023">January 2023 </option>
                                    <option value="12,2022">December 2022 </option>
                                    <option value="11,2022">November 2022 </option>
                                    <option value="10,2022">October 2022 </option>
                                    <option value="9,2022">September 2022 </option>
                                </select>
                            </div>
                            <div className=' mb-3 flex flex-col gap-2'>
                                <label htmlFor="priority">Who was with you? (required)</label>
                                <select className='rounded-md md:w-96   w-full border-2 border-gray-400 py-1 px-2' {...register("withYou")}>
                                    <option disabled>Select one</option>
                                    <option value="Family (young Children)">Family (young Children)</option>
                                    <option value="Family (teens)">Family (teens)</option>
                                    <option value="Friends">Friends</option>
                                    <option value="Business">Business</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>



                            <div>
                                <p className='my-2'>Add More Details</p>
                                <p onClick={() => setIsOpen(true)} className='mb-3 rounded-md md:w-96  cursor-pointer  px-3 py-2 border-2 border-dashed border-gray-400 flex justify-center items-center'>
                                    <AiOutlineCamera size={30} color='#388091'></AiOutlineCamera>
                                </p>

                                {
                                    imgUrlTitleDescription.length > 0 && <div className='border-2 px-2 divide-y-2'>
                                        {
                                            imgUrlTitleDescription.map(urlTitleBox => <div key={urlTitleBox.url} className='flex py-2 justify-between items-center w-full h-20 gap-3 md:gap-0'>
                                                <img className='w-20 h-full rounded-b-lg rounded-tr-lg' src={urlTitleBox.url} alt="" />
                                                <h2 className='grow ml-2 text-lg font-medium '>{urlTitleBox.title}</h2>
                                                <p className='text-blue-400 cursor-pointer' onClick={() => handleRemoveImage(urlTitleBox)}>remove</p>
                                            </div>)}
                                    </div>
                                }
                            </div>
                            <AddPhotoModal setImgUrlTitleDescription={setImgUrlTitleDescription} isOpen={isOpen} closeModal={closeModal}></AddPhotoModal>
                            <div className='flex gap-3'>
                                <button className='border p-2 w-full rounded-md border-gray-400' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default PostStory;