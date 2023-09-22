import SearchSection from './SearchSection/SearchSection';
import Banner from './Banner/Banner';
import TopThingsToDo from './TopThingsToDo/TopThingsToDo';
import TopDestinations from './TopDestinations/TopDestinations';
import Feedback from './Feedback/Feedback';
import FamilyGuide from './FamilyGuide/FamilyGuide';
import WhyUs from './WhyUs/WhyUs';
import TravelDeals from './TravelDeals/TravelDeals';
import Packages from './Packages/Packages';
import Medical from './Medical/Medical';

const Home = () => {
    return (
        <div>
            <section className='mb-14'>
            </section>

            <section>
                <Banner></Banner>
            </section>

            <section
                className='py-20 bg-[url("https://i.ibb.co/MMd76r0/Untitled-design-8.png")]  w-full object-center mx-auto'>
                <TravelDeals></TravelDeals>
                <Packages></Packages>
            </section>

            <section>
                <FamilyGuide></FamilyGuide>
            </section>

            <section className='md:my-20'>
                <TopDestinations></TopDestinations>
                <TopThingsToDo></TopThingsToDo>
            </section>

            <section className='my-24'>
                <Medical></Medical>
            </section>

        
                <WhyUs></WhyUs>

            <section className='py-10'>
                <Feedback></Feedback>
            </section>

        </div>
    );
};

export default Home;