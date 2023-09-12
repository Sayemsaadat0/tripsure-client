import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import useUsers from '../../../../Hooks/useUsers';
import UserStatus from '../../../Shared/Status/UserStatus';
import axios from 'axios';

const AdminHome = () => {


  // total Earnings chart
  const data = [
    { name: "Group A", month: "January", value: 400 },
    { name: "Group B", month: "February", value: 300 },
    { name: "Group B", month: "February", value: 300 },
    { name: "Group B", month: "February", value: 300 },
    { name: "Group C", month: "March", value: 300 },

  ];
const COLORS = ['#34a0a4' ]


  

  const users = useUsers()
  
console.log({users})

const newAdded = users.filter( user => user.role === 'user')
console.log(newAdded)
  

// pyaemnt bookings
const [payments,setPyaments] = useState([])
const [totalPrice, setTotalPrice] = useState(0); 
  useEffect(() =>{
    axios.get("http://localhost:1000/payments")
    .then(res =>{
      setPyaments(res.data)
    })
    .catch(error =>{
      console.error('Error:', error);
    })
  },[])
  
  useEffect(() => {
    // Use reduce to sum the 'price' property of each payment
    const calculatedTotalPrice = payments.reduce(
      (total, payment) => total + payment.price,
      0 // Initialize total with 0
    );
    setTotalPrice(calculatedTotalPrice); // Update total price state
  }, [payments]); 





  return (
    <div className=' pt-4 px-4 mx-auto '>

      {/* input */}
      <section className='flex justify-between items-center'>


        
        <div className='bg-white p-3 rounded-lg shadow-md '>
          <p>{moment().format('Do MMMM YYYY, h:mm a')} </p>

        </div>
          <div>
          <UserStatus/>
         </div>
      </section>




      <div className="flex flex-col lg:flex-row mt-4 ">
        {/* left content */}
        <div className="grid flex-grow card shadow-md shadow-gray-400 w-3/5 bg-white p-2">

          <section className='grid grid-cols-1 md:grid-cols-3   w-full'>
            <div className='border flex flex-col items-center  justify-center card bg-red-100 shadow-md w-40  h-28'>
              <h3 className='text-3xl font-semibold '>{users.length}+</h3>
              <p>Total Users </p>
            </div>
            <div className='border flex flex-col items-center justify-center card bg-amber-100 shadow-md w-40 h-28'>
              <h3 className='text-3xl font-semibold '>150</h3>
              <p>New Bookings</p>
            </div>
            <div className='border flex flex-col items-center justify-center card bg-indigo-200 shadow-md w-40 h-28'>
              <h3 className='text-3xl font-semibold '>{totalPrice} + </h3>
              <p>total earning</p>
            </div>
          </section>


        </div>


        <div className="divider lg:divider-horizontal"></div>

        {/* right conent */}
        <div className="grid flex-grow w-2/5 card bg-white  shadow-md shadow-gray-400 ">

          {/* table */}
          <div className="overflow-x-auto">
            <p className='px-2 font-bold mt-2 text-xl'>New Users</p>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td><span className='font-semibold'>Abu Saadat Md sayem </span></td>
                  <td>QualityControl@Specialist.com
                    <br />
                    country
                  </td>
                  <td>Blue</td>

                </tr>
                <tr>
                  <td><span className='font-semibold'>Abu Saadat Md sayem </span></td>
                  <td>QualityControl@Specialist.com
                    <br />
                    country
                  </td>
                  <td>Blue</td>
                </tr>
                <tr>
                  <td><span className='font-semibold'>Abu Saadat Md sayem </span></td>
                  <td>QualityControl@Specialist.com
                    <br />
                    country
                  </td>
                  <td>Blue</td>
                </tr>
                <tr>
                  <td><span className='font-semibold'>Abu Saadat Md sayem </span></td>
                  <td>QualityControl@Specialist.com
                    <br />
                    country
                  </td>
                  <td>Blue</td>
                </tr>
                <tr>
                  <td><span className='font-semibold'>Abu Saadat Md sayem </span></td>
                  <td>QualityControl@Specialist.com
                    <br />
                    country
                  </td>
                  <td>Blue</td>
                </tr>
              </tbody>
            </table>
            <hr />
          </div>

          {/* chart */}
          <section className='flex  justify-center'>
            <h2 className='px-4 py-2 font-bold text-xl'>Total Earning : 42k</h2>
            <div style={{ width: 350, height: 200 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie dataKey="value" data={data} label fill="#fff">
                    {data.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <hr />
          </section>


        </div>
      </div>
    </div>
  );
};

export default AdminHome;



// {getRandomColor()}

