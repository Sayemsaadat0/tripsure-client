import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Container from '../../../../LayOut/Container';
import axios from 'axios';
import { useEffect, useState } from 'react';

const HoneyMoons = () => {

  const [allHoneyMoons, setAllHoneyMoons] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:1000/allFamilyGuide/honeymoon`)
    .then((res)=>{
      setAllHoneyMoons(res.data)
    })
  },[])
  console.log(allHoneyMoons);

  return (
    <div >
      <Container>
      <h2 className='pt-10 ps-4 md:ps-10 text-2xl md:text-6xl font-bold'>HoneyMoonss</h2>
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
            {/* {packages.map((packageItem, index) => ( */}
              <SwiperSlide className='lg:p-10' >
                <div className="card card-compact bg-white shadow-2xl relative ">
                  <figure><img className='rounded-lg' src="https://i.pinimg.com/736x/9d/93/08/9d9308a98680e14a64f98f1c3f22222c.jpg" alt="" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Title</h2>
                    <p>Country</p>
                    <p>PostedTime</p>
                    <div>
                      {/* todo habibullah- bhai id diye data aina diyen */}
                      <Link className="btn">Read More</Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            {/* ))} */}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default HoneyMoons;
