import React from 'react';


const ReviewCard = ({orderDetails}) => {
  console.log(orderDetails);
  return (
    <div className="card md:w-96 bg-base-100 border-2 rounded-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-8">Review Order Details</h2>
        <div className="flex gap-2">
          <div className="w-2/5">
            <img src={orderDetails?.card?.picture} alt="" />
          </div>
          <div className="w-[60%]">
            <h3 className="font-semibold">{orderDetails?.card?.placetitle? orderDetails?.card?.placetitle: orderDetails?.pickup_location}</h3>
            <p>{orderDetails?.card?.placetitle}</p>
            
            <p><span className='font-semibold'>Date:</span>{orderDetails?.selectedDate? orderDetails?.selectedDate: orderDetails?.pickup_date}</p>
            { orderDetails?.travelerCount?.adult > 0 && 
            <p>{orderDetails?.travelerCount?.adult} Adults</p>
            }
            {orderDetails?.travelerCount?.children > 0 && 
              <p>{orderDetails?.travelerCount?.children} Children</p>
            }
            {orderDetails?.travelerCount?.infants > 0 && 
              <p>{orderDetails?.travelerCount?.infants} Infants</p>
            }
            <p>Non-refundable</p>
          </div>
        </div>
        <div className="flex justify-between">
            <p>Booking Fee</p>
            <p className="text-right">$0,00 USD</p>
        </div>
        <div className="flex justify-between">
            <p>Subtotal</p>
            <p className="text-right">${orderDetails?.price?.totalPrice? orderDetails?.price?.totalPrice: orderDetails?.daily_rate} USD</p>
        </div>
        <div className="flex justify-between">
            <p>Total</p>
            <p className="text-right">${orderDetails?.price?.totalPrice? orderDetails?.price?.totalPrice: orderDetails?.daily_rate} USD</p>
        </div>
        <div className="text-center text-sm mt-2">
            <p>You will be charged in USD</p>
            <p className="font-semibold">${orderDetails?.price?.totalPrice? orderDetails?.price?.totalPrice: orderDetails?.daily_rate}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
