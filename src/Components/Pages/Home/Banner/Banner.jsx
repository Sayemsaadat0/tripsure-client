/* import React from 'react';
import Container from '../../../../LayOut/Container';

const Banner = () => {

  return (
    <div className="relative h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-[30rem] bg-cover bg-center" style={{ backgroundImage: 'url("https://i.ibb.co/WDvKC6N/Banner.png")' }}>
      <Container>
        <div className="absolute inset-0 flex items-center justify-start ">
          <div className="max-w-3xl text-white bg-neutral-900 bg-opacity-60 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-20 lg:py-14 rounded-r-lg ">
            <h1 className="text-4xl font-bold mb-2 sm:text-5xl">
              The <span className="text-[#94cfcf]">TripeSure</span>
            </h1>
            <p className="text-base sm:text-lg">
              Discover amazing content and explore our services. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, ut qui quos dolorem eos dolore consequuntur nobis eius maxime veritatis.
            </p>
            <div className='text-black flex justify-around w-full md:w-[80%] bg-white rounded-2xl  absolute -bottom-12 left-0 md:left-28 h-24'>
              <div className='h-full flex flex-col justify-center items-center'>
                <h3>Counter</h3>
                <p>Text</p>
              </div>
              <div className='h-full flex flex-col justify-center items-center'>
                <h3>Counter</h3>
                <p>Text</p>
              </div>
              <div className='h-full flex flex-col justify-center items-center'>
                <h3>Counter</h3>
                <p>Text</p>
              </div>
              <div className='h-full flex flex-col justify-center items-center'>
                <h3>Counter</h3>
                <p>Text</p>
              </div>

            </div>
          </div>
        </div>


      </Container>
    </div>
  );
};

export default Banner; */









import React from 'react';
import Container from '../../../../LayOut/Container';
import CountUp from 'react-countup';

const Banner = () => {

  return (
    <div className="relative h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-[30rem] bg-cover bg-center" style={{ backgroundImage: 'url("https://i.ibb.co/WDvKC6N/Banner.png")' }}>
      <Container>
        <div className="absolute inset-0 flex items-center justify-start ">
          <div className="max-w-2xl text-white bg-neutral-900 bg-opacity-70 py-4 pl-16 rounded-r-lg ">
            <h1 className="text-5xl  font-bold mb-2 ">
              The <span className="text-[#62cbe3]">TripeSure</span>
            </h1>
            <p className="text-base sm:text-lg">
              Discover amazing content and explore our services. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, ut qui quos dolorem eos dolore consequuntur nobis eius maxime veritatis.
            </p>
            <div className='flex justify-around w-full md:w-[80%] bg-white rounded-2xl  absolute -bottom-12 left-0 md:left-28 h-24 text-[#4da1b4]'>
              <div className='h-full flex flex-col justify-center items-center border-b-4 border-black'>
                <h3 className='text-3xl font-semibold text-[#4da1b4]'><CountUp start={20} end={220} duration={5} suffix='+' /></h3>
                <p>Destinations</p>
              </div>
              
              <div className='h-full flex flex-col justify-center items-center border-b-4 border-black'>
                <h3 className='text-3xl font-semibold text-[#4da1b4]'><CountUp start={20} end={80} duration={5} suffix='+' /></h3>
                <p>Travel Agencies</p>
              </div>

              <div className='h-full flex flex-col justify-center items-center border-b-4 border-black'>
                <h3 className='text-3xl font-semibold text-[#4da1b4]'><CountUp start={10000} end={40000} duration={5} suffix='+' /></h3>
                <p>Satisfied Customer</p>
              </div>

              <div className='h-full flex flex-col justify-center items-center border-b-4 border-black'>
              <h3 className='text-3xl font-semibold text-[#4da1b4]'><CountUp start={10000} end={19000} duration={5} suffix='+' /></h3>
                <p>Reviews</p>
              </div>

            </div>
          </div>
        </div>


      </Container>
    </div>
  );
};

export default Banner;