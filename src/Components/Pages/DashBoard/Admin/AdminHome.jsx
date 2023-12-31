import React, { useEffect, useState } from "react";
import moment from "moment";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

import AdminHomeUserData from './AdminHomeUserData';
import AdminHomePriceChart from './AdminHomePriceChart';
import NewUser from './AdminHomeNewUser';
import NewBookings from './AdminHomeNewBooking';
import axios from 'axios';

const AdminHome = () => {

  const data = [
    { name: "Group A", month: "January", value: 400 },
    { name: "Group B", month: "February", value: 300 },
    { name: "Group B", month: "February", value: 300 },
    { name: "Group B", month: "February", value: 300 },
    { name: "Group C", month: "March", value: 300 },
  ];
  const COLORS = ["#34a0a4"];

  // pyaemnt bookings
  const [payments, setPyaments] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalBooking, setTotalBooking] = useState([])
  // console.log(totalPrice)
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_API}/payments`)
      .then(res => {
        console.log(res)
        setPyaments(res.data)
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }, [])

  useEffect(() => {
    const calculatedTotalPrice = payments.reduce(
      (total, payment) => total + payment.price,
      0
    );
    setTotalPrice(calculatedTotalPrice);
  }, [payments]);

  // get new users data 
  const [newUser, setNewUsers] = useState()
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_API}/users`)
      .then(res => {
        // console.log(res.data);
        setNewUsers([...res.data].reverse()) // Assuming the response contains data you want to log
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  // get total bookings data 
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/payments/pay`)
      .then((res) => {
        setTotalBooking([...res.data].reverse())
      })
      .catch((error) => console.log(error));
  }, []);
console.log(totalBooking)

  return (
    <div className="flex flex-col max-w-full gap-4 bg-[#F3F4F6] p-2 mt-4">
      <AdminHomeUserData totalBooking={totalBooking} newUser={newUser}></AdminHomeUserData>

      <div className="flex flex-col lg:flex-row gap-4 w-full mb-10">
        <div className='lg:w-3/5 w-full'>
          <AdminHomePriceChart></AdminHomePriceChart>
        </div>

        <section className='flex flex-col lg:w-2/5 w-full justify-center bg-white p-4 rounded-sm border border-gray-200'>
          <h2 className='px-4 py-2 font-bold text-xl'>Visitors by Nations </h2>

          <ResponsiveContainer width='100%' height={250}>
            <PieChart>
              <Pie dataKey="value" data={data} label fill="#fff">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

        </section>

      </div>

      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className='lg:w-3/5'>
          <NewUser newUser={newUser}></NewUser>
        </div>
        <div className='lg:w-2/5'>
          <NewBookings totalBooking={totalBooking}></NewBookings>
        </div>

      </div>
    </div>
  )

};

export default AdminHome;





