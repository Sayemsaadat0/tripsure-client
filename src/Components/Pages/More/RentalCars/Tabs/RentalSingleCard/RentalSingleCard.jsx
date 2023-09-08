import React from 'react';
import Container from '../../../../../../LayOut/Container';
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa';

const RentalSingleCard = ({data}) => {
    return (
        <div>
      <Container>
        <div className="my-12 grid mx-2 lg:mx-4 lg:grid-cols-1 gap-5">
          {
            data?.map((cardItem, _id)=> <div key={_id} className="border p-5 shadow-lg rounded-lg">
            <div className="lg:flex gap-3 space-y-2 md:space-y-0">
              <div className=" rounded-md p-2">
                <span className="bg-orange-500 mb-0 pb-0 text-xs rounded-2xl text-white  px-2">
                  Pick Up Location
                </span>

                <h3 className="text-green-500 flex gap-2 items-center text-xl font-medium">
                  <span>{cardItem?.pickup_location}</span>
                </h3>
                <h3 className='text-slate-500'>{cardItem?.pickup_date}</h3>
                <p className="text-slate-500 border-t-2 mt-2">Car Brand: {cardItem?.car_brand}</p>
                <p className="text-slate-500">Car Model:  {cardItem?.car_model}</p>
              </div>
              <div className="py-3 rounded-md p-2">
                <span className="bg-orange-500 mb-0 pb-0 text-xs rounded-2xl text-white  px-2">
                  Drop Off Location
                </span>
                <h3 className="text-green-500 flex gap-2 items-center text-xl font-medium">
                  <span>{cardItem?.dropoff_location}</span>
                </h3>
                <h3 className='text-slate-500'>{cardItem?.dropoff_date}</h3>
               
               
              </div>
              <div className="py-3  rounded-md p-2">
                <div className="flex gap-2 justify-between items-end">
                  <div>
                    <h2 className="text-green-500 flex gap-2 items-center text-md text-lg">Features:</h2>
                    {
                        cardItem?.features?.map((feature) =><li className='text-slate-500'>{feature}</li>)
                    }
                    <h3 className="text-green-500 flex gap-2 items-center text-md ">
                      Sit Capacity:
                      <span className="font-semibold">{cardItem?.seating_capacity}</span>
                    </h3>
                    <p className="text-lg text-green-500">Daily Rate: {cardItem?.daily_rate}</p>
                  </div>
                  <div className="flex justify-end ">
                    <button className="bg-orange-400 ms-auto hover:bg-orange-600 hover:translate-x-2 font-bold hover:translate-y-2 transition-all  px-4 py-2 rounded-full text-white">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>)
          }
        </div>
      </Container>
    </div>
    );
};

export default RentalSingleCard;