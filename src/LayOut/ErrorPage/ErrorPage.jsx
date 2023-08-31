import React from 'react';
import Container from '../Container';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';

const ErrorPage = () => {
    return (
        <Container>



            <div className="flex w-full justify-center items-center min-h-screen ">
                <div className="grid flex-grow  rounded-box ">
                    <div className='px-12'>
                        <h3 className='text-5xl '>Lost?</h3>
                        <p className='font-extralight mt-2'>Some places are great to lose yourself in. But not on this occasion. <br /> You could reuturn to our home page.</p>
                        <Link
                            className='flex 
                        mt-5
                        btn-primary
                        gap-5  
                        items-center
                        border
                        w-[40%]                        
                        '
                            to='/'>
                            <BsArrowLeftCircle className='text-2xl'>
                            </BsArrowLeftCircle>
                            Go Back Home</Link>
                    </div>
                </div>
                <div className="grid flex-grow  rounded-box place-items-center">
                    <img className='mx-10 w-96' src="https://i.ibb.co/vQpgQ8z/Untitled-design-1.gif" alt="" /></div>
            </div>
        </Container>
    );
};

export default ErrorPage;







/* 
 <div className='flex items-center justify-center   w-full'>
                <img src="https://i.ibb.co/7S4NXmt/oops-1.gif" alt="" />
            </div>

            <div className='flex justify-center'>

                <Link className='flex justify-center  items-center btn btn-outline text-white  hover:bg-white hover:text-black duration-700  bg-[#2884b6]  group' to='/'>
                    <BsArrowLeftCircle className='text-2xl group-hover:-translate-x-12 duration-300'>
                    </BsArrowLeftCircle>
                    Go Back Home</Link>
            </div>
*/