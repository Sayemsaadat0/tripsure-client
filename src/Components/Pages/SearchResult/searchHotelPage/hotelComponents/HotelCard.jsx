import { FaCircle, FaCircleNotch } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const HotelCard = ({ data }) => {
  console.log(data);

 

  return (
    <div className="card card-side bg-base-100 shadow-xl w-full ml-8 mb-4 hover:shadow-2xl">
      <figure className="md:w-[350px] md:h-[300px] h-auto w-auto order-first md:order-none relative">
        <img src={data?.picture} alt="hotel" className="w-full h-full hover:scale-105 transition object-cover" />
        <button className="absolute top-2 right-2 btn">
          {" "}
          <FiHeart size={22} />
        </button>
      </figure>
      <div className="card-body order-last md:order-none w-full">
        <h2 className="text-3xl font-semibold">{data?.hotelName}</h2>
        <div>
          <div className="space-y-1 ">
            <div className="flex items-center">
              <GrLocation size={22} />
              <p className="text-lg ml-1">{data?.address}</p>
            </div>
            <p className="text-green-600 ">
              <Rating
                placeholderRating={data?.ratings}
                emptySymbol={<FaCircleNotch className="w-4"></FaCircleNotch>}
                placeholderSymbol={<FaCircle className="w-4"></FaCircle>}
                fullSymbol={<FaCircle className="w-4 "></FaCircle>}
                readonly
              />
              <span className=" text-black ml-[10px]">
                {data?.reviews.length} Reviews
              </span>
            </p>
            <div className="">
              <h3 className="text-lg font-semibold">Fetures:</h3>
              {data?.roomFeatures.slice(0, 8).map((feture) => (
                <div className="badge badge-outline badge-accent">{feture}</div>
              ))}
            </div>
            <Link to={data?.hotel_website} target="_blank" className="mt-5">
              <button
                className="btn btn-primary">
                view details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
