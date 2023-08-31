import React from "react";
import Container from "../../../../LayOut/Container";
import { Link } from "react-router-dom";


const AboutUs = () => {
  return (
    <div className="background ">
      <Container>
        <div className="text-white h-96 flex flex-col justify-center items-center ">
          <h2 className="text-3xl font-bold mb-3">Get to Know Us: Our Story and Values</h2>
          <p className="w-[50%] mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            harum libero dolorum fugit impedit blanditiis, magni ipsa tempora
            eius architecto voluptatum earum debitis placeat, nobis atque
            distinctio iusto rerum nam.
          </p>
          <Link to='/knowmore'>
            <button className="btn mt-2">
              Know More
            </button>
          </Link>
        </div>
      </Container>

    </div>
  );
};

export default AboutUs;
