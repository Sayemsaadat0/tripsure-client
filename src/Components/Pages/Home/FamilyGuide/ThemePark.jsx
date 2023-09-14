import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Container from '../../../../LayOut/Container';
import axios from 'axios';
import { FaArrowTurnUp } from "react-icons/fa6";
import { Carousel } from 'antd';
import { useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';

const ThemePark = () => {

  const [allThemePark, setAllThemePark] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_API}/allFamilyGuide/theme%20park`)
      .then((res) => {
        setAllThemePark(res.data)
      })
  }, [])


  return (
    <div >
      <Container>
        <h2 className='pt-10  text-2xl md:text-3xl text-center font-semibold underline underline-offset-2 tracking-widest'>ThemeParks</h2>
        <div >

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
            className='mySwiper'
          >
            {allThemePark.map((item, index) => (
              <SwiperSlide key={index} className='lg:p-10' >
                <div className="card card-compact bg-white relative ">
                  <Carousel autoplay>

                    {
                      item.pictures.map((picture, index) => (
                        <LazyLoad>
                          <img className='rounded-lg h-40 w-full object-cover' key={index} src={picture} alt="" />
                        </LazyLoad>
                      ))
                    }

                  </Carousel>
                  <div className="my-4">
                    <h2 className="card-title">{item?.title}</h2>
                    <p>{item.Country}</p>
                    <div className="card-actions justify-start">
                      <Link
                        to={`/FamilyGuideSingleCardDetails/${item?._id}`}
                        className="btn-link text-blue-500 flex justify-center items-center gap-1">
                        Read More <FaArrowTurnUp></FaArrowTurnUp>
                      </Link>
                    </div>


                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default ThemePark;
