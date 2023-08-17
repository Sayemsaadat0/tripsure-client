import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Container from "../../../../LayOut/Container";
import { Link } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const TopThingsToDo = () => {
   
  const [TopThingsTodo, setTopThingsTodo] = useState([]);

  useEffect(() => {
    fetch("x.json")
      .then((res) => res.json())
      .then((data) => setTopThingsTodo(data));
  }, []);

 
  return (
    <Container>
      <div className="my-20">
      <div>
          <SectionTitle text={'Top Things to Do for Every Adventurer'} subText={'Worldwide Escapes'}></SectionTitle>
        </div>

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
             TopThingsTodo.map((todo,index)=>(
             
             
              <SwiperSlide key={index}>
                <Link to='/travelerChoose-thingsToDo'>
                <div>
                <img className='h-64 w-full  relative object-cover' src={todo.picture} alt="" />
                <h2 className='absolute bottom-0 pb-3 pl-2  font-extrabold text-3xl text-white left-0 shadow-2xl  bg-gradient-to-t from-black'>{todo.categoryName}</h2>
                </div>
                </Link>
              </SwiperSlide>
             
             
              ))   
            }
         
        </Swiper>
      </div>

    </Container>
  );
};

export default TopThingsToDo;
