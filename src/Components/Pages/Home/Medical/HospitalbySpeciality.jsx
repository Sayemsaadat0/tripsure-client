import React from 'react';

// todo - get and show data 
const HospitalbySpeciality = () => {
    return (
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto ">
          <div className="flex flex-wrap -m-4">
            {/* Neurology */}
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full relative">
              <a className="block relative w-72 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://i.ibb.co/8jznc1V/1.png "/>
              </a>
              <div className="mt-4 ">
                <h3 className=" tracking-widest title-font  bg-black rounded-md text-white bg-opacity-40 absolute bottom-8  p-2">Neurology  Specialists</h3>
              </div>
            </div>
            {/* Cancer */}
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full relative">
              <a className="block relative w-72 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://i.ibb.co/hMyK5Hq/4.png"/>
              </a>
              <div className="mt-4 ">
                <h3 className=" tracking-widest title-font  bg-black rounded-md text-white bg-opacity-40 absolute bottom-8  p-2">Dermatology</h3>
              </div>
            </div>
            {/* Heart */}
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full relative">
              <a className="block relative w-72 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://i.ibb.co/Lx3Ygwz/6.png"/>
              </a>
              <div className="mt-4 ">
                <h3 className=" tracking-widest title-font  bg-black rounded-md text-white bg-opacity-40 absolute bottom-8  p-2">Eye Disease</h3>
              </div>
            </div>
            {/* orthocolgy */}
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full relative">
              <a className="block relative w-72 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://i.ibb.co/pb9GS3T/3.png"/>
              </a>
              <div className="mt-4 ">
                <h3 className=" tracking-widest title-font  bg-black rounded-md text-white bg-opacity-40 absolute bottom-8  p-2">Orthopedics</h3>
              </div>
            </div>
            {/* Heart */}
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full relative">
              <a className="block relative w-72 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://i.ibb.co/R4JKdLM/5.png "/>
              </a>
              <div className="mt-4 ">
                <h3 className=" tracking-widest title-font  bg-black rounded-md text-white bg-opacity-40 absolute bottom-8  p-2">Heart Disease</h3>
              </div>
            </div>
            {/* cancer */}
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full relative">
              <a className="block relative w-72 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://i.ibb.co/v3rQCFL/2.png"/>
              </a>
              <div className="mt-4 ">
                <h3 className=" tracking-widest title-font  bg-black rounded-md text-white bg-opacity-40 absolute bottom-8  p-2">Cancer Treatment</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HospitalbySpeciality;


/* 
 */