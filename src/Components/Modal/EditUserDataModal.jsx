import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { findUserbyEmail, updateUserDeatails } from '../../apiCall/users';
import useAuth from '../../Hooks/useAuth';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

const EditUserDataModal = ({ closeModal, isOpen }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [userDetails, setUserDetails] = useState({})
    const { user } = useAuth()
    const [selectedOption, setSelectedOption] = useState(null);

    const comfortableLanguage = selectedOption
    const onSubmit = (data) => {
        const { phone, gender, countryName, birthDate, bio } = data
        const updateDeatails = { phone, gender, countryName, comfortableLanguage, birthDate, bio }
        console.log(updateDeatails)
        updateUserDeatails(user.email, updateDeatails)
        // closeModal()
    }

    const { countryName, gender, phone, birthDate, bio } = userDetails
    useEffect(() => {
        if (user) {
            findUserbyEmail(user.email).then(data => setUserDetails(data))
        }
    }, [user])

    const options = [
        { value: 'Bangla', label: 'Bangla' },
        { value: 'Arabic', label: 'Arabic' },
        { value: 'Russian', label: 'Russian' },
        { value: 'English', label: 'English' },
        { value: 'Hindi', label: 'Hindi' },
    ];

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

                    <div className="fixed overflow-y-auto inset-0">
                        <div className="flex  min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg h-full transform overflow-y-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 mb-6"
                                    >
                                        Edit Your Details
                                    </Dialog.Title>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your country</label>
                                        <div className="mb-4">
                                            <input
                                                defaultValue={countryName}
                                                type="text"
                                                name="country"
                                                placeholder='Country Name'
                                                {...register('countryName', { required: 'Country Name is required' })}
                                                className='w-full border text-[#2d969e] border-gray-300 px-3 py-2 rounded-md focus:outline-none ring-[#0184A4] focus:ring-1 placeholder-[#2d969e] ring-offset- focus:border-[#0184A4]'
                                            />
                                            {errors.countryName && (
                                                <span className="text-red-500 text-sm">{errors.countryName.message}</span>
                                            )}
                                        </div>
                                        <div className='md:flex gap-3 '>
                                            <div className="w-full mb-4">
                                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your phone</label>
                                                <input
                                                    defaultValue={phone}
                                                    type="text"
                                                    name="phone"
                                                    placeholder='Enter Phone'
                                                    {...register('phone', { required: 'phone is required' })}
                                                    className='w-full border text-[#2d969e] border-gray-300 px-3 py-2 rounded-md focus:outline-none ring-[#0184A4] focus:ring-1 placeholder-[#2d969e] ring-offset- focus:border-[#0184A4]'
                                                />
                                                {errors.phone && (
                                                    <span className="text-red-500 text-sm">{errors.phone.message}</span>
                                                )}
                                            </div>
                                            <div className="w-full mb-4">
                                                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your gender</label>
                                                <select
                                                    defaultValue={gender}
                                                    className='w-full border text-[#2d969e] border-gray-300 px-3 py-2 rounded-md focus:outline-none ring-[#0184A4] focus:ring-1 placeholder-[#2d969e] ring-offset- focus:border-[#0184A4]'
                                                    {...register("gender")}
                                                >
                                                    <option value="female">female</option>
                                                    <option value="male">male</option>
                                                    <option value="other">other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='w-full mb-4'>
                                            <label htmlFor="Speaks" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"> Speaks Language</label>
                                            <CreatableSelect
                                            required
                                                defaultValue={selectedOption}
                                                onChange={setSelectedOption}
                                                options={options}
                                                isMulti
                                            />
                                        </div>
                                        <div className='w-full mb-4'>
                                            <label htmlFor="birth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"> Birth date</label>
                                            <input defaultValue={birthDate}  {...register("birthDate")} className='w-full border text-[#2d969e border-gray-300 px-3 py-2 rounded-md focus:outline-none ring-[#0184A4] focus:ring-1 placeholder-[#2d969e] ring-offset- focus:border-[#0184A4]' type="date" name="" id="" />
                                        </div>
                                        <div className='w-full mb-4'>
                                            <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your bio</label>
                                            <textarea id="bio" rows="4" defaultValue={bio} className="w-full border text-[#2d969e] border-gray-300 px-3 py-2 rounded-md focus:outline-none ring-[#0184A4] focus:ring-1 placeholder-[#2d969e] ring-offset- focus:border-[#0184A4]" {...register("bio", { required: true, minLength: 100 })} placeholder="Bio..."></textarea>
                                            <label htmlFor="bio" className=" text-right block mb-2 text-sm  text-gray-900 dark:text-gray-400">Minimum 100 </label>
                                        </div>
                                        <div className="mt-4">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-"
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