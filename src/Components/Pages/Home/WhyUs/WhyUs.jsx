import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import Container from '../../../../LayOut/Container';


const WhyUs = () => {
   
    return (
        <Container>
            <SectionTitle subText={'Discover the Difference'} text={'why '} coloredText={'choose us?'}>
            </SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-4 place-items-center  gap-10'>
                {/* 1 */}
                <div>
                    <img className='w-16 h-16' src="https://i.ibb.co/zHqNS1d/1.png" alt="" />
                    <h2 className='text-lg font-bold mt-3'>Trustworthy</h2>
                    <ul className='list-none font-extralight leading-6'>
                        <li>
                            Verified reviews from globetrotters.
                        </li>
                        <li>
                            Transparent booking process.
                        </li>
                        <li>
                            Established industry reputation.
                        </li>
                    </ul>
                </div>
                {/* 2 */}
                <div>
                    <img className='w-16 h-16' src="https://i.ibb.co/VDnQXvq/2.png" alt="" />
                    <h2 className='text-lg font-bold mt-3'>Safety and  Security</h2>
                    <ul className='list-none font-extralight leading-6'>
                        <li>
                            Rigorous safety protocols.
                        </li>
                        <li>
                            24/7 emergency support.
                        </li>
                        <li>
                            Secure payment gateways.
                        </li>
                    </ul>
                </div>
                {/* 1 */}
                <div>
                    <img className='w-16 h-16' src="https://i.ibb.co/kmFhV0G/3.png" alt="" />
                    <h2 className='text-lg font-bold mt-3'>Priority</h2>
                    <ul className='list-none font-extralight leading-6'>
                        <li>
                            Customer-centric approach.
                        </li>
                        <li>
                            Personalized travel planning.
                        </li>
                        <li>
                            Prompt response to queries
                        </li>
                    </ul>
                </div>
                {/* 1 */}
                <div>
                    <img className='w-16 h-16' src="https://i.ibb.co/sPtJfqw/4.png" alt="" />
                    <h2 className='text-lg font-bold mt-3'>Experience</h2>
                    <ul className='list-none font-extralight leading-6'>
                        <li>
                            Curated immersive itineraries.
                        </li>
                        <li>
                            Local guides for authentic adventures.
                        </li>
                        <li>
                            Memorable travel moments guaranteed.
                        </li>
                    </ul>
                </div>

            </div>
        </Container>
    );
};

export default WhyUs;




/* https://i.ibb.co/GWRXKjC/1.png


*/