import React from "react";
import Container from "../../../../LayOut/Container";
import { Link } from "react-router-dom";


const AboutUs = () => {
  return (
    <div className="background">
      <Container>
        <div className="text-white flex flex-col justify-center items-center text-center h-96 ">

          <h2 className="text-3xl font-bold mb-3">Get to Know Us: Our Story and Values</h2>
          <p className="md:w-[50%] p-4 mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            harum libero dolorum fugit impedit blanditiis, magni ipsa tempora
            eius architecto voluptatum earum debitis placeat, nobis atque
            distinctio iusto rerum nam.
          </p>
          <Link to='/aboutusdetails'>
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



/* 
import Typical from "react-typical";
 <Typical
                loop={Infinity}
                wrapper="w"
                steps={[
                  "Popular Destinations",
                  1000,
                  "What Our Travelers Say",
                  1000,
                  "Get in Touch",
                  1000,
                ]}
              />
*/