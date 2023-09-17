import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Container from '../../../../LayOut/Container';
import { useParams } from 'react-router';
import LazyLoad from 'react-lazy-load';
import { Carousel } from 'antd';




const FamilyGuideSingleCardDetails = () => {
    const [familyGuideDetails, setFamilyGuideDetails] = useState({});

    const { title,
        country,
        places_to_visit,
        postedTime,
        postedBy,
        introduction,
        tips,
        pictures,
        foods
    } = familyGuideDetails
    const { id } = useParams();
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_API}/familyDetails/${id}`)
            .then((res) => {
                setFamilyGuideDetails(res.data);
            })
    }, [id])

    /*   console.log('family details', id, familyGuideDetails); */
    return (
        <Container>
            <div className='md:mt-20 pt-16  md:p-5 p-2'>
                <div className='tracking-widest'>
                    <h3 className='text-3xl font-semibold'>{title}</h3 >
                    <div className='flex gap-5 mt-2'>
                        <p className='font-extralight text-sm'>{country}</p>
                        <p className='font-extralight text-sm'>{postedBy}</p>
                        <p className='font-extralight text-sm'>{postedTime}</p>
                    </div>
                </div>
                <p>{introduction}</p>


                {/* places to visit cards */}
                <h3 className='mt-10 font-bold text-xl'>Places To visit</h3>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{ clickable: true, }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 10, },
                        768: { slidesPerView: 2, spaceBetween: 20, },
                        1024: { slidesPerView: 3, spaceBetween: 30, },
                    }}
                    modules={[Pagination]}
                    className='mySwiper'>

                    {places_to_visit?.map((p, index) => (
                        <SwiperSlide className='lg:p-4 p-2' >
                            <Carousel autoplay>

                                {
                                    pictures.map((photo, index) => <LazyLoad>
                                        <img className='rounded-lg ' key={index} src={photo} alt="" />
                                    </LazyLoad>)
                                }

                            </Carousel>
                            <div className="card card-compact relative ">
                                <div className="card-body">
                                    <h2 className="card-title">{p.name}</h2>
                                    <p>{p.description}</p>
                                    <p className='font-bold'>Places To Visit </p>
                                    <ul className='list-disc px-4'>
                                        {
                                            p.tips?.map((t, index) =>
                                                <li key={index}>{t}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <hr />

                {/* Tips */}
                <div className='lg:flex gap-4 mt-5'>
                    <h3 className='mt-10 mb-5 font-bold text-xl w-60'>Tips </h3>

                    {
                        tips?.map((t, index) => <div className='card border p-5 mb-3'  key={index}>
                            <p className='font-bold mb-4'> {t.title} </p>
                            <p > {t.description} </p>
                        </div>)
                    }

                </div>

                {/* Food */}

                <div className='lg:flex gap-4 mt-5'>
                    <h3 className='mt-10 mb-5 font-bold text-xl w-60'>Foods </h3>

                    {
                        foods?.map((t, index) => <div className='card border p-5 mb-3' key={index}>
                            <p className='font-bold mb-4'> {t.name} </p>
                            <p > {t.restaurant} </p>
                            <p > {t.address} </p>
                        </div>)
                    }

                </div>


            </div>
        </Container>
    );
};

export default FamilyGuideSingleCardDetails;