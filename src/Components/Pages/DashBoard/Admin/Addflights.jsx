import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { TbFidgetSpinner } from "react-icons/tb"
import moment from 'moment';
import axios from 'axios';
const Addflights = () => {
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        const { airline, arrival_airport, arrival_code, arrival_country, arrival_time, business_price, departure_airport, departure_code, departure_country, departure_time, economy_price, flight_number, frist_class_price, route } = data
        // get total time
        const departureMoment = moment(departure_time, "YYYY-MM-DD HH:mm");
        const arrivalMoment = moment(arrival_time, "YYYY-MM-DD HH:mm");
        const duration = moment.duration(arrivalMoment.diff(departureMoment));
        const totalHours = duration.hours();
        const totalMinutes = duration.minutes();
        const total_time = `${totalHours} hours ${totalMinutes} minutes`;
        console.log(total_time)

        const flighs = {
            flight_number,
            airline,
            route,
            departure_airport: {
                code: departure_code,
                name: departure_airport,
                country: departure_country,
            },
            arrival_airport: {
                code: arrival_code,
                name: arrival_airport,
                country: arrival_country,
            },
            departure_time,
            arrival_time,
            total_time,
            prices: {
                economy: economy_price,
                business: business_price,
                first_class: frist_class_price
            }
        }
        axios.post(`${import.meta.env.VITE_BACKEND_API}/flights`, flighs)
       .then(res => {
        console.log(res)
       })
        console.log(flighs)
    };

    return (
        <div>
            <div className='bg-[#F3F4F6] min-h-[calc(100vh-100px)] w-full flex justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='max-w-xl w-full  bg-white p-2 md:p-6 lg:p-10'>
                    <div className="w-full mb-3 md:mb-4">
                        <label htmlFor="title" className="block mb-1 text-xs font-medium text-gray-600">
                            Route
                        </label>
                        <input
                            className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
                            type="text"
                            placeholder="Route"
                            {...register("route")}
                        />
                    </div>

                    <div className='flex flex-col gap-2 md:gap-4 md:flex-row mb-3 md:mb-4 '>
                        <div className="w-full">
                            <label htmlFor="title" className="block mb-1 text-xs font-medium text-gray-600">
                                Flight Number
                            </label>
                            <input
                                className="w-full max-w-sm px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
                                type="number"
                                placeholder="Flight Number"
                                {...register("flight_number")}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="title" className="block mb-1 text-xs font-medium text-gray-600">
                                Airline
                            </label>
                            <input
                                className="w-full max-w-sm px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
                                type="text"
                                placeholder="Airline"
                                {...register("airline")}
                            />
                        </div>
                    </div>
                    <h2 className='text-lg text-gray-600 mb-2 font-semibold text-center'>Departure Airport</h2>
                    <div className="w-full mb-3 md:mb-4">
                        <label htmlFor="title" className="block mb-1 text-xs font-medium text-gray-600">
                            Departure Airport
                        </label>
                        <input
                            className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
                            type="text"
                            placeholder="Departure Airport Name"
                            {...register("departure_airport")}
                        />
                    </div>
                    <div className='flex  gap-2 md:gap-4 flex-row mb-3 md:mb-4 '>
                        <div className="w-full">
                            <label htmlFor="title" className="block mb-1 text-xs font-medium text-gray-600">
                                Code
                            </label>
                            <input
                                className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
                                type="text"
                                placeholder="Code"
                                {...register("departure_code")}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="title" className="block mb-1 text-xs font-medium text-gray-600">
                                Country
                            </label>
                            <input
                                className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
                                type="text"
                                placeholder="Country"
                                {...register("departure_country")}
                            />
                        </div>

                    </div>
                    <div className="w-full mb-3 md:mb-4">
                        <label htmlFor="title" className="block mb-1 text-xs font-medium text-gray-600">
                            Time
                        </label>
                        <input
                            className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
                            type="datetime-local"
                            placeholder="Departure Time"
                            {...register("departure_time")}
                        />
                    </div>
                    <h2 className='text-lg text-gray-600 mb-2 font-semibold text-center'>Arrival Airport</h2>
                    <div className="w-full mb-3 md:mb-4">
                        <label htmlFor="title" className="block mb-1 text-xs font-medium text-gray-600">
                            Arrival Airport
                        </label>
                        <input
                            className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
                            type="text"
                            placeholder="Arrival Airport Name"
                            {...register("arrival_airport")}
                        />
                    </div>
                    <div className='flex  gap-2 md:gap-4 flex-row mb-3 md:mb-4 '>
                        <div className="w-full">
                            <label htmlFor="title" className="block mb-1 text-xs font-medium text-gray-600">
                                Code
                            </label>
                            <input
                                className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
                                type="text"
                                placeholder="Code"
                                {...register("arrival_code")}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="title" className="block mb-1 text-xs font-medium text-gray-600">
                                Country
                            </label>
                            <input
                                className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
                                type="text"
                                placeholder="Country"
                                {...register("arrival_country")}
                            />
                        </div>

                    </div>
                    <div className="w-full mb-3 md:mb-4">
                        <label htmlFor="title" className="block mb-1 text-xs font-medium text-gray-600">
                            Time
                        </label>
                        <input
                            className="w-full  px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
                            type="datetime-local"
                            placeholder="Arrival Time"
                            {...register("arrival_time")}
                        />
                    </div>
                    <h2 className='text-lg text-gray-600 mb-2 font-semibold text-center'>Price</h2>
                    <div className='flex gap-2 md:gap-4 flex-row mb-3 md:mb-4'>
                        <div className="w-full">
                            <label htmlFor="title" className="block mb-1 text-xs font-medium text-gray-600">
                                Economy
                            </label>
                            <input
                                className="w-full px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
                                type="number"
                                placeholder="Economy Price"
                                {...register("economy_price")}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="title" className="block mb-1 text-xs font-medium text-gray-600">
                                Business
                            </label>
                            <input
                                className="w-full px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
                                type="number"
                                placeholder="Business Price"
                                {...register("business_price")}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="title" className="block mb-1 text-xs font-medium text-gray-600">
                            Frist Class
                        </label>
                        <input
                            className="w-full px-1 sm:px-2 md:px-3 py-1 bg-[#F3F4F6] text-gray-800 border-2  focus:outline-cyan-600  rounded-md "
                            type="number"
                            placeholder="Frist Class Price"
                            {...register("frist_class_price")}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-cyan-500"
                    >
                        {loading ? (
                            <TbFidgetSpinner className="m-auto animate-spin" size={24} />
                        ) : (
                            "Save & Continue"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addflights;