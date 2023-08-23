import React from 'react';
import Container from '../../../../LayOut/Container';
import KidsGuide from './KidsGuide';
import HoneyMoons from './HoneyMoons';
import FamilyBeach from './FamilyBeach';
import Zoo from './Zoo';
import ThemePark from './ThemePark';
// import div from '../../../../LayOut/div';

const FamilyGuideDetails = () => {
    return (
        <div>
            {/* todo by sayem need to dynamix this datas */}
            <div>
                {/* introduction */}
                <Container>
                    <div>
                        <section className='pt-10 mx-4'>
                            <div className='md:w-[70%] mx-auto'>
                                <h1 className='text-5xl font-bold'>Family travel, handled</h1>

                                <h3 className='text-4xl font-bold mt-10 md:w-[80%]'>An inspo-packed playbook filled with tips, destination ideas, and more.</h3>
                            </div>
                            <img className='w-full mt-10' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/8e/35/3b/caption.jpg?w=600&h=-1&s=1&cx=1920&cy=1080&chk=v1_0c8c6b548b6dbfffe194" alt="" />

                            <div className='mt-10 mb-10'>
                                <p className='md:w-[70%] mx-auto text-xl '>
                                    Let’s face it: If there are a million-gazillion-bajillion—in 5-year-old parlance—ways to be a family, there are a million-gazillion-bajillion-times-infinity ways to travel together.
                                </p>
                                <p className='md:w-[70%] mx-auto text-xl mt-5'>
                                    Below, you'll find a family-travel playbook packed with inspiration and guidance from our forums, reviews, and experts. There are road-trip ideas that promise to tear your teens away from TikTok. There are city guides that help you maximize time so that you’re not still stuck on the Brooklyn Bridge at nap-time. There’s insight from our community about nailing trips with little kids, trips with older kids, and trips with senior parents. You’ll also find ideas for getting your next adventure into motion—even if you’ve got no idea where to go.
                                </p>
                            </div>
                        </section>
                    </div>
                </Container>

                {/* Tips part */}
                <section className='mt-10 w-full h-full bg-green-100'>
                    <Container>
                        <div>
                            <h1 className='pt-10 ps-4 md:ps-10 text-4xl md:text-6xl font-bold '>Destinations & trip ideas</h1>
                            <img className='w-full mt-10' src="
                 https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/99/f2/1d/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_6ffa4750a90bd1263eb1" alt="" />

                            <KidsGuide></KidsGuide>
                            <HoneyMoons></HoneyMoons>

                            <img className='w-full' src="https://w0.peakpx.com/wallpaper/67/341/HD-wallpaper-royal-enfield-bike-dirt-ladakh-leh-moterbike-re-road-trip.jpg" alt="" />

                            <FamilyBeach></FamilyBeach>
                            <Zoo></Zoo>
                            <ThemePark></ThemePark>
                        </div>
                    </Container>
                </section>

                {/* get inspired by real familys */}
                <section className='mb-20'>
                    <Container>
                        <div>
                            {/* inspiration */}
                            <div className='mt-20'>
                                <h2 className='pt-10 ps-4 md:ps-10 text-2xl md:text-6xl font-bold'>get inspired by real familys</h2>
                                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 md:p-4'>
                                    {/* card */}
                                    <div className="card card-compact  bg-white shadow-xl">
                                        <figure><img src="https://i.pinimg.com/564x/0b/d3/c6/0bd3c636bd80be4e3bb0232d8ec83985.jpg" alt="title" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">title!</h2>
                                            <p>If a dog chews title whose title does he choose?</p>
                                            <div className="">
                                                <button className="btn">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card card-compact  bg-white shadow-xl">
                                        <figure><img src="https://i.pinimg.com/564x/0b/d3/c6/0bd3c636bd80be4e3bb0232d8ec83985.jpg" alt="title" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">title!</h2>
                                            <p>If a dog chews title whose title does he choose?</p>
                                            <div className="">
                                                <button className="btn">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card card-compact  bg-white shadow-xl">
                                        <figure><img src="https://i.pinimg.com/564x/0b/d3/c6/0bd3c636bd80be4e3bb0232d8ec83985.jpg" alt="title" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">title!</h2>
                                            <p>If a dog chews title whose title does he choose?</p>
                                            <div className="">
                                                <button className="btn">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Summer Trip tips for family */}
                            <div className='mt-20'>
                                <h2 className='pt-10 ps-4 md:ps-10 text-2xl md:text-6xl font-bold'>Summer Trip tips for family</h2>
                                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 md:p-4'>
                                    {/* card */}
                                    <div className="card card-compact  bg-white shadow-xl">
                                        <figure><img src="https://i.pinimg.com/564x/0b/d3/c6/0bd3c636bd80be4e3bb0232d8ec83985.jpg" alt="title" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">title!</h2>
                                            <p>If a dog chews title whose title does he choose?</p>
                                            <div className="">
                                                <button className="btn">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card card-compact  bg-white shadow-xl">
                                        <figure><img src="https://i.pinimg.com/564x/0b/d3/c6/0bd3c636bd80be4e3bb0232d8ec83985.jpg" alt="title" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">title!</h2>
                                            <p>If a dog chews title whose title does he choose?</p>
                                            <div className="">
                                                <button className="btn">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card card-compact  bg-white shadow-xl">
                                        <figure><img src="https://i.pinimg.com/564x/0b/d3/c6/0bd3c636bd80be4e3bb0232d8ec83985.jpg" alt="title" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">title!</h2>
                                            <p>If a dog chews title whose title does he choose?</p>
                                            <div className="">
                                                <button className="btn">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>

        </div>
    );
};

export default FamilyGuideDetails;