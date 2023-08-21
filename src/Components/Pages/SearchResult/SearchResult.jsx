import React from "react";
import Container from "../../../LayOut/Container";
import Rating from "react-rating";
import { FaCircle, FaCircleNotch } from "react-icons/fa";

const SearchResult = () => {
  return (
    <div className="bg-base-300 pt-12">
      <Container>
        <div className="md:w-[80%] w-full bg-base-100 rounded-tl-lg rounded-tr-lg">
          <div className="border-t border-x p-4 ">
            <h4 className="text-xl font-semibold">Search results matching </h4>
          </div>
          <div className="  hover:shadow-2xl  w-full border flex items-center ">
            <figure className="  md:p-5 p-3">
              <img
                className="md:w-[210px] sm:w-[200px] w-[190px] md:h-[150px] sm:h-[140px] h-[130px] rounded-[2px] "
                src="https://i.ibb.co/54DH6LW/image.png"
                alt="restaurants"
              />
            </figure>
            <div className="md:p-5 p-3 ">
              <h3 className="text-2xl mb-3 font-semibold">name of ....</h3>
              <div className="flex space-x-2 ">
                <p className="text-green-600 ">
                  <Rating
                    placeholderRating={4.5}
                    emptySymbol={
                      <FaCircleNotch className="w-4"></FaCircleNotch>
                    }
                    placeholderSymbol={<FaCircle className="w-4"></FaCircle>}
                    fullSymbol={<FaCircle className="w-4 "></FaCircle>}
                    readonly
                  />
                </p>
                <p className="text-sm border-b-[2px] border-dotted p-0">
                  109 review
                </p>
              </div>
              <p className="">
                Avenida Nader #74 Mz 3 Lt 4, Cancun 77500 Mexico
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchResult;
