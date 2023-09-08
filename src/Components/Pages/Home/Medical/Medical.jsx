import React from "react";
import Container from "../../../../LayOut/Container";
import { Link } from "react-router-dom";


const MedicalCard = () => {
  return (
    <div className="Medical">
      <div className="text-white bg-black bg-opacity-40 flex flex-col justify-center items-center text-center h-[450px] ">
        <Container>

          <h2 className="text-5xl font-semibold tracking-widest mb-3">Worldwide Health Guideline</h2>
          <p className="md:w-[60%] p-4 mx-auto text-center">
            Your trusted companion for maintaining health and safety in a global environment. Discover essential medical resources, practical tips, and comprehensive guidance for worry-free experiences.
          </p>
          <Link to="/madicalCard">
            <button className="btn mt-2">
              Details
            </button>
          </Link>
        </Container>
      </div>

    </div>
  );
};

export default MedicalCard;

