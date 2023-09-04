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
                className='pt-32'>
                <TravelDeals></TravelDeals>
                <Packages></Packages>
            </section>

            <FamilyGuide></FamilyGuide>



            <section className='md:my-40'>
                <TopDestinations></TopDestinations>
                <TopThingsToDo></TopThingsToDo>
            </section>

            <section className='md:my-40'>
                <AboutUs></AboutUs>
            </section>

            <section>
                <WhyUs></WhyUs>
            </section>

            <section className='py-24'>
                <Feedback></Feedback>
            </section>

        </div>
    );
};

export default Home;