import React from "react";
import Container from "../../../LayOut/Container";

const KnowMore = () => {
  return (
    <Container>
      <div className="">
        <div className="grid md:grid-cols-2 gap-4 justify-items-center items-center ">
          <div>
            <h3 className="text-3xl font-semibold mb-4">
              About Our Travel Company{" "}
            </h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sed
              provident odit optio itaque, veniam at iusto quam asperiores et
              reprehenderit voluptatem facere
            </p>
          </div>
          <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-5 ">
            <img
              className="hover:scale-105 transition duration-150 rounded-lg"
              src="https://i.ibb.co/YRtgHnT/image.png"
              alt="img"
            />
            <img
              className="hover:scale-105 transition duration-150 rounded-lg"
              src="https://i.ibb.co/j6Pfcvc/image.png"
              alt="img"
            />
            <img
              className="hover:scale-105 transition duration-150 rounded-lg"
              src="https://i.ibb.co/j6Pfcvc/image.png"
              alt="img"
            />
            <img
              className="hover:scale-105 transition duration-150 rounded-lg"
              src="https://i.ibb.co/YRtgHnT/image.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default KnowMore;
