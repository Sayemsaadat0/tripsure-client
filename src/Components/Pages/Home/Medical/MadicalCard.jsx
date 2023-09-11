import React from 'react';
import Container from '../../../../LayOut/Container';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import SearchHospital from './SearchHospital';

const MadicalCard = () => {
  return (
    <div className="mt-20">
      <Container>
        <div className="text-center space-y-3 md:w-[60%] mx-auto">
          <h3 className="tracking-widest  font-semibold text-2xl underline">Health and Safety Guide</h3>
          <p className="pb-10">
            Discover a thorough Health and Safety Guide providing crucial insights and practices for creating secure environments, safeguarding well-being, and complying with regulations to protect yourself and others in various settings.
          </p>
        </div>
        <Carousel autoplay>
          <img src="https://i.ibb.co/L0Gf3Vw/1.png" alt="" />
          <img src="https://i.ibb.co/c34NFv9/2.png" alt="" />
        </Carousel>

        {/* hostpitals details */}
        <div className="mt-10">
          <div className='flex justify-between'>
            <h3 className="tracking-widest text-2xl underline font-semibold ">
              Hospitals Worldwide
            </h3>

            <SearchHospital></SearchHospital>
          </div>

          <div className=" grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-10 mt-8">
            {/* 1 */}
            <div className="group card w-full bg-base-100 border-2 hover:shadow-2xl  hover:scale-105 duration-500 ">
              <figure className="px-4 py-4">
                <img
                  src="https://i.ibb.co/41xnK2X/image.png"
                  alt="health"
                  className="rounded-xl  "
                />
              </figure>
              <div className="card-body">
                <h2 className="text-lg font-bold">
                  [Destination Name] Health Guidelines
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <Link to="/madicalDetails">
                  <button className="btn btn-primary">Learn More</button>
                </Link>
              </div>
            </div>
            {/* 1 */}
            <div className="group card w-full bg-base-100 border-2 hover:shadow-2xl  hover:scale-105 duration-500">
              <figure className="px-4 py-4">
                <img
                  src="https://i.ibb.co/41xnK2X/image.png"
                  alt="health"
                  className="rounded-xl  "
                />
              </figure>
              <div className="card-body">
                <h2 className="text-lg font-bold">
                  [Destination Name] Health Guidelines
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <Link to="/madicalDetails">
                  <button className="btn btn-primary">Learn More</button>
                </Link>
              </div>
            </div>
            {/* 1 */}
            <div className="group card w-full bg-base-100 border-2 hover:shadow-2xl  hover:scale-105 duration-500">
              <figure className="px-4 py-4">
                <img
                  src="https://i.ibb.co/41xnK2X/image.png"
                  alt="health"
                  className="rounded-xl  "
                />
              </figure>
              <div className="card-body">
                <h2 className="text-lg font-bold">
                  [Destination Name] Health Guidelines
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <Link to="/madicalDetails">
                  <button className="btn btn-primary">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* .. */}



        <div className="mt-16">
          <h3 className="tracking-widest text-lg underline font-semibold text-center ">
            Local Healthcare Resources
          </h3>
          <div className=" grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-5 mt-8">
            <div className="group card w-full bg-base-100 border-2 hover:shadow-2xl  hover:scale-105 duration-500">
              <figure className="px-4 py-4">
                <img
                  src="https://i.ibb.co/854byK2/image.png"
                  alt="health"
                  className="rounded-xl  "
                />
              </figure>
              <div className="card-body">
                <h2 className="text-lg font-bold">
                  [Destination Name] Health Guidelines
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <Link to="/madicalDetails">
                  <button className="btn btn-primary">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="tracking-widest text-lg underline font-semibold text-center ">
            Traveler's First Aid Kit
          </h3>
          <div className=" grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-5 mt-8">
            <div className="group card w-full bg-base-100 border-2 hover:shadow-2xl  hover:scale-105 duration-500">
              <figure className="px-4 py-4">
                <img
                  src="https://i.ibb.co/YcM8cq4/image.png"
                  alt="health"
                  className="rounded-xl  "
                />
              </figure>
              <div className="card-body">
                <h2 className="text-lg font-bold">First Aid Kit</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <Link to="/madicalDetails">
                  <button className="btn btn-primary">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MadicalCard;