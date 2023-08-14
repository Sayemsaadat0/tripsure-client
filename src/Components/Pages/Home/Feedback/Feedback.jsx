import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Container from '../../../../LayOut/Container';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null); // Changed to null

    useEffect(() => {
        fetch('Feedback.json')
            .then(res => res.json())
            .then(data => setFeedbacks(data));
    }, []);

    const openModal = (review) => {
        setSelectedReview(review);
        const modal = document.getElementById('my_modal_3');
        modal.showModal();
    };

    return (
        <div className=''>
            <Container>
                <div className=' p-10'>
                    <SectionTitle
                        subText={'Testimonials'}
                        text={'What Our clients Say About Us'}
                    ></SectionTitle>
                    <p className='text-right mb-2'>Total Feedback : {feedbacks.length}</p>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Pagination]}
                        className='mySwiper'>

                        {feedbacks.map((feedback, index) => (
                            <SwiperSlide className='px-2 ' key={index}>
                                <div className='card border border-black  mb-16'>
                                    <div className='card-body m-0 p-0 '>
                                        <div className='px-3 mt-5'>
                                            <img className='h-20 w-20 rounded-full' src={feedback.picture} alt='' />
                                        </div>
                                        <div className='px-3'>
                                            <h2 className='font-bold'>{feedback.name}</h2>
                                            <h2 className='font-light'>{feedback.destination}</h2>
                                            <p>{feedback.review.split(' ').slice(0, 15).join(' ')}</p>
                                            {feedback.review.split(' ').length > 15 && (
                                                <button className='p-0 text-blue-900 btn btn-link ' onClick={() => openModal(feedback)}>
                                                    Read more
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Modal */}
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-red-500" onClick={() => setSelectedReview(null)}>✕</button>
                        {selectedReview && (
                            <>
                                <h3 className="font-bold text-lg">Testimonials</h3>
                                <div className="flex justify-center mt-5">
                                    <img className='h-20 w-20 rounded-full' src={selectedReview.picture} alt='' />
                                </div>
                                <p className="py-4">{selectedReview.review}</p>
                            </>
                        )}
                    </form>
                </dialog>
            </Container>
        </div>
    );
};

export default Feedback;
