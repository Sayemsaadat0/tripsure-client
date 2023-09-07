import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Container from '../../../../LayOut/Container';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowTurnUp } from "react-icons/fa6";

const Zoo = () => {

  const [allZoo, setAllZoo] = useState([]);
 
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_API}/allFamilyGuide/zoo`)
    .then((res)=>{
      setAllZoo(res.data)
    })
  },[])
  console.log(allZoo);

  return (
    <div >
      <Container>
      <h2 className='pt-10  text-2xl md:text-3xl text-center font-semibold underline underline-offset-2 tracking-widest'>Wildlife Sanctuary</h2>
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
            {allZoo.map((item, index) => (
              <SwiperSlide key={index} className='lg:p-10' >
                <div className="card card-compact bg-white shadow-2xl relative ">
                  <figure><img className='rounded-lg h-40 w-full  object-cover' src="https://i.pinimg.com/736x/9d/93/08/9d9308a98680e14a64f98f1c3f22222c.jpg" alt="" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{item?.title}</h2>
                    <p>Country : {item.country}</p>
                    
                    <div>
                      <Link to={`/FamilyGuideSingleCardDetails/${item?._id}`} className="btn-link text-blue-500 flex items-center gap-1">Read More <FaArrowTurnUp></FaArrowTurnUp></Link>
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

export default Zoo;
