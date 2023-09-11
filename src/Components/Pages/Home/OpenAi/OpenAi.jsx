import React from 'react';
import { useForm } from 'react-hook-form';
import Container from '../../../../LayOut/Container';
import { Typewriter } from 'react-simple-typewriter';


const OpenAi = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const words = ['Can you suggest a travel destination for a romantic getaway in November?',]

    return (
        <Container>

            <div className='md:flex items-center justify-center my-20 mx-auto  md:justify-between w-full bg-blue-50 p-10' >

                {/* forom */}
                <div className='md:w-1/2 '>

                    <form className='flex flex-col  py-20 justify-center items-center ' onSubmit={handleSubmit(onSubmit)}>
                        <h3>having trouble to make desicion? ask anything !</h3>

                        <input
                            className='input input-bordered input-md lg:w-[55%] w-72   my-5 '
                            type="text"
                            placeholder="questions"
                            {...register("question", { required: true, maxLength: 30 })} />

                        <button className='btn-primary lg:w-[55%] w-72' type='submit'>Send</button>

                        <p className='text-center  py-10 '>answerd messege answerd messegeanswerd messege  answerd messege sdsdjs sdhsd  sjdsd  sjdskdj  sjds dsjdskd  askdjsd  asdjd answerd messege</p>
                    </form>
                </div>
                {/* ........ */}
                <div className='md:w-1/2 flex justify-center'>
                    <img className='md:w-[55%] ' src="https://i.ibb.co/TRNM1Mq/Untitled-design-6.png" alt="" />
                </div>
            </div>
        </Container>
    );
};

export default OpenAi;