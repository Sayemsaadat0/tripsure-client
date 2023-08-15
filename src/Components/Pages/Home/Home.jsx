import React from 'react';
import Container from '../../../LayOut/Container';
import SearchSection from './SearchSection/SearchSection';
import Banner from './Banner/Banner';
import TopThingsToDo from './TopThingsToDo/TopThingsToDo';
import TopDestinations from './TopDestinations/TopDestinations';
import AboutUs from './AboutUs/AboutUs';
import Feedback from './Feedback/Feedback';
import FamilyGuide from './FamilyGuide/FamilyGuide';

const Home = () => {
    return (
        <Container>
            <section className='mb-14'>
                <SearchSection></SearchSection>
            </section>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <TopThingsToDo></TopThingsToDo>
            </section>
            <section>
                <FamilyGuide></FamilyGuide>
            </section>
            <section>
                <TopDestinations></TopDestinations>
            </section>
            <section >
                <AboutUs></AboutUs>
            </section>
            <section>
                <Feedback></Feedback>
            </section>
        </Container>
    );
};

export default Home;