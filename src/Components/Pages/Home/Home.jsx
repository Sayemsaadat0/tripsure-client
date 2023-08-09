import React from 'react';
import Container from '../../../LayOut/Container';
import TopDestinations from '../../Pages/Home/TopDestinations/TopDestinations'

const Home = () => {
    return (
        <Container>
            <div className='bg-green-100'>
                home 
                Development branch
                <TopDestinations></TopDestinations>
            </div>
        </Container>
    );
};

export default Home;