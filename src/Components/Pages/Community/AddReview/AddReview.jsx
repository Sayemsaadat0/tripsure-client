import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import Container from "../../../../LayOut/Container";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
      textareaValue ,
      user,
    };
    console.log(review);
    fetch(`http://localhost:1000/addReview/${user.email}`, {
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
            position: "top",
            icon: "success",
            title: "Thanks, Your Review added Successful !",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setTextareaValue("");
        setRating("");
        // naviget("/");
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
      <div className="">
        <div className="w-4/5 sm:w-3/6 mx-auto my-20">
          <div className="border-2 border-gray-300 px-4 sm:px-6 py-4 sm:py-8 rounded-xl hover:shadow-xl hover:border-none duration-200">
            <h3 className="text-3xl font-semibold">Rating and Review</h3>
            <p className="my-3 text-lg">Rating {rating}</p>
            <Rating
              style={{ maxWidth: 180 }}
              value={rating}
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
                className="textarea textarea-primary textarea-lg w-full text-black"
              ></textarea>
            </div>
            <div className="flex flex-row justify-between mt-4">
              <button
                disabled={textareaValue ? false : true}
                onClick={handleCancle}
                className="btn  btn-xs sm:btn-sm md:btn-md "
              >
                Cancel
              </button>
              <button
                onClick={handleAddReview}
                className="btn btn-primary  btn-xs sm:btn-sm md:btn-md"
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
