import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import Container from '../../../../LayOut/Container';


const TravelDeals = () => {

    return (
        <div>
            <SectionTitle subText={'Adventures Await'}
                text={'Hot Travel '} coloredText={'Deals'}>
            </SectionTitle>

            <Container>

                <div>
                    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 md:p-4'>
                        {/* card */}
                        <div className="card card-compact  bg-white shadow-xl relative">
                            <p className='badge  absolute right-1 top-3 animate-bounce'>30%</p>
                            <figure><img src="https://i.pinimg.com/564x/0b/d3/c6/0bd3c636bd80be4e3bb0232d8ec83985.jpg" alt="title" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">title!</h2>
                                <p>Address</p>
                                <div className="">
                                    <button className="btn  ">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TravelDeals;