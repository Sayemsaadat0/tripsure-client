import React from 'react';
import Container from '../../../LayOut/Container';

const Overview = () => {
    return (
        <div className='bg-[#f6f6f8] min-h-screen'>
            <Container>
                <h2 className='text-xl font-bold pt-10 pb-10 md:pt-14'>Today's Highlights</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='shadow bg-white rounded-lg p-5 space-y-3 w-full max-w-[350px] h-[250px] mx-auto'>
                        <h2 className='text-xl text-[#dadada] font-medium'>UV Index</h2>
                    </div>
                    <div className='shadow bg-white rounded-lg p-5 space-y-3 w-full max-w-[350px] h-[250px] mx-auto'>
                        <h2 className='text-xl text-[#dadada] font-medium'>Wind Status</h2>
                    </div>
                    <div className='shadow bg-white rounded-lg p-5 space-y-3 w-full max-w-[350px] h-[250px] mx-auto'>
                        <h2 className='text-xl text-[#dadada] font-medium'>Sunrise & Sunset</h2>
                    </div>
                    <div className='shadow bg-white rounded-lg p-5 space-y-3 w-full max-w-[350px] h-[250px] mx-auto'>
                        <h2 className='text-xl text-[#dadada] font-medium'>Humidity</h2>
                    </div>
                    <div className='shadow bg-white rounded-lg p-5 space-y-3 w-full max-w-[350px] h-[250px] mx-auto'>
                        <h2 className='text-xl text-[#dadada] font-medium'>Visibility</h2>
                    </div>
                    <div className='shadow bg-white rounded-lg p-5 space-y-3 w-full max-w-[350px] h-[250px] mx-auto'>
                        <h2 className='text-xl text-[#dadada] font-medium'>Air Quality</h2>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Overview;