import axios from "axios";
import { Link } from "react-router-dom";

const HospitalbySpeciality = () => {


  return (
    <section className="text-gray-600 body-font py-16">
      <h3 className="tracking-widest text-2xl underline font-semibold ">
        Hospitals By Its Specialities
      </h3>
      <div className="container  py-10 mx-auto ">
        <div className="flex flex-wrap ">
          {/* Neurology */}
          <Link to={`/hospitalsFilterBySpeciality/${"Neurology"}`}>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full relative">
              <a className="block relative w-72 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://i.ibb.co/8jznc1V/1.png "
                />
              </a>
              <div className="mt-4 ">
                <h3 className=" tracking-widest title-font  bg-black rounded-md text-white bg-opacity-40 absolute bottom-8  p-2">
                  Neurology Specialists
                </h3>
              </div>
            </div>
          </Link>
          {/* Cancer */}
          <Link to={`/hospitalsFilterBySpeciality/${"Dermatology"}`}>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full relative">
              <a className="block relative w-72 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://i.ibb.co/hMyK5Hq/4.png"
                />
              </a>
              <div className="mt-4 ">
                <h3 className=" tracking-widest title-font  bg-black rounded-md text-white bg-opacity-40 absolute bottom-8  p-2">
                  Dermatology
                </h3>
              </div>
            </div>
          </Link>
          {/* Heart */}
          <Link to={`/hospitalsFilterBySpeciality/${"eyes"}`}>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full relative">
              <a className="block relative w-72 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://i.ibb.co/Lx3Ygwz/6.png"
                />
              </a>
              <div className="mt-4 ">
                <h3 className=" tracking-widest title-font  bg-black rounded-md text-white bg-opacity-40 absolute bottom-8  p-2">
                  Eye Disease
                </h3>
              </div>
            </div>
          </Link>
          {/* orthocolgy */}
          <Link to={`/hospitalsFilterBySpeciality/${"Cardiology"}`}>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full relative">
              <a className="block relative w-72 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://i.ibb.co/pb9GS3T/3.png"
                />
              </a>
              <div className="mt-4 ">
                <h3 className=" tracking-widest title-font  bg-black rounded-md text-white bg-opacity-40 absolute bottom-8  p-2">
                  Orthopedics
                </h3>
              </div>
            </div>
          </Link>
          <Link to={`/hospitalsFilterBySpeciality/${"heart"}`}>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full relative">
              <a className="block relative w-72 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://i.ibb.co/R4JKdLM/5.png "
                />
              </a>
              <div className="mt-4 ">
                <h3 className=" tracking-widest title-font  bg-black rounded-md text-white bg-opacity-40 absolute bottom-8  p-2">
                  Heart Disease
                </h3>
              </div>
            </div>
          </Link>
          <Link to={`/hospitalsFilterBySpeciality/${"cancer"}`}>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full relative">
              <a className="block relative w-72 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://i.ibb.co/v3rQCFL/2.png"
                />
              </a>
              <div className="mt-4 ">
                <h3 className=" tracking-widest title-font  bg-black rounded-md text-white bg-opacity-40 absolute bottom-8  p-2">
                  Cancer Treatment
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HospitalbySpeciality;

/*
 */
