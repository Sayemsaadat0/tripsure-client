import React from "react";
import bgImage from '../../../../assets/Home/AboutUs2.png'
const AboutUs = () => {
  return (
    
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${bgImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About us</h1>
            <p className="mb-5">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quasi libero veritatis vitae laudantium voluptatem ab dicta enim autem? Nisi sit iure id eligendi adipisci quae deserunt quod. Placeat delectus veniam accusamus ipsam magnam inventore dignissimos excepturi quidem blanditiis repellat.
            </p>
            <button className="md:btn-lg button sm:btn-md btn-sm font-semibold">Get Started</button>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;
