import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const TopThingsToDo = () => {
    return (
        <div className='bg-white my-20'>
        <div>
          <h4 className='text-xl font-bold my-1 mb-4'>Top destinations for your next vacation</h4>
        </div>
         <div>
         <Swiper
    spaceBetween={50}
    slidesPerView={4}
    navigation={true}
    modules={[Navigation]} className="mySwiper"
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
      <div>
      <img className='h-64  relative object-cover' src="https://images.unsplash.com/photo-1687360440731-d124aea41a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
      <h2 className='absolute bottom-6 font-extrabold text-3xl text-white left-6 shadow-2xl'>Bucket List</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <img className='h-64  relative object-cover' src="https://images.unsplash.com/photo-1687360440731-d124aea41a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
      <h2 className='absolute bottom-6 font-extrabold text-3xl text-white left-6 shadow-2xl'>Bucket List for Habibullah</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <img className='h-64  relative object-cover' src="https://images.unsplash.com/photo-1687360440731-d124aea41a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
      <h2 className='absolute bottom-6 font-extrabold text-3xl text-white left-6 shadow-2xl'>Bucket List</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <img className='h-64  relative object-cover' src="https://images.unsplash.com/photo-1687360440731-d124aea41a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
      <h2 className='absolute bottom-6 font-extrabold text-3xl text-white left-6 shadow-2xl'>Bucket List</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <img className='h-64  relative object-cover' src="https://images.unsplash.com/photo-1687360440731-d124aea41a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
      <h2 className='absolute bottom-6 font-extrabold text-3xl text-white left-6 shadow-2xl'>Bucket List</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
      <img className='h-64  relative object-cover' src="https://images.unsplash.com/photo-1687360440731-d124aea41a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
      <h2 className='absolute bottom-6 font-extrabold text-3xl text-white left-6 shadow-2xl'>Bucket List</h2>
      </div>
    </SwiperSlide>
   
  </Swiper>
         </div>
      </div>
    );
};

export default TopThingsToDo;