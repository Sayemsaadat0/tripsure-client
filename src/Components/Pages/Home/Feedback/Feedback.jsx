import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Container from "../../../../LayOut/Container";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import Rating from "react-rating";
import { BsStar, BsStarFill } from 'react-icons/bs';
import LazyLoad from "react-lazy-load";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);


  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API}/addReview`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data)
      })
      .catch((err) => console.log(err.message));
  }, []);

  const openModal = (review) => {
    setSelectedReview(review);
    const modal = document.getElementById("my_modal_3");
    modal.showModal();
  };
  return (
    <Container>
      <SectionTitle
        subText={"Testimonials"}
        text={"What Our clients Say"}>
      </SectionTitle>
      <p className="text-right mb-2">Total Feedback : {feedbacks.length}</p>
      <section className='grid overflow-x-auto lg:grid-cols-4 gap-8 px-2 py-5 '>
        {feedbacks.map((feedback) => (
          <div key={feedback._id} className="card lg:mb-16">
            <div className="card-body m-0 p-0 h-72 ">
              <div className="p-3 flex justify-center">
                <img
                  className="h-20 w-20 rounded-full "
                  src={feedback?.user?.photoURL}
                  alt="Review user picture" />
              </div>
              <div className="px-3 text-center leading-7">
                <h2 className="font-bold">{feedback?.user?.displayName}</h2>
                <Rating
                  initialRating={feedback?.rating}
                  fullSymbol={<BsStarFill size={30} color="red" />}
                  emptySymbol={<BsStar size={30} color="red" />}
                  style={{ maxWidth: 200 }}
                  readonly />

                <p>{feedback?.textareaValue.split(" ").slice(0, 15).join(" ")}</p>
                {feedback?.textareaValue.split(" ").length > 15 && (
                  <button
                    className=" btn-link text-[#2a9f9f]"
                    onClick={() => openModal(feedback)}>Read more
                  </button>)}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal ">
        <form method="dialog" className="modal-box">
          <button
            className=" hover:text-white  btn-ghost absolute duration-500 right-2 top-2 hover:bg-red-500"
            onClick={() => setSelectedReview(null)}>
            ✕
          </button>
          {selectedReview && (
            <div className="">
              <h3 className="font-bold text-lg">Testimonials</h3>
              <div className="flex justify-center mt-5">
                <LazyLoad>
                  <img
                    className="h-20 w-20 rounded-full"
                    src={selectedReview?.user?.photoURL}
                    alt="Review user picture"
                  />
                </LazyLoad>
              </div>
              <h2 className="font-bold">{selectedReview.name}</h2>
              <h2 className="font-light">{selectedReview.destination}</h2>
              <p className="py-4">{selectedReview.textareaValue}</p>
            </div>
          )}
        </form>
      </dialog>
    </Container>
  );
};

export default Feedback;



