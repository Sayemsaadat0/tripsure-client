import React from 'react';
// import div from '../../../LayOut/div';
import SearchSection from './SearchSection/SearchSection';
import Banner from './Banner/Banner';
import TopThingsToDo from './TopThingsToDo/TopThingsToDo';
import TopDestinations from './TopDestinations/TopDestinations';
import AboutUs from './AboutUs/AboutUs';
import Feedback from './Feedback/Feedback';
import FamilyGuide from './FamilyGuide/FamilyGuide';
import WhyUs from './WhyUs/WhyUs';
import TravelDeals from './TravelDeals/TravelDeals';
import Packages from './Packages/Packages';

const Home = () => {
    return (
        <div>

            <section className='mb-14'>
                <SearchSection></SearchSection>
            </section>

            <section>
                <Banner></Banner>
            </section>
            <section className=' shadow-lg bg-gradient-to-tr from-white to-[#dbf6fbfd]'>
                <TravelDeals></TravelDeals>
                <Packages></Packages>
            </section>

            <section>
                <FamilyGuide></FamilyGuide>
            </section>

            <section>
                <TopDestinations></TopDestinations>
            </section>
            <section>
                <TopThingsToDo></TopThingsToDo>
            </section>

            <section >
                <AboutUs></AboutUs>
            </section>

            <section >
                <WhyUs></WhyUs>
            </section>

            <section>
                <Feedback></Feedback>
            </section>
        </div>
    );
};

export default Home;