import React from 'react';
import Container from '../Container';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Container>
            <div className='flex justify-center  h-full w-full'>
                <img src="https://i.ibb.co/7S4NXmt/oops-1.gif" alt="" />
            </div>
            
            <div className='flex justify-center'>
                <Link className=' btn btn-outline border-none hover:border-none hover:bg-[#2884b6] w-[50%] ' to='/'>Go Back Home</Link>
            </div>
        </Container>
    );
};

export default ErrorPage;