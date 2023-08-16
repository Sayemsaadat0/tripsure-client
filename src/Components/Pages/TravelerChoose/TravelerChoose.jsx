import React from 'react';
import Container from '../../../LayOut/Container';

const TravelerChoose = () => {
    return (
        <Container>
            <div>
            <div className='relative'>
                <img className='w-full h-[30rem] object-cover' src="https://images.unsplash.com/photo-1691853533232-78d352cf6d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80" alt="" />
                <div className='lg:flex text-center lg:text-left items-center gap-16 absolute bottom-16 lg:left-10 '>
                <div className='w-24'>
                <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb27p0pyMXikGN60bM3tbL8wwUWuwbb8caN9NTvKYuGyHN2EFb340SPXAcE7hFCm_Bku4&usqp=CAU" alt="" />
                </div>
                <div>
                <h2 className='text-white text-2xl'>Travelers' Choice</h2>
                <h1 className='text-white text-5xl font-bold'>Best of the Best Things to Do</h1>
                </div>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default TravelerChoose;