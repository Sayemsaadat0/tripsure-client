import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import Rating from 'react-rating';
import { BsStar, BsStarFill } from 'react-icons/bs';

const GivingReview = ({title}) => {
    const [rating, setRating] = useState(5);
    const [textareaValue, setTextareaValue] = useState("");
    const {user} = useAuth()
    console.log(rating, textareaValue)
  
    const handleTextareaChange = (event) => {
      setTextareaValue(event.target.value);
    };
  
    const handleAddReview = (event) => {
      event.preventDefault();
      const review = {
        userName: user.displayName,
        userEmail: user.email,
        userPhoto: user.photoURL,
        rating,
        textareaValue,
        title
      }
      console.log(review)
      fetch(`${import.meta.env.VITE_BACKEND_API}/addReview/${user.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            Swal.fire({
              icon: "success",
              title: "Thanks, Your Review added Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          setTextareaValue("");
          setRating(5);
          console.log(data);
        })
        .catch((err) => console.log(err.message));
    }
  
    const MIN_WORDS = 10;
    const isButtonDisabled = textareaValue.split(" ").filter((word) => word.trim() !== "").length < MIN_WORDS;
    return (
        <div>
            <div className='max-w-2xl w-full'>
                <div className="px-6 py-5 ">
                    <h3 className="text-2xl tracking-widest font-semibold ">Give a feedback</h3>
                
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
                            rows={2}
                            cols={50}
                            placeholder='add a feedback'
                            className="textarea border-black textarea-lg w-full text-black"
                        ></textarea>
                        {textareaValue && textareaValue.split(" ").filter((word) => word.trim() !== "").length < MIN_WORDS && (
                            <p className="text-red-500 mt-2">Please write at least {MIN_WORDS} words in your review.</p>
                        )}
                    </div>
                    <div className="flex flex-row justify-between mt-4">
                        <button onClick={handleAddReview} className={` ${isButtonDisabled ? "disabled bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50" : "bg-[#79c7ff] hover:bg-[#66a5bd] px-4 py-2 rounded-md text-white"}`}>
                            Submit Review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GivingReview;