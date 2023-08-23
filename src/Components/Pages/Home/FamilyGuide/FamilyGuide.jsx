import React from 'react';
import Container from '../../../../LayOut/Container';
import { Link } from 'react-router-dom';


const FamilyGuide = () => {
   
    return (
        <Container>
            <div 
            className="hero h-[100%] " style={{ backgroundImage: 'url(https://i.ibb.co/bBXybCn/Untitled-design-3.png)' }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl p-10 py-24">
                        <h1 className="mb-5 text-3xl font-bold">The ultimate family travel guide</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et</p>
                        <Link className='btn ' to='familyguidedetails'>Read More</Link>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FamilyGuide;