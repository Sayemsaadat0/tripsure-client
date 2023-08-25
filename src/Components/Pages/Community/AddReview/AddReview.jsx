import React, { useState } from "react";
import Container from "../../../../LayOut/Container";
import Rating from "react-rating";



const AddReview = () => {
  const [rating, setRating] = useState(3);
  const [textareaValue, setTextareaValue] = useState("");

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleCancle = (event) => {
    event.preventDefault();
    setTextareaValue("");
  };

  return (
    <Container>
      <div className="">
        <div className="w-4/5 sm:w-3/6 mx-auto my-20">
          <div className="border-2 border-gray-300 px-4 sm:px-6 py-4 sm:py-8 rounded-xl hover:shadow-2xl hover:border-none duration-200">
            <h3 className="text-3xl font-semibold">Rating and Review</h3>
            <p className="my-3 text-lg">Rating {rating}</p>
            <Rating
              style={{ maxWidth: 12 }}
              value={rating}
              onChange={setRating}
              isRequired
            />
            <div className="mt-5">
              <label className="label">
                <span>review</span>
              </label>
              <textarea
                value={textareaValue}
                onChange={handleTextareaChange}
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
              <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddReview;
