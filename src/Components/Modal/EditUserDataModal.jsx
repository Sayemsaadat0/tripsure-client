import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { findUserbyEmail, updateUserDeatails } from '../../apiCall/users';
import useAuth from '../../Hooks/useAuth';

const EditUserDataModal = ({ closeModal, isOpen }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [userDetails, setUserDetails] = useState({})
    const {user} = useAuth()

    const onSubmit = (data) => {
        const {phone, gender, countryName} = data
        const updateDeatails = {phone, gender, countryName}
        console.log(data)
        updateUserDeatails(user.email, updateDeatails )
        closeModal()
    }

    const { countryName, gender, phone } = userDetails
    useEffect(() => {
        if (user) {
            findUserbyEmail(user.email).then(data => setUserDetails(data))
        }
    }, [user])

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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Payment successful
                                    </Dialog.Title>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-4">
                                            <input
                                                defaultValue={countryName}
                                                type="text"
                                                name="country"
                                                placeholder='Country Name'
                                                {...register('countryName', { required: 'Country Name is required' })}
                                                className='w-full border text-[#2d969e] border-gray-300 px-3 py-2 rounded-md focus:outline-none ring-[#6bccd3] focus:ring-2 placeholder-[#2d969e] ring-offset-2 focus:border-blue-500'
                                            />
                                            {errors.countryName && (
                                                <span className="text-red-500 text-sm">{errors.countryName.message}</span>
                                            )}
                                        </div>
                                        <div className='md:flex gap-3 '>
                                            <div className="w-full mb-4">
                                                <input
                                                defaultValue={phone}
                                                    type="text"
                                                    name="phone"
                                                    placeholder='Enter Phone'
                                                    {...register('phone', { required: 'phone is required' })}
                                                    className='w-full border text-[#2d969e] border-gray-300 px-3 py-2 rounded-md focus:outline-none ring-[#6bccd3] focus:ring-2 placeholder-[#2d969e] ring-offset-2 focus:border-blue-500'
                                                />
                                                {errors.phone && (
                                                    <span className="text-red-500 text-sm">{errors.phone.message}</span>
                                                )}
                                            </div>
                                            <div className="w-full mb-4">

                                                <select
                                                defaultValue={gender}
                                                    className='w-full border text-[#2d969e] border-gray-300 px-3 py-2 rounded-md focus:outline-none ring-[#6bccd3] focus:ring-2 placeholder-[#2d969e] ring-offset-2 focus:border-blue-500'
                                                    {...register("gender")}
                                                >
                                                    <option value="female">female</option>
                                                    <option value="male">male</option>
                                                    <option value="other">other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default EditUserDataModal