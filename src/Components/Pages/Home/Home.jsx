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
import OpenAi from './OpenAi/OpenAi';

const Home = () => {
    return (
        <div>
            <section className='mb-14'>
                <SearchSection></SearchSection>
            </section>
            <Banner></Banner>
            <section
                className='pt-14 md:pt-24 bg-[url("https://i.ibb.co/MMd76r0/Untitled-design-8.png")]  w-full object-center mx-auto'>
                <TravelDeals></TravelDeals>
                <Packages></Packages>
            </section>

            <FamilyGuide></FamilyGuide>
<<<<<<< HEAD
            <section className='md:my-40'>
=======



            <section className='md:my-20'>
>>>>>>> ef414277a9409a5c88119778b2fe6c44f22f6be1
                <TopDestinations></TopDestinations>
                <TopThingsToDo></TopThingsToDo>
            </section>

            <section className='my-24'>
                <Medical></Medical>
            </section>

            <section>
                <WhyUs></WhyUs>
            </section>

            <section className='py-10'>
                <Feedback></Feedback>
            </section>

        </div>
    );
};

export default Home;