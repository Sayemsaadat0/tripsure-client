import React from 'react';
import Container from '../../../../LayOut/Container';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import SearchHospital from './SearchHospital';
import HospitalWorldWide from './HospitalWorldWide';
import HospitalbySpeciality from './HospitalbySpeciality';

const MadicalCard = () => {
  return (
    <div className="mt-20">
      <Container>
        <div className="text-center space-y-3 md:w-[60%] mx-auto">
          <h3 className="tracking-widest  font-semibold text-2xl underline">
            Health and Safety Guide
          </h3>
          <p className="pb-10">
            Discover a thorough Health and Safety Guide providing crucial
            insights and practices for creating secure environments,
            safeguarding well-being, and complying with regulations to protect
            yourself and others in various settings.
          </p>
        </div>
        <Carousel autoplay>
          <img src="https://i.ibb.co/L0Gf3Vw/1.png" alt="" />
          <img src="https://i.ibb.co/c34NFv9/2.png" alt="" />
        </Carousel>

        {/* hostpitals details */}
        <div className="mt-10">
          <div>
            <h3 className="tracking-widest text-2xl underline font-semibold ">
              Hospitals Worldwide
            </h3>
          </div>
          <HospitalWorldWide></HospitalWorldWide>
        </div>
        {/* .. */}




         <div className="mt-16">
          <h3 className="tracking-widest text-2xl underline font-semibold ">
            Explore Hospitals by its Specialties
          </h3>
          <HospitalbySpeciality></HospitalbySpeciality>
        </div> 



        {/* .............. */}
      {/*   <div className="mt-16">
          <h3 className="tracking-widest text-lg underline font-semibold text-center ">
          Health & Wellness Tips
          </h3>
          <div className=" grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-5 mt-8">
            <div className="group card w-full bg-base-100 border-2 hover:shadow-xl  duration-200">
              <figure className="px-2 pt-2">
                <img
                  src="https://i.ibb.co/YcM8cq4/image.png"
                  alt="health"
                  className="rounded-xl  "
                />
              </figure>
              <div className="card-body">
                <h2 className="text-lg font-bold">First Aid Kit</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <Link to="/madicalDetails" className="">
                  <button className="btn-primary ">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default MadicalCard;
