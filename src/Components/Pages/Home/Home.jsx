import React from 'react';
import Container from '../../../LayOut/Container';
import Navbar from '../../Shared/Navbar/Navbar';
import SearchSection from './SearchSection/SearchSection';
import Banner from './Banner/Banner';
import TopThingsToDo from './TopThingsToDo/TopThingsToDo';
import TopDestinations from './TopDestinations/TopDestinations';
import AboutUs from './AboutUs/AboutUs';
import Feedback from './Feedback/Feedback';

const Home = () => {
    return (
        <Container>
            <section>
                <SearchSection></SearchSection>
            </section>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <TopThingsToDo></TopThingsToDo>
            </section>
            <section>
                <TopDestinations></TopDestinations>
            </section>
            <section>
                <AboutUs></AboutUs>
            </section>
            <section>
                <Feedback></Feedback>
            </section>
        </Container>
    );
};

export default Home;