import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";






import useUsers from '../../../../Hooks/useUsers';
import UserStatus from '../../../Shared/Status/UserStatus';
import AdminHomeUserData from './AdminHomeUserData';
import AdminHomePriceChart from './AdminHomePriceChart';
import NewUser from './AdminHomeNewUser';
import NewBookings from './AdminHomeNewBooking';

const AdminHome = () => {


  // total Earnings chart
  const data = [
    { name: "Group A", month: "January", value: 400 },
    { name: "Group B", month: "February", value: 300 },
    { name: "Group B", month: "February", value: 300 },
    { name: "Group B", month: "February", value: 300 },
    { name: "Group C", month: "March", value: 300 },

  ];
  const COLORS = ['#34a0a4']


  // useEffect(() => {
  //   handleSearch();
  // }, [searchTerm]);

  const users = useUsers()

  return (
    <div className="flex flex-col max-w-full gap-4 bg-[#F3F4F6] p-2 mt-4">
      <AdminHomeUserData></AdminHomeUserData>

      <div className="flex flex-col lg:flex-row gap-4 w-full mb-10">
        <div className='lg:w-3/5 w-full'>
          <AdminHomePriceChart></AdminHomePriceChart>
        </div>

        <section className='flex flex-col lg:w-2/5 w-full justify-center bg-white p-4 rounded-sm border border-gray-200'>
          <h2 className='px-4 py-2 font-bold text-xl'>Visitors by Nations </h2>
          {/* <div style={{ width: 350, height: 200 }}> */}
          <ResponsiveContainer width='100%' height={250}>
            <PieChart>
              <Pie dataKey="value" data={data} label fill="#fff">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* </div> */}
        </section>

      </div>

      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className='lg:w-3/5'>
          <NewUser></NewUser>
        </div>
        <div className='lg:w-2/5'>
          <NewBookings></NewBookings>
        </div>
        {/* <PopularProducts /> */}
      </div>
    </div>
  )
  // return (
  //   <div className=' pt-4 px-4 mx-aut0'>

  //     {/* input */}
  //     <section className='flex justify-between items-center'>


  //       {/*  <div>
  //         <div className="overflow-x-auto">
  //           <table className="table">
  //             head
  //             <thead>
  //               <tr>
  //                 <th></th>
  //                 <th>Name</th>
  //                 <th>Job</th>
  //                 <th>Favorite Color</th>
  //               </tr>
  //             </thead>
  //             <tbody>

  //               {
  //                 searchResults.length > 0 && (
  //                   searchResults.map(user => (
  //                     <tr>
  //                       <th>1</th>
  //                       <td>{user.name}</td>
  //                       <td>{user.email}</td>
  //                       <td>Blue</td>
  //                     </tr>
  //                   ))
  //                 )
  //               }

  //             </tbody>
  //           </table>
  //         </div>
  //       </div> */}

  //       {/* 
  //   {searchResults.length > 0 && (
  //       <div>
  //         <h2>Search Results:</h2>
  //         <ul>
  //           {searchResults.map((user) => (
  //             <li key={user._id}>{user.email}</li>
  //           ))}
  //         </ul>
  //       </div>
  //     )} */}
  //       <div className=' flex justify-between w-full'>
  //         <p className='bg-white p-3 rounded-lg shadow-md'>{moment().format('Do MMMM YYYY, h:mm a')}
  //         </p>
  //         <UserStatus />
  //       </div>

  //     </section>




  //     <div className="flex flex-col xl:flex-row pt-4  ">
  //       {/* left content */}
  //       <div>
  //         {/* <section className='grid grid-cols-1 md:grid-cols-3   w-full'>
  //         </section> */}
  //         {/*      <section className='grid grid-cols-1 md:grid-cols-3   w-full'>
  //           <div className='border flex flex-col items-center  justify-center card bg-red-100 shadow-md w-40  h-28'>
  //             <h3 className='text-3xl font-semibold '>45646</h3>
  //             <p>Total Users</p>
  //           </div>
  //           <div className='border flex flex-col items-center justify-center card bg-amber-100 shadow-md w-40 h-28'>
  //             <h3 className='text-3xl font-semibold '>150</h3>
  //             <p>New Bookings</p>
  //           </div>
  //           <div className='border flex flex-col items-center justify-center card bg-indigo-200 shadow-md w-40 h-28'>
  //             <h3 className='text-3xl font-semibold '>54k</h3>
  //             <p>total earning</p>
  //           </div>
  //         </section> */}
  //           <AdminHomeUserData></AdminHomeUserData>
  //           <AdminHomePriceChart></AdminHomePriceChart>


  //       </div>




  //       {/* right conent */}
  //       <div className="grid flex-grow xl:mt-10 xl:w-2/5  shadow-gray-400 ">

  //         {/* table */}
  //         <div className="overflow-x-auto bg-blue-50 rounded-lg shadow-xl">
  //           <p className='px-2 font-semibold mt-2 text-xl tracking-widest my-6'>New Users</p>
  //           <table className="table">
  //             {/* head */}
  //             <tbody className=''>
  //               {/* row 1 */}
  //               <tr>
  //                 <td className='flex  items-center gap-4'>
  //                   <img className='w-16 rounded-full ' src="https://i.pinimg.com/564x/65/a5/84/65a5840460a9dfb8eebacfb8a1a9ffd5.jpg" alt="" />
  //                   <div>
  //                     <p
  //                       className='font-bold  text-lg'>Yhwach
  //                     </p>
  //                     <p>
  //                       Qualityol@Specialist.com
  //                     </p>
  //                   </div>
  //                 </td>
  //                 <td> Japan </td>
  //               </tr>
  //               {/* row 1 */}
  //               <tr>
  //                 <td className='flex  items-center gap-4'>
  //                   <img className='w-16 rounded-full ' src="https://i.pinimg.com/736x/f1/f3/aa/f1f3aa31515c92f76eeb7a37a3308172.jpg" alt="" />
  //                   <div>
  //                     <p
  //                       className='font-bold  text-lg'>Aizen
  //                     </p>
  //                     <p>
  //                       Qualityol@Specialist.com
  //                     </p>
  //                   </div>
  //                 </td>
  //                 <td>Seoul, Korea</td>
  //               </tr>
  //             </tbody>
  //           </table>

  //         </div>



  //         <div className="overflow-x-auto mt-20 bg-green-50 shadow-lg">
  //           <p className='px-2 font-semibold mt-2 text-xl tracking-widest my-4'>Last Transition</p>
  //           <table className="table">
  //             {/* head */}
  //             <tbody className=''>
  //               {/* row 1 */}
  //               <tr>
  //                 <td className='flex  items-center gap-4'>
  //                   <img className='w-16 rounded-full ' src="https://i.pinimg.com/736x/29/74/d2/2974d2663612eabd1ef31b3b00108f4a.jpg" alt="" />
  //                   <div>
  //                     <p
  //                       className='font-bold  text-lg'>Abu Saadat Md sayem
  //                     </p>
  //                     <p>
  //                       Qualityol@Specialist.com
  //                     </p>
  //                   </div>
  //                 </td>

  //                 <td className='text-xl text-red-300 font-bold'> $457 USD</td>

  //               </tr>
  //             </tbody>
  //           </table>

  //         </div>
  //         {/* chart */}
  //         <section className='flex flex-col md:flex-row  justify-center mt-20'>
  //           <h2 className='px-4 py-2 font-bold text-xl'>Visitors by Nations </h2>
  //           <div style={{ width: 350, height: 200 }}>
  //             <ResponsiveContainer>
  //               <PieChart>
  //                 <Pie dataKey="value" data={data} label fill="#fff">
  //                   {data.map((entry, index) => (
  //                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
  //                   ))}
  //                 </Pie>
  //               </PieChart>
  //             </ResponsiveContainer>
  //           </div>
  //           <hr />
  //         </section>
  //       </div>
  //     </div>

  //   </div>
  // );
};

export default AdminHome;



// {getRandomColor()}

