import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ManageBookings = () => {
  // const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility
  // const [paymentSuccessful, setPaymentSuccessful] = useState(false); // State to track payment status

  // const handleCalendarClick = () => {
  //   setShowCalendar(!showCalendar);
  // };

  // Simulate payment success/failure
  // const handlePayment = () => {
  //   // In a real application, you would handle payment processing and set the payment status accordingly.
  //   setPaymentSuccessful(true);
  // };

  const trips = [
    {
      id: 1,
      email:'netravel@gmail.com',
      name:'agency1',
      image:'https://i.ibb.co/Hr6khp9/author3.jpg',
      destination: "New York",
      startDate: "2023-09-15",
      endDate: "2023-09-20",
      passengers: 2,
      booked: true,
      type: "flights",
      status: "Confirmed",
      title: "London to New York City",
      price: 800,
    },
    {
      id: 2,
      email:'newravel@gmail.com',
      name:'agency2',
      image:'https://i.ibb.co/Hr6khp9/author3.jpg',
      destination: "Paris",
      startDate: "2023-10-10",
      endDate: "2023-10-20",
      passengers: 1,
      booked: false,
      type: "Leisure",
      status: "Pending",
      title: "Romantic Parisian Getaway",
      price: 1200,
    },
    {
      id: 3,
      email:'newravel@gmail.com',
      name:'travel agncy',
      image:'https://i.ibb.co/Hr6khp9/author3.jpg',
      destination: "poland",
      startDate: "2023-10-10",
      endDate: "2023-10-20",
      passengers: 1,
      booked: true,
      type: "car",
      status: "Confirmed",
      title: "poland city to nested city",
      price: 1200,
    },
    {
      id: 4,
      email:'denmarkravel@gmail.com',
      name:'agency4',
      image:'https://i.ibb.co/Hr6khp9/author3.jpg',
      destination: "denmark",
      startDate: "2023-10-10",
      endDate: "2023-10-20",
      passengers: 1,
      booked: false,
      type: "bus",
      status: "Pending",
      title: "southland to capital city",
      price: 1200,
    },
    // Add more trip objects as needed
  ];

  return (
    <div className="w-full ">
      <div className="">
        <h2 className="text-center my-20 text-2xl font-bold"> Manage Bookings </h2>

        <div className="card mb-10 m-2">
          <p className="card-title">total Bokings & inqueires : <span className="text-pink-500">{trips.length} </span></p>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-base text-black ">
                <th>type</th>
                <th>Image</th>
                <th>title</th>
                <th>location</th>
                <th>start date</th>
                <th>end date</th>
                <th>price</th>
                <th>status</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {
                trips?.map(trip => 
                <tr key={trip.id}>
                  <th>{trip.type}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={trip.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{trip.name}</div>
                        <div className="text-sm opacity-50">{trip.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{trip.title}</td>
                  <td>{trip.destination}</td>
                  <td>{trip.startDate}</td>
                  <td>
                  {trip.endDate}
                  </td>
                  <td>
                  $ {trip.price}
                  </td>
                  <td>
                  {trip.status}
                  </td>
                  <td className="text-xl">{trip.status === 'Confirmed' ? "✔️" : "❌"}</td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
        {/* <div className="hidden">
          <button className="btn" onClick={handlePayment}>
            Make Payment
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ManageBookings;
