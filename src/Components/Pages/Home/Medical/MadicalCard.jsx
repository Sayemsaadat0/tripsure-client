import React from 'react';
import Container from '../../../../LayOut/Container';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import SearchHospital from './SearchHospital';
import HospitalWorldWide from './HospitalWorldWide';
import HospitalbySpeciality from './HospitalbySpeciality';
import PageTitle from '../../../PageTitle/PageTitle';

const MadicalCard = () => {
  return (
    <div className="mt-20">
      <PageTitle title="Medicals" />
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

      
        <HospitalbySpeciality />
      </Container>
    </div>
  );
};

export default MadicalCard;
