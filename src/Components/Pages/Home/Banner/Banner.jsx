import React from 'react';
import Container from '../../../../LayOut/Container';

const Banner = () => { 
 
  return (
    <Container>
      <div data-AOS="fade-up"
        data-aos-duration="3000"
        data-aos-easing="ease" className="relative h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-[30rem] bg-cover bg-center" style={{ backgroundImage: 'url("https://i.ibb.co/WDvKC6N/Banner.png")' }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-start p-4 sm:p-8 md:p-10 lg:p-16">
          <div className="max-w-xl text-slate-100 bg-neutral-900 bg-opacity-50 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-14 rounded-xl">
            <h1 className="text-4xl font-bold mb-2 sm:text-5xl">
              The <span className="text-[#94cfcf]">TripeSure</span>
            </h1>
            <p className="text-base sm:text-lg">
              Discover amazing content and explore our services. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, ut qui quos dolorem eos dolore consequuntur nobis eius maxime veritatis.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;