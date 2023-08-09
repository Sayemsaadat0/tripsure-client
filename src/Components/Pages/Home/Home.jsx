import React from 'react';
import Container from '../../../LayOut/Container';
import SearchSection from './SearchSection/SearchSection';
import Banner from './Banner/Banner';
import TopThingsToDo from './TopThingsToDo/TopThingsToDo';
import TopDestinations from './TopDestinations/TopDestinations';
import AboutUs from './AboutUs/AboutUs';
import Feedback from './Feedback/Feedback';

const Home = () => {
    return (
        <Container>
            <div className='bg-green-100'>
                <TopDestinations></TopDestinations>
            </div>

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
<<<<<<< HEAD
=======
                <TopDestinations></TopDestinations>
            </section>
            <section >
>>>>>>> e1b06315edfd101595973c1d4d2109f4f74d870f
                <AboutUs></AboutUs>
            </section>
            <section>
                <Feedback></Feedback>
            </section>
        </Container>
    );
};

export default Home;