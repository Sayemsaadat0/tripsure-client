import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { AiOutlineCamera } from 'react-icons/ai'
import { imageUpload } from '../../../../api/utilities'
import { GrFormClose } from 'react-icons/gr'

const AddPhotoModal = ({ isOpen, closeModal, setImgUrlTitleDescription }) => {
    const [newImage, setNewImage] = useState(null)
    const [imageUrlWithTitle, setImageUrlWithTitle] = useState([])
    useEffect(() => {
        if (newImage) {
            imageUpload(newImage)
                .then(data => {
                    const url = data.data.display_url
                    // setImageUrl(previousUrl => [...previousUrl, url])
                    setImageUrlWithTitle(prevImages => [...prevImages, { url, title: "", desceription: "" }]);
                    setNewImage(null)
                })
        }
    }, [newImage])

    const handleRemoveImage = (imageToRemove) => {
        console.log(imageToRemove)
        setImageUrlWithTitle((prevImages) => prevImages.filter((image) => image !== imageToRemove));
        // const remainingImgTitle = imageUrlWithTitle.filter((image) => image !== imageToRemove)
        // setImageUrlWithTitle(remainingImgTitle)

    };

    const handleTitleChange = (imageIndex, title) => {
        setImageUrlWithTitle(prevImages => {
            const updatedImages = [...prevImages];
            updatedImages[imageIndex].title = title;
            return updatedImages;
        });
    };

    const handleDescriptionChange = (imageIndex, desceription) => {
        setImageUrlWithTitle(prevImages => {
            const updatedImages = [...prevImages];
            updatedImages[imageIndex].desceription = desceription;
            return updatedImages;
        });
    };

    const handleUpload = () => {
        setImgUrlTitleDescription(imageUrlWithTitle);
        console.log(imageUrlWithTitle)
        closeModal()
    };

    const isTitleValid = (title, desceription) => {
        return title.length >= 10 && desceription.length >= 10
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-3xl min-h-[200px] h-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Add Photo
                                    </Dialog.Title>

                                    <div>
                                        {
                                            imageUrlWithTitle.length > 0 ?
                                                imageUrlWithTitle.map((image, index) => <div key={index} className='flex h-[200px] gap-4 mb-4 border-2  p-2 rounded hover:border-gray-300 shadow relative'>
                                                    <div className='h-full w-1/3'>
                                                        <img className='h-full w-full' src={image.url} alt="" />
                                                    </div>
                                                    <div className='w-1/2 mt-5'>
                                                        <div className=''>
                                                            {/* <label htmlFor="title">Title (required)</label> */}
                                                            <input
                                                                type='text'
                                                                value={image.title}
                                                                onChange={(event) => handleTitleChange(index, event.target.value)}
                                                                placeholder='Summarize your experience'
                                                                className='rounded-md w-full border-2 border-gray-400 py-1 px-2' />
                                                            <label className="label justify-end">
                                                                <span className="label-text-alt">minimum 10 characters</span>
                                                            </label>
                                                        </div>
                                                        <div className=' mb-3'>
                                                            {/* <label htmlFor="title"> image description </label> */}
                                                            <textarea
                                                                onChange={(event) => handleDescriptionChange(index, event.target.value)}
                                                                placeholder='What were some things you enjoyed about this experience? How can it be improved?' className='rounded-md w-full border-2 border-gray-400 py-1 px-2'></textarea>
                                                            <label className="label justify-end">
                                                                <span className="label-text-alt">minimum 50 characters</span>
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <GrFormClose onClick={() => handleRemoveImage(image)} size={30} className='absolute top-2 right-2 cursor-pointer'></GrFormClose>
                                                </div>)
                                                : <div className='h-full w-full flex justify-center  items-center'>
                                                    <label>
                                                        <input
                                                            onChange={event => { setNewImage(event.target.files[0]) }}
                                                            className='text-sm cursor-pointer hidden'
                                                            type='file' name='image' accept='image/*' hidden
                                                        />
                                                        <div className='w-fit  rounded-md px-3 py-2 border-2 border-dashed border-gray-400 flex justify-center items-center'>
                                                            <AiOutlineCamera size={30} color='#388091'></AiOutlineCamera>
                                                        </div>
                                                    </label>
                                                </div>
                                        }
                                        {
                                            imageUrlWithTitle.length > 0 && <div>
                                                <div className='divider'></div>
                                                <div className='flex justify-between items-center '>
                                                    <label>
                                                        <input
                                                            disabled={imageUrlWithTitle.some(image => !isTitleValid(image.title, image.desceription))}
                                                            onChange={event => { setNewImage(event.target.files[0]) }}
                                                            className='text-sm cursor-pointer hidden'
                                                            type='file' name='image' accept='image/*' hidden
                                                        />
                                                        <div
                                                            className={`w-fit rounded-md px-3 py-1 border-2 cursor-pointer border-gray-400 ${imageUrlWithTitle.some(image => !isTitleValid(image.title, image.desceription)) ? 'opacity-50 pointer-events-none' : ''}`}
                                                        >
                                                            Add More Photo
                                                        </div>
                                                    </label>
                                                    <button
                                                        className={`px-3 py-1 bg-black text-white 
                                                        ${imageUrlWithTitle.some(image => !isTitleValid(image.title, image.desceription)) ? 'bg-gray-300' : ''}`}
                                                        onClick={handleUpload}
                                                        disabled={!imageUrlWithTitle.every(image => isTitleValid(image.title, image.desceription))}
                                                    >
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default AddPhotoModal