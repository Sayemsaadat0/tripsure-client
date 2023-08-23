import React from 'react';
import Container from '../Container';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';

const ErrorPage = () => {
    return (
        <Container>
            <div className='flex items-center justify-center   w-full'>
                <img src="https://i.ibb.co/7S4NXmt/oops-1.gif" alt="" />
            </div>

            <div className='flex justify-center'>

                <Link className='flex justify-center  items-center btn btn-outline text-white  hover:bg-white hover:text-black duration-700  bg-[#2884b6]  group' to='/'>
                    <BsArrowLeftCircle className='text-2xl group-hover:-translate-x-12 duration-300'>
                    </BsArrowLeftCircle>
                    Go Back Home</Link>
            </div>
        </Container>
    );
};

export default ErrorPage;