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
import Medical from './Medical/Medical';

const Home = () => {
    return (
        <div>
            <section className='mb-14'>
                <SearchSection></SearchSection>
            </section>
            <Banner></Banner>
            {/* https://i.ibb.co/9NPLGRs/1.png
https://i.ibb.co/9HhFbwm/2.png*/}
            <section
                className='pt-32 bg-[url("https://i.ibb.co/MMd76r0/Untitled-design-8.png")]  w-full object-center mx-auto'>
                <TravelDeals></TravelDeals>
                <Packages></Packages>
            </section>

            <FamilyGuide></FamilyGuide>



            <section className='md:my-40'>
                <TopDestinations></TopDestinations>
                <TopThingsToDo></TopThingsToDo>
            </section>

            <section className='md:my-40'>
                <Medical></Medical>
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