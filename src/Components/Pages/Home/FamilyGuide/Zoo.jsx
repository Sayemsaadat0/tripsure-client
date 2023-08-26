import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Container from '../../../../LayOut/Container';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Zoo = () => {

  const [allZoo, setAllZoo] = useState([]);
 
  useEffect(()=>{
    axios.get(`https://tripsure-server-sayemsaadat0.vercel.app/allFamilyGuide/zoo`)
    .then((res)=>{
      setAllZoo(res.data)
    })
  },[])
  console.log(allZoo);

  return (
    <div >
      <Container>
      <h2 className='pt-10 ps-4 md:ps-10 text-2xl md:text-6xl font-bold'>Zoos</h2>
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
                  <figure><img className='rounded-lg' src="https://i.pinimg.com/736x/9d/93/08/9d9308a98680e14a64f98f1c3f22222c.jpg" alt="" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{item?.title}</h2>
                    <p>Country</p>
                    <p>PostedTime</p>
                    <div>
                      {/* todo habibullah- bhai id diye data aina diyen */}
                      <Link to={`/FamilyGuideSingleCardDetails/${item?._id}`} className="btn">Read More</Link>
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
