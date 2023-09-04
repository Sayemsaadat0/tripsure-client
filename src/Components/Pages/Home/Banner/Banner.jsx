import Container from '../../../../LayOut/Container';
import CountUp from 'react-countup';


const Banner = () => {
  // style={{ backgroundImage: 'url("https://i.ibb.co/WDvKC6N/Banner.png")' }}
  return (
    <div className="relative h-[30rem] sm:h-[25rem] md:h-[30rem] lg:h-[30rem] bg-cover bg-center" >
    
        <div className="absolute inset-0 flex items-center justify-start bg-black">
          <video  className='h-full object-cover mx-auto w-full ' src="video.mp4" autoPlay loop muted></video>


          <div className="text-center text-white  bg-opacity-70 w-full rounded-r-lg banner py-16">
            <Container>
              <h1 className="text-3xl md:text-7xl  font-bold mb-2 ">
                The TripeSure
              </h1>
              <p className=" md:w-[50%] mx-auto md:mt-6">
                Discover amazing content and explore our services. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, ut qui quos dolorem eos dolore consequuntur nobis eius maxime veritatis.
              </p>
            </Container>

          </div>


          {/* bottom data */}
          <div className='hidden md:flex justify-around w-full md:w-[80%] bg-white rounded-2xl  absolute -bottom-12 left-0 md:left-32 h-24 text-[#79c7ff]'>
            <div className='h-full flex flex-col justify-center items-center border-b-4 border-black'>
              <h3 className='text-3xl font-semibold '><CountUp start={20} end={220} duration={5} suffix='+' /></h3>
              <p>Destinations</p>
            </div>

            <div className='h-full flex flex-col justify-center items-center border-b-4 border-black'>
              <h3 className='text-3xl font-semibold '><CountUp start={20} end={80} duration={5} suffix='+' /></h3>
              <p>Travel Agencies</p>
            </div>

            <div className='h-full flex flex-col justify-center items-center border-b-4 border-black'>
              <h3 className='text-3xl font-semibold '><CountUp start={10000} end={40000} duration={5} suffix='+' /></h3>
              <p>Satisfied Customer</p>
            </div>

            <div className='h-full flex flex-col justify-center items-center border-b-4 border-black'>
              <h3 className='text-3xl font-semibold '><CountUp start={10000} end={19000} duration={5} suffix='+' /></h3>
              <p>Reviews</p>
            </div>

          </div>
        </div>


    
    </div>
  );
};

export default Banner;