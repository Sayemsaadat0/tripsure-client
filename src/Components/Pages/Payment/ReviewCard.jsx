import React from "react";

const ReviewCard = () => {
  return (
    <div className="card md:w-96 bg-base-100 border-2 rounded-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-8">Review Order Details</h2>
        <div className="flex gap-2">
          <div className="w-2/5">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/07/6f/f1/ee.jpg" alt="" />
          </div>
          <div className="w-[60%]">
            <h3 className="font-semibold">The High Roller at The LINQ Ticket</h3>
            <p>Anytime Ride (T1)</p>
            <p>Tuesday, September 5, 2023</p>
            <p>2 Adults</p>
            <p>Non-refundable</p>
          </div>
        </div>
        <div className="flex justify-between">
            <p>Booking Fee</p>
            <p className="text-right">BDT 0,00</p>
        </div>
        <div className="flex justify-between">
            <p>Subtotal</p>
            <p className="text-right">BDT 8,776</p>
        </div>
        <div className="flex justify-between">
            <p>Total</p>
            <p className="text-right">BDT 8,776</p>
        </div>
        <div className="text-center text-sm mt-2">
            <p>You will be charged in USD</p>
            <p className="font-semibold">$80.16</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
