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
            <Banner></Banner>
            <section
                className='shadow-lg bg-gradient-to-r from-sky-100 to-purple-100'>
                <TravelDeals></TravelDeals>
                <Packages></Packages>
            </section>
            <FamilyGuide></FamilyGuide>
            <TopDestinations></TopDestinations>
            <TopThingsToDo></TopThingsToDo>

            <section className='md:my-40'>
                <AboutUs></AboutUs>
            </section>


            <section className=''>
                <WhyUs></WhyUs>
                <Feedback></Feedback>
            </section>
        </div>
    );
};

export default Home;