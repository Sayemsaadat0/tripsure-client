import React, { useState } from 'react';
import ShareModal from '../../../Modal/ShareModal';
import { GrFormClose } from 'react-icons/gr'
import { useForm } from "react-hook-form"

const AddResturentMenu = ({ isOpenFoodMenu, setIsOpenFoodMenu, setFoodMenuItems }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [menuItem, setMenuItem] = useState([{ description: '', category: '', name: '', price: '' }]);
console.log(menuItem)
    const onSubmit = (data) => {
        setFoodMenuItems(menuItem)
        setIsOpenFoodMenu(false)
    }

    const handleAddMoreFood = () => {
        setMenuItem(previous => [...previous, { description: '', category: '', name: '', price: '' }]);
    }

    const handleRemoveFood = (index) => {
        const remainingPairs = menuItem.filter((pair, pairIndex) => pairIndex !== index);
        setMenuItem(remainingPairs);
    }

    const handleDescriptionChange = (index, value) => {
        const updatedPairs = menuItem.map((pair, pairIndex) => {
            if (pairIndex === index) {
                return { ...pair, description: value };
            }
            return pair;
        });
        setMenuItem(updatedPairs);
    }

    const handleCategoryChange = (index, value) => {
        const updatedPairs = menuItem.map((pair, pairIndex) => {
            if (pairIndex === index) {
                return { ...pair, category: value };
            }
            return pair;
        });
        setMenuItem(updatedPairs);
    }

    const handleNameChange = (index, value) => {
        const updatedPairs = menuItem.map((pair, pairIndex) => {
            if (pairIndex === index) {
                return { ...pair, name: value };
            }
            return pair;
        });
        setMenuItem(updatedPairs);
    }

    const handlePriceChange = (index, value) => {
        const updatedPairs = menuItem.map((pair, pairIndex) => {
            if (pairIndex === index) {
                return { ...pair, price: value };
            }
            return pair;
        });
        setMenuItem(updatedPairs);
    }

    return (
        <div>
            <ShareModal isOpen={isOpenFoodMenu} setIsOpen={setIsOpenFoodMenu} title={'Add food '}>
                <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                    {
                        menuItem.map((pair, index) => (
                            <div className='relative' key={index}>
                                <div className="space-y-1 text-sm mb-5">
                                    <label htmlFor={`name-${index}`} className="block text-gray-600 mb-2">
                                        Food Name
                                    </label>
                                    <input
                                        className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                                        type="text"
                                        required
                                        placeholder="name"
                                        value={menuItem[index].name} // Updated line
                                        onChange={(e) => handleNameChange(index, e.target.value)}
                                    />
                                </div>

                                <div className="space-y-1 text-sm mb-5">
                                    <label htmlFor={`price-${index}`} className="block text-gray-600 mb-2">
                                        Food Price
                                    </label>
                                    <input
                                        className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                                        type="number"
                                        required
                                        placeholder="price"
                                        value={menuItem[index].price} // Updated line
                                        onChange={(e) => handlePriceChange(index, e.target.value)}
                                    />
                                </div>

                                <div className="space-y-1 text-sm mb-5">
                                    <label htmlFor={`category-${index}`} className="block text-gray-600 mb-2">
                                        Category
                                    </label>
                                    <input
                                        className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                                        type="text"
                                        required
                                        placeholder="category"
                                        value={menuItem[index].category} // Updated line
                                        onChange={(e) => handleCategoryChange(index, e.target.value)}
                                    />
                                </div>

                                <div className="space-y-1 text-sm mb-5">
                                    <label htmlFor={`description-${index}`} className="block text-gray-600 mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        required
                                        className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-cyan-300 focus:outline-cyan-500 "
                                        value={menuItem[index].description} // Updated line
                                        onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                    ></textarea>
                                </div>
                                <GrFormClose onClick={() => handleRemoveFood(index)} size={30} className='absolute top-2 right-2 cursor-pointer'></GrFormClose>
                            </div>
                        ))
                    }
                    <div className='divider'></div>
                    <div className='flex items-center justify-between'>
                        <span onClick={handleAddMoreFood} className='px-2 cursor-pointer py-1 border text-white rounded-md bg-gray-500 '>Add More</span>
                        {
                            menuItem.length > 0 && <button type='submit' className={`px-2 py-1 border text-white rounded-md bg-black`}>Submit</button>
                        }
                    </div>
                </form>
            </ShareModal>
        </div>
    );
};

export default AddResturentMenu;
