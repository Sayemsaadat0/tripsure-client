import React from "react";
import Container from "../../../../LayOut/Container";
import { Link } from "react-router-dom";
// import "./AboutUs.css"

const AboutUs = () => {
  return (
    <Container>
      <div className="background  h-96">
        <div className="h-96 bg-black bg-opacity-50">
          <div className="text-white h-96 flex flex-col justify-center items-center ">
            <h2 className="text-3xl font-bold mb-3">Know About Us</h2>
            <p className="w-[50%] mx-auto text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              harum libero dolorum fugit impedit blanditiis, magni ipsa tempora
              eius architecto voluptatum earum debitis placeat, nobis atque
              distinctio iusto rerum nam.
            </p>
            <Link to='/knowmore'>
              <button className="button1 mt-4 font-semibold text-2xl">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
