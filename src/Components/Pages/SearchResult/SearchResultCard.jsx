import React from "react";
import Rating from "react-rating";
import { FaCircle, FaCircleNotch } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const SearchResultCard = ({ data }) => {
  return (
    <div className=" hover:shadow-2xl  w-full border flex items-center ">
      <figure className="  md:p-5 p-3">
        <img
          className="md:w-[210px] sm:w-[200px] w-[190px] md:h-[150px] sm:h-[140px] h-[130px] rounded-[2px] "
          src={data && data?.picture}
          alt="restaurants"
        />
      </figure>
      <div className="md:p-5 p-3 ">
        <h3 className="text-2xl mb-3 font-semibold">
          {data && data.hotelName ? data.hotelName : data.title}
        </h3>
        <div className="flex space-x-2 ">
          <p className="text-green-600 ">
            <Rating
              placeholderRating={data && data?.ratings?.service}
              emptySymbol={<FaCircleNotch className="w-4"></FaCircleNotch>}
              placeholderSymbol={<FaCircle className="w-4"></FaCircle>}
              fullSymbol={<FaCircle className="w-4 "></FaCircle>}
              readonly
            />
          </p>
          <p className="text-sm border-b-[2px] border-dotted p-0">
            {data && data?.reviews?.length}
          </p>
        </div>
        <p className="font-medium">{data && data?.address?.country}</p>
        <div className="flex ">
          <MdLocationPin size={22} />
          <p className="font-normal">
            {data && data?.address?.state}, {data && data?.address?.street},{" "}
            {data && data?.address?.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
