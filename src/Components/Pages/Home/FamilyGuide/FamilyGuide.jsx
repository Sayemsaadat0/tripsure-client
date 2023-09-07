import React from 'react';
import Container from '../../../../LayOut/Container';
import { Link } from 'react-router-dom';


const FamilyGuide = () => {
   
    return (
            <div 
            className="hero h-[100%] background1" >
                <div className='hero-overlay bg-opacity-20 '></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl p-10 py-24 text-white">
                        <h1 className="mb-5 text-3xl font-bold ">The ultimate family travel guide</h1>
                        <p  className="mb-5 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et</p>
                        <Link className='btn ' to='/familyguidedetails'>Read More</Link>
                    </div>
                </div>
            </div>
      
    );
};

export default FamilyGuide;




/* https://i.ibb.co/tm1YGg4/1.png
https://i.ibb.co/c1RMT3p/2.png */

/* 
style={{ backgroundImage: 'url(https://i.ibb.co/c1RMT3p/2.png)' }} */