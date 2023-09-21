 import React, { useState } from "react";
import Container from "../../../../LayOut/Container";
import Rating from "react-rating";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BsStar, BsStarFill } from "react-icons/bs";
import PageTitle from "../../../PageTitle/PageTitle";

const AddReview = () => {
  const [rating, setRating] = useState(5); 
  const [textareaValue, setTextareaValue] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();
  const MIN_WORDS = 10;

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleAddReview = () => {
    const review = {
      rating,
      textareaValue,
      user,
    };

   
    if (textareaValue.split(" ").filter((word) => word.trim() !== "").length < MIN_WORDS) {
      Swal.fire({
        icon: "error",
        title: "Please write at least 50 words in your review.",
        showConfirmButton: false,
        timer: 1500,
      });
      return; 
    }

    fetch(`${import.meta.env.VITE_BACKEND_API}/addReview/${user.email}`, {
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
            title: "Thanks, Your Review added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setTextareaValue("");
        setRating(5);
        navigate("/");
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setTextareaValue("");
  };

  const isButtonDisabled = textareaValue.split(" ").filter((word) => word.trim() !== "").length < MIN_WORDS;

  return (
    <Container>
      <PageTitle title="Add Review"/>
      <div className="min-h-screen md:flex justify-around items-center">
        <div className=" flex justify-center mt-20 md:mt-0">
          <img className="w-3/4" src="https://i.ibb.co/2YzNmXy/We-wab-Feedback-2.gif" alt="" />
        </div>

        <div className=" p-10">
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
              initialRating={5}
              onChange={setRating}
              isRequired
            />
            <div className="mt-5">
              <label className="label">
                <span>Your Precious Comment</span>
              </label>
              <textarea
                value={textareaValue}
                onChange={handleTextareaChange}
                id="review"
                rows={4}
                cols={50}
                className="textarea border-black textarea-lg w-full text-black"
              ></textarea>
              {textareaValue && textareaValue.split(" ").filter((word) => word.trim() !== "").length < MIN_WORDS && (
                <p className="text-red-500 mt-2">Please write at least {MIN_WORDS} words in your review.</p>
              )}
            </div>
            <div className="flex flex-row justify-between mt-4">
              <button disabled={!textareaValue || isButtonDisabled} onClick={handleCancel} className="btn-primary">
              Empty
              </button>
              <button onClick={handleAddReview} className={`btn ${isButtonDisabled ? "disabled" : ""}`}>
                Give Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddReview;


