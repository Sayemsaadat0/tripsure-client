import React from "react";
import Rating from "react-rating";
import { FaCircle, FaCircleNotch } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const SearchResultCard = ({ data, country }) => {
  console.log(data);
  // todo hotelName diye link ta dinamic hocche na
  return (
    <Link
      to={
        data.country
          ? `/searchCountry/${data.country}`
          : data.hotelName
          ? `/searchHotel/${data.hotelName}`
          : `/searchCardDetails/${data._id}`
      }
    >
      <div className="w-full  flex cursor-pointer">
        <figure className="  md:p-5 p-3">
          <img className="w-60 rounded-lg " src={data?.picture} alt="picture" />
        </figure>
        <div className="md:p-5 p-3  ">
          <h3 className="text-2xl mb-3 font-semibold hover:underline">
            {data &&
              (data.hotelName
                ? data.hotelName
                : data.title
                ? data.title
                : data.country
                ? data.country
                : data.cardtitle)}
          </h3>
          <div className="flex space-x-2 "></div>
          {data.address && (
            <p className="font-medium">{data?.address?.country}</p>
          )}
          <div className="flex ">
            <MdLocationPin size={22} />

            {data.address ? (
              <p className="font-normal">
                {`${data.address.state}, ${data.address.street}, ${data.address.city}`}
                ,
              </p>
            ) : (
              <p className="font-normal">
                {data.placetitle ? data.placetitle : data.address}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultCard;
