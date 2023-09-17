import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import ReactPaginate from "react-paginate";

const ManageBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Updated to start from page 1
  const dataPerPage = 10;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/payments/pay`)
      .then((data) => {
        setAllBookings(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const displayedBookings = allBookings.slice(
    currentPage * dataPerPage,
    (currentPage + 1) * dataPerPage
  );

  return (
    <div className=" w-full mt-8">
      <div className="bg-white w-full overflow-x-auto">
        <h3 className="font-bold text-2xl  text-center">Manage Bookings</h3>
        <h4 className="text-xl font-semibold text-start pb-4">
          Total Bookings: {allBookings.length}
        </h4>
        <table className="w-full">
          <thead>
            <tr className="bg-[#34A0A4] text-white">
              <th className="px-4 py-2">Se.No</th>
              <th className="px-6 py-2">User Email</th>{" "}
              <th className="px-8 py-2">Selected Date</th>{" "}
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            {displayedBookings.map((booking, index) => (
              <tr
                key={booking._id}
                className="bg-white border-b-2 border-gray-200"
              >
                <td className="px-4 py-2 text-center">
                  {currentPage * dataPerPage + index + 1}
                </td>
                <td className="px-6 py-2 text-center">
                  {booking?.user ? booking.user : "User email not found"}
                </td>
                <td className="px-8 py-2 text-center">
                  {booking?.selectedDate
                    ? booking.selectedDate
                    : "No selected date"}
                </td>
                <td className="px-4 py-2 text-center">{`$ ${
                  booking?.price ? booking.price : "00"
                }`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center gap-2 mb-12 pt-8">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(allBookings.length / dataPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"flex justify-center items-center space-x-2"}
          pageClassName={`group bg-gray-300 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 ${
            currentPage === 1 ? "active:bg-teal-600 bg-teal-700" : ""
          }`}
          previousClassName={`group bg-gray-300 text-gray-600 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-400 transition-all duration-300 transform hover:scale-105 ${
            currentPage === 0 ? "active:bg-gray-400 cursor-not-allowed" : ""
          }`}
          nextClassName={`group bg-gray-300 text-gray-600 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-400 transition-all duration-300 transform hover:scale-105 ${
            currentPage === Math.ceil(allBookings.length / dataPerPage) - 1
              ? "active:bg-gray-400 cursor-not-allowed"
              : ""
          }`}
          activeClassName={"bg-teal-600 text-white"}
          disabledClassName={"text-gray-400 cursor-not-allowed"}
        />
      </div>
    </div>
  );
};

export default ManageBookings;
