import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const ManageBookings = () => {
  const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility
  const [paymentSuccessful, setPaymentSuccessful] = useState(false); // State to track payment status

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
  };

  // Simulate payment success/failure
  const handlePayment = () => {
    // In a real application, you would handle payment processing and set the payment status accordingly.
    setPaymentSuccessful(true);
  };

    return (
        <div className='w-full '>
              <div className=''>
            <h2 className='text-center mb-10'> Manage Bookings </h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
          <tr className='text-lg text-black font-bold'>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>AGency</th>
                        <th>Calender</th>
                        <th>Payment</th>
                    </tr>
                </thead>
    <tbody>
     
      <tr>
        <th>
         1
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://i.ibb.co/Hr6khp9/author3.jpg" alt="tour image" />
              </div>
            </div>
          </div>
        </td>
        <td>travel Omuk</td>
        <td>Mdshihab @gmail.com</td>
        <td onClick={handleCalendarClick} style={{ cursor: 'pointer' }}>
                  {showCalendar ? (
                    <Calendar /> // Display the calendar component when clicked
                  ) : (
                    'Date Books'
                  )}
                </td>
        <td className='text-xl'>{paymentSuccessful ? '✔️' : '❌'}</td>
       
              </tr>
      
     
      
    </tbody>
    
    
  </table>
</div>
<div className='hidden'>
<button className='btn' onClick={handlePayment}>Make Payment</button>
</div>

        </div>
        </div>
    );
};

export default ManageBookings;