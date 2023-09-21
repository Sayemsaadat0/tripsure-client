import React, { useEffect, useState } from "react";
import Container from "../../../LayOut/Container";
import moment from "moment";
import BookingDetails from "./BookingDetails";
import { FaXmark } from "react-icons/fa6";
import CancelBookinTimer from "./CancelBookingTimer";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import PageTitle from "../../PageTitle/PageTitle";
// import {FaXmark} from 'react-icons/fa'
const MyBookings = () => {
    const {user} = useAuth();
    const [myBookings, setMyBookings] = useState([]);
    const [viewBooking, setViewBooking] = useState({});

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BACKEND_API}/my-bookings/${user.email}`)
        .then((response)=>{
            setMyBookings(response.data);
        })
        .catch((err)=>{
            console.log("error: ", err);
        })
        
    },[user])
  console.log(new Date());
  const myTrips = [
    {
      name: "Al-Habib",
      place: "Madhutila Eco-Park",
      cost: 330,
      date: new Date(),
      _id: 1,
    },
    {
      name: "Al-Habib",
      place: "Madhutila Eco-Park",
      cost: 230,
      date: new Date(),
      _id: 2,
    },
    {
      name: "Al-Habib",
      place: "Madhutila Eco-Park",
      cost: 30,
      date: new Date(),
      _id: 3,
    },
  ];

  // console.log(new Date().getHours())
  // console.log(new Date().getMinutes())
  // console.log(moment(new Date(), 'ddd MMM DD YYYY h:mm A'))
//   function formatDateToDayMonYear(date) {
//     const months = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];

//     const day = date.getDate();
//     const month = months[date.getMonth()];
//     const year = date.getFullYear();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     if (hours > 12) {
//       return `${day}-${month}-${year} ${hours - 12}:${minutes} PM`;
//     } else {
//       return `${day}-${month}-${year} ${hours}:${minutes} AM`;
//     }
//   }

  const [isOpen, setIsOpen] = useState(false);
  const [bookinId, setBookingId] = useState("");
  const [viewBookingDetails, setViewBookingDetails] = useState({});
  const handlOpenBookingDetailsModalDetails = (trip)=>{
    setIsOpen(true);
    setViewBookingDetails(trip)
  }
  const handlOpenBookingDetailsModal = (id) => {
    setIsOpen(true);
    setBookingId(id);
  };
  return (
    <div className="pt-20">
      <PageTitle title="My Bookings"/>
      <Container>
        <h2 className="text-2xl font-bold py-8 whitespace-nowrap">
          My Bookings
        </h2>

        <div className="overflow-x-auto bg-white">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-[#85C8F7]">
                <th>#</th>
                <th className="text-lg text-white">PlaceName</th>
                <th className="text-lg text-white">Email</th>
                <th className="text-lg text-white"> Price</th>
                <th className="text-lg text-white">Payment Date</th>
                <th className="text-lg text-white">Action</th>
                <th className="text-lg text-white">Cancel</th>
              </tr>
            </thead>
            <tbody>
              {myBookings.map((trip, index) => (
                <tr className={index % 2 === 0 ? "hover" : ""} key={index}>
                  <th>{index + 1}</th>
                  <td>{trip?.card?.card?.title}</td>
                  <td>{trip?.user}</td>
                  <td className="text-right">
                    <span className="text-[#85C8F7]">$</span>
                    {trip?.price}
                  </td>
                  <td>{trip.date}</td>
                  <td>
                    <button
                      onClick={() => handlOpenBookingDetailsModalDetails(trip)}
                      className="px-4 py-2 mx-auto font-bold rounded border-2 border-[#85C8F7] hover:bg-[#75bef3] hover:text-white duration-300 text-[#85C8F7]"
                    >
                      View Details
                    </button>
                  </td>
                  <td>
                    <CancelBookinTimer></CancelBookinTimer>
                    <button
                        
                      onClick={() => handlOpenBookingDetailsModal(trip._id)}
                      className="px-2 py-2 mx-auto font-bold rounded-full border-2 border-[#85C8F7] hover:bg-[#75bef3] hover:text-white duration-300 text-[#85C8F7]"
                    >
                      <FaXmark size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <BookingDetails
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            bookinId={bookinId}
            viewBookingDetails={viewBookingDetails}
          ></BookingDetails>
        </div>
      </Container>
    </div>
  );
};

export default MyBookings;
