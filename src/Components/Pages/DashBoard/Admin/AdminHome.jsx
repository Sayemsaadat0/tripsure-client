import React from 'react';
import moment from 'moment';

const AdminHome = () => {
  return (
    <div className=' pt-4 px-4'>

      {/* input */}
      <section className='flex  items-center justify-between'>
      <div className="form-control ">
      
      <div className="input-group">
        <input type="text" placeholder="Search User" className="input input-bordered" />
        <button className="btn">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
    <div className='bg-white p-3 rounded-lg shadow-md'>
      <p>{moment().format('Do MMMM YYYY, h:mm a')} </p>
    </div>
      </section>



      <section className='grid grid-cols-1 md:grid-cols-3 mt-10'>
        <div className='border flex flex-col items-center justify-center card bg-white shadow-md w-40 h-28'>
          <h3 className='text-3xl font-semibold '>545555</h3>
          <p>Satisfied Customer</p>
        </div>
        <div className='border flex flex-col items-center justify-center card bg-white shadow-md w-40 h-28'>
          <h3 className='text-3xl font-semibold '>545555</h3>
          <p>Satisfied Customer</p>
        </div>
        <div className='border flex flex-col items-center justify-center card bg-white shadow-md w-40 h-28'>
          <h3 className='text-3xl font-semibold '>545555</h3>
          <p>Satisfied Customer</p>
        </div>
      </section>

    </div>
  );
};

export default AdminHome;




/* 
import { BarChart, Bar, Tooltip } from "recharts";
import VisitedChart from "./Overview/VisitedChart";
import UserCharts from "./Overview/UserCharts"; */

/* 
 const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

*/


{/*  <div className="card rounded-md mt-10">
            <h2 className="text-teal-600 font-semibold text-lg mb-4">
              New Users
            </h2>
            <div className="overflow-x-auto">
              <table className="table bg-[#bbe0f1] ">
            
                <thead>
                  <tr>
                    <th>#</th>
                    <th>place</th>
                    <th>status</th>
                    <th>discount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
{/*   <div className="card  bg-[#bbe0f1] ">
          <div className="card-body">
            <h2>Month OVerview</h2>

            <BarChart width={400} height={300} data={data}>
              <Bar  dataKey="uv" fill="#8884d8" />
              <Tooltip />
            </BarChart>
          </div>
        </div> */}


{/*  <div className="mt-20 ">
       <section className="">
        <VisitedChart></VisitedChart>
       </section>
       <section>
             <UserCharts></UserCharts>
       </section>
      </div> */}