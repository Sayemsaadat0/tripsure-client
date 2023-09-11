import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Rating from "react-rating";
import { BsStar, BsStarFill, BsQuote } from 'react-icons/bs';
import LazyLoad from "react-lazy-load";

const GuidesReview = () => {
    const [GuidesReviews, setGuidesReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);


    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_API}/addReview`)
            .then((res) => res.json())
            .then((data) => {
                setGuidesReviews(data)
            })
            .catch((err) => console.log(err.message));
    }, []);

    const openModal = (review) => {
        setSelectedReview(review);
        const modal = document.getElementById("my_modal_3");
        modal.showModal();
    };
    return (
        <> 
            <section className="my-2 w-80">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Navigation]}
                    className="mySwiper"
                    onSlideChange={() => console.log("slide change")}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}>
                    {GuidesReviews.map((GuidesReview) => (
                        <SwiperSlide >
                            <div key={GuidesReview._id} className="card mb-16 border py-4 h-56">
                                <div className="card-body m-0 p-0 h-72 ">

                                    <div className="px-3  leading-7">

                                        <p className=""><BsQuote></BsQuote>{GuidesReview?.textareaValue.split(" ").slice(0, 15).join(" ")}</p>
                                        {GuidesReview?.textareaValue.split(" ").length > 15 && (
                                            <button
                                                className=" btn-link text-[#2a9f9f]"
                                                onClick={() => openModal(GuidesReview)}>more
                                            </button>)}

                                        <div className="px-0 py-3 flex gap-2">
                                            <LazyLoad>
                                                <img
                                                    className="h-10 w-10 rounded-full "
                                                    src={GuidesReview?.user?.photoURL}
                                                    alt="Review user picture" />
                                            </LazyLoad>
                                            <div>
                                                <h2 className="font-semibold">{GuidesReview?.user?.displayName}</h2>
                                                <p>August 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>


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
                                <img
                                    className="h-20 w-20 rounded-full"
                                    src={selectedReview?.user?.photoURL}
                                    alt="Review user picture"
                                />
                            </div>
                            <h2 className="font-bold">{selectedReview.name}</h2>
                            <h2 className="font-light">{selectedReview.destination}</h2>
                            <p className="py-4 "><BsQuote className="text-xl"></BsQuote> {selectedReview.textareaValue}</p>
                        </div>
                    )}
                </form>
            </dialog>
        </>
    );
};

export default GuidesReview;



