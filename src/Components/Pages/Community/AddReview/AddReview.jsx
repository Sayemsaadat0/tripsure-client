import React, { useState } from "react";
import Container from "../../../../LayOut/Container";
import Rating from "react-rating";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BsStar, BsStarFill } from "react-icons/bs";

const AddReview = () => {
  const [rating, setRating] = useState(5); // Set the default rating to 5
  const [textareaValue, setTextareaValue] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();
  const MIN_WORDS = 10; // Minimum required words

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleAddReview = () => {
    const review = {
      rating,
      textareaValue,
      user,
    };

    // Check if the textarea value has at least 50 words
    if (textareaValue.split(" ").filter((word) => word.trim() !== "").length < MIN_WORDS) {
      Swal.fire({
        icon: "error",
        title: "Please write at least 50 words in your review.",
        showConfirmButton: false,
        timer: 1500,
      });
      return; // Do not submit the review if the condition is not met
    }

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
            title: "Thanks, Your Review added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setTextareaValue("");
        setRating(5); // Reset the rating to 5 after submission
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
      <div className="min-h-screen md:flex justify-around items-center">
        <div className="md:w-1/2 flex justify-center mt-20 md:mt-0">
          <img className="w-3/4" src="https://i.ibb.co/2YzNmXy/We-wab-Feedback-2.gif" alt="" />
        </div>

        <div className="md:w-1/2 p-10">
          <div className="shadow-2xl px-6 py-5 border rounded-xl">
            <h3 className="text-3xl font-semibold sectionTitle">How Was Your Experience?</h3>
            <p className="my-3 text-lg">
              Scale : <span className="text-red-500 font-bold">{rating}</span>
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
              {textareaValue && textareaValue.split(" ").filter((word) => word.trim() !== "").length < MIN_WORDS && (
                <p className="text-red-500 mt-2">Please write at least {MIN_WORDS} words in your review.</p>
              )}
            </div>
            <div className="flex flex-row justify-between mt-4">
              <button disabled={!textareaValue || isButtonDisabled} onClick={handleCancel} className="btn-primary">
                Cancel
              </button>
              <button onClick={handleAddReview} className={`btn ${isButtonDisabled ? "disabled" : ""}`}>
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
