import React, { useState } from "react";
import Container from "../../../../LayOut/Container";
import Rating from "react-rating";

import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BsStar, BsStarFill } from 'react-icons/bs';

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [textareaValue, setTextareaValue] = useState("");
  const { user } = useAuth();
  const naviget = useNavigate();

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleAddReview = () => {
    const review = {
      rating,
      textareaValue,
      user,
    };
    console.log(review);
    fetch(`https://tripsure-server-sayemsaadat0.vercel.app/addReview/${user.email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount < 1) {
          Swal.fire({
            icon: "success",
            title: "Thanks, Your Review added Successful !",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setTextareaValue("");
        setRating("");
        naviget("/");
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  };

  const handleCancle = (event) => {
    event.preventDefault();
    setTextareaValue("");
  };

  return (
    <Container>
      <div className="min-h-screen md:flex justify-around items-center">
        <div className="md:w-1/2 flex justify-center mt-20 md:mt-0">
          <img className="w-3/4" src="https://i.ibb.co/2YzNmXy/We-wab-Feedback-2.gif" alt="" />
        </div>

        <div className="md:w-1/2 p-10 ">
          <div className=" shadow-2xl px-6 py-5 border  rounded-xl ">
            <h3 className="text-3xl font-semibold sectionTitle">How Was Your Experience?</h3>
            <p className="my-3 text-lg">Scale : <span className="text-red-500 font-bold">{rating}</span></p>
            <Rating
              emptySymbol={<BsStar size={30} color="red" />}
              fullSymbol={<BsStarFill size={30} color="red" />}
              fractions={2}
              style={{ maxWidth: 200 }}
              value={rating}
              initialRating={5}
              onChange={setRating}
              isRequired
            />
            <div className="mt-5">
              <label className="label">
                <span>Review</span>
              </label>
              <textarea
                value={textareaValue}
                onChange={handleTextareaChange}
                id="review"
                rows={4}
                cols={50}
                className="textarea border-black textarea-lg w-full text-black"
              ></textarea>
            </div>
            <div className="flex flex-row justify-between mt-4">
              <button
                disabled={textareaValue ? false : true}
                onClick={handleCancle}
                className="btn-primary"
              >
                Cancel
              </button>
              <button
                onClick={handleAddReview}
                className="btn "
              >
                Add review
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddReview;
