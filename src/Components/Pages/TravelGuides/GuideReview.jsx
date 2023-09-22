import React, { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import Rating from 'react-rating';
import useAuth from '../../../Hooks/useAuth';

const GuideReview = () => {
    const [rating, setRating] = useState(5);
    const [textareaValue, setTextareaValue] = useState("");
    console.log(rating, textareaValue)
    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    const { user } = useAuth()

    const handleAddReview = (event) => {
        event.preventDefault();
    }

    const handleCancel = (event) => {
        event.preventDefault();
        setTextareaValue("");
        setRating('')
    };

    const MIN_WORDS = 10;
    const isButtonDisabled = textareaValue.split(" ").filter((word) => word.trim() !== "").length < MIN_WORDS;

    return (
        <div>
            <div className="px-6 py-5 ">
                <h3 className="text-2xl tracking-widest font-semibold ">How Was Your Experience?</h3>
                <p className="my-3 text-lg">
                    Rating : <span className="text-red-500 font-bold">{rating}</span>
                </p>
                <Rating
                    emptySymbol={<BsStar size={30} color="red" />}
                    fullSymbol={<BsStarFill size={30} color="red" />}
                    fractions={2}
                    style={{ maxWidth: 200 }}
                    value={rating}
                    initialRating={rating}
                    onChange={setRating}
                    isRequired
                />
                <div className="mt-5">
                    <textarea
                        value={textareaValue}
                        onChange={handleTextareaChange}
                        id="review"
                        rows={4}
                        cols={50}
                        placeholder='How Was Your Experience'
                        className="textarea border-black textarea-lg w-full text-black"
                    ></textarea>
                    {textareaValue && textareaValue.split(" ").filter((word) => word.trim() !== "").length < MIN_WORDS && (
                        <p className="text-red-500 mt-2">Please write at least {MIN_WORDS} words in your review.</p>
                    )}
                </div>
                <div className="flex flex-row justify-between mt-4">
                    <button onClick={handleCancel} disabled={!textareaValue || isButtonDisabled} className={`${!textareaValue || isButtonDisabled ? "disabled bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50" : 'bg-[#79c7ff] hover:bg-[#66a5bd] px-4 py-2 rounded-md text-white'}`}>
                        Empty
                    </button>
                    <button onClick={handleAddReview} className={` ${isButtonDisabled ? "disabled bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50" : "bg-[#79c7ff] hover:bg-[#66a5bd] px-4 py-2 rounded-md text-white"}`}>
                        Submit Review
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GuideReview;