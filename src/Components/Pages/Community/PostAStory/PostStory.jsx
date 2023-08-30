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
                const story = {description, title, withYou, whenYouGo, url, imgUrlTitleDescription}
                axios.post(`http://localhost:1000/sotry`, story)
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


    return (
        <div className='mt-16 min-h-[calc(100vh-64px)] bg-[#EFEFF5]'>
            <Container>
                <h2 className='font-semibold text-xl text-center pt-10'>Post a story</h2>
                <div className='max-w-lg mx-auto'>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Main image</label>
                        <div className="mb-3">
                            <input
                                type="file"
                                name="image"
                                {...register('image', { required: 'Image is required' })}
                                className='rounded-md w-full border-2 border-gray-400 py-1 px-2'
                            />
                            {errors.image && (
                                <span className="text-red-500 text-sm">{errors.image.message}</span>
                            )}
                        </div>
                        <div className=' mb-3'>
                            <label htmlFor="title">Give your review a title (required)</label>
                            <input type='text' placeholder='Summarize your experience' className='rounded-md w-full border-2 border-gray-400 py-1 px-2' {...register("title")} />
                        </div>
                        <div className=' mb-3'>
                            <label htmlFor="title">Desceription </label>
                            <textarea placeholder='What were some things you enjoyed about this experience? How can it be improved?' className='rounded-md w-full border-2 border-gray-400 py-1 px-2'  {...register("description")} cols="30" rows="5"></textarea>
                        </div>
                        <div className=' mb-3'>
                            <label htmlFor="deadline">When did you go? (required)</label>
                            <select className='rounded-md w-full border-2 border-gray-400 py-1 px-2' {...register("whenYouGo")}>
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
                        <div className=' mb-3'>
                            <label htmlFor="priority">Who was with you? (required)</label>
                            <select className='rounded-md w-full border-2 border-gray-400 py-1 px-2' {...register("withYou")}>
                                <option disabled>Select one</option>
                                <option value="Family (young Children)">Family (young Children)</option>
                                <option value="Family (teens)">Family (teens)</option>
                                <option value="Friends">Friends</option>
                                <option value="Business">Business</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className='divider'></div>

                        <div onClick={() => setIsOpen(true)} className='mb-3 cursor-pointer rounded-md px-3 py-2 border-2 border-dashed border-gray-400 flex justify-center items-center'>
                            <AiOutlineCamera size={30} color='#388091'></AiOutlineCamera>
                        </div>
                        {
                            imgUrlTitleDescription.length > 0 && <div className='border-2 px-2 divide-y-2'>
                                {
                                    imgUrlTitleDescription.map(urlTitleBox => <div key={urlTitleBox.url} className='flex py-2 justify-between items-center w-full h-20 gap-3 md:gap-0'>
                                        <img className='w-20 h-full rounded-b-lg rounded-tr-lg' src={urlTitleBox.url} alt="" />
                                        <h2 className='grow ml-2 text-lg font-medium '>{urlTitleBox.title}</h2>
                                        <p className='text-blue-400 cursor-pointer' onClick={() => handleRemoveImage(urlTitleBox)}>remove</p>
                                    </div>)
                                }
                            </div>
                        }
                        <AddPhotoModal setImgUrlTitleDescription={setImgUrlTitleDescription} isOpen={isOpen} closeModal={closeModal}></AddPhotoModal>

                        <div className='flex gap-3'>
                            <button className='px-3 py-1 bg-green-500 hover:bg-green-600 rounded-md text-white font-bold' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default PostStory;