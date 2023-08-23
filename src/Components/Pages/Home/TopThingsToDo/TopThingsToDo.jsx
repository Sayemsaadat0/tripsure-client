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
      <div data-AOS="fade-right"
        data-aos-duration="3000"
        data-aos-easing="ease"
        className="my-20 px-10">
        <div>
          <SectionTitle text={'Top Things to Do for '} coloredText={'Every Adventurer'} subText={'Worldwide Escapes'}></SectionTitle>
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
            TopThingsTodo.map((todo, index) => (


              <SwiperSlide key={index}>
                <Link to={`/travelerChoose-thingsToDo/${todo?.categoryName}`}>
                  <div className=" 
                hover:scale-110 duration-700 ">
                    <img className=' 
                    rounded-tl-[5px] 
                    rounded-tr-[50px]    
                    h-64 w-full  relative object-cover ' src={todo.picture} alt="" />
                    <h2 className='absolute bottom-2 pb-3 pl-2  font-extrabold text-xl text-white left-5  '>{todo.categoryName}</h2>
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
