import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Container from '../../../../LayOut/Container';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';


const TopDestinations = () => {
  const [TopDestinatins, setTopDestinatins] = useState([]);

  useEffect(() => {
    fetch("TopThignsTodo.json")
      .then((res) => res.json())
      .then((data) => setTopDestinatins(data));
  }, []);
    return (
        <Container>
          <div className='bg-white b my-20 '>
          <div>
         <SectionTitle text={"Unveiling the Worlds Most Captivating Escapes"}
         subText={""}
         ></SectionTitle>
          </div>
           <div>
           <Swiper
       slidesPerView={1}
       spaceBetween={10}
       modules={[Navigation]} className="mySwiper"
       navigation={true}
       onSlideChange={() => console.log('slide change')}
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
           slidesPerView: 4,
           spaceBetween: 30,
         },
       }}
       onSwiper={(swiper) => console.log(swiper)}
    >
        {
             TopDestinatins.map((todo,index)=>(
             
             
              <SwiperSlide key={index}>
                <div>
                <img className='h-64 w-full relative  object-cover' src={todo.imageURL} alt="" />
                <h2 className='absolute bottom-0 pb-3 pl-2  font-extrabold text-3xl text-white left-0 shadow-2xl  bg-gradient-to-t from-black'>{todo.item_name}</h2>
                </div>
              </SwiperSlide>
             
             
              ))   
            }
     

     
    </Swiper>
           </div>
        </div>
        </Container>
    );
};

export default TopDestinations;