import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const TopDestinations = () => {
    return (
        <div className='bg-white b my-20'>
          <div>
            <h1 className='text-xl font-bold mb-4'>Top destinations for your next vacation</h1>
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
        <img className='h-64 w-full  relative object-cover' src="https://plus.unsplash.com/premium_photo-1673529434553-72e165cbdc57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        <h2 className='absolute bottom-0 pb-3 pl-2  font-extrabold text-3xl text-white left-0 shadow-2xl  bg-gradient-to-t from-black'>Bucket List for Raju</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img className='h-64 w-full  relative object-cover' src="https://plus.unsplash.com/premium_photo-1673529434553-72e165cbdc57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        <h2 className='absolute bottom-0 pb-3 pl-2  font-extrabold text-3xl text-white left-0 shadow-2xl  bg-gradient-to-t from-black'>Bucket List for </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img className='h-64 w-full  relative object-cover' src="https://plus.unsplash.com/premium_photo-1673529434553-72e165cbdc57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        <h2 className='absolute bottom-0 pb-3 pl-2  font-extrabold text-3xl text-white left-0 shadow-2xl  bg-gradient-to-t from-black'>Bucket List for Habibullah</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img className='h-64 w-full  relative object-cover' src="https://plus.unsplash.com/premium_photo-1673529434553-72e165cbdc57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        <h2 className='absolute bottom-0 pb-3 pl-2  font-extrabold text-3xl text-white left-0 shadow-2xl  bg-gradient-to-t from-black'>Bucket List for Habibullah</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img className='h-64 w-full  relative object-cover' src="https://plus.unsplash.com/premium_photo-1673529434553-72e165cbdc57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        <h2 className='absolute bottom-0 pb-3 pl-2  font-extrabold text-3xl text-white left-0 shadow-2xl  bg-gradient-to-t from-black'>Bucket List for Habibullah</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img className='h-64 w-full  relative object-cover' src="https://plus.unsplash.com/premium_photo-1673529434553-72e165cbdc57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
        <h2 className='absolute bottom-0 pb-3 pl-2  font-extrabold text-3xl text-white left-0 shadow-2xl  bg-gradient-to-t from-black'>Bucket List for Habibullah</h2>
        </div>
      </SwiperSlide>
     

     
    </Swiper>
           </div>
        </div>
    );
};

export default TopDestinations;