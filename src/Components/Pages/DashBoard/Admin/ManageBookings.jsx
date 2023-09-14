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
      .get(`http://localhost:1000/payments/pay`)
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
    <div className="w-full ">
      <div className="">
        <h2 className="text-center my-20 text-2xl font-bold">
          {" "}
          Manage Bookings{" "}
        </h2>

        <div className="card mb-10 m-2">
          <p className="card-title">
            total Bookings & inquiries :{" "}
            <span className="text-pink-500">{allBookings?.length} </span>
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-base text-black ">
                <th>Se.No</th>
                <th>Image</th>
                <th>user email</th>
                <th>selected date</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {displayedBookings.map((booking, index) => (
                <tr key={booking._id}>
                  <th>{currentPage * dataPerPage + index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">{/* Your image */}</div>
                      <div>
                        <div className="text-sm opacity-50">
                          {booking?.user
                            ? booking.user
                            : "user email not found"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {booking?.selectedDate
                      ? booking.selectedDate
                      : "no selected date"}
                  </td>
                  <td>$ {booking?.price ? booking.price : "00"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
