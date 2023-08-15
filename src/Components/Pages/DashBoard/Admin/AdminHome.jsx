import React from "react";
import { BarChart, Bar, Tooltip } from "recharts";
const AdminHome = () => {
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

  return (
    <div className="h-full px-2">
      <div>
        <h2 className="text-teal-500 text-2xl mt-5 mb-10 ">
          Welcome Back Andrew Dashboard
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5 ">
        <div className="px-4">
          <div className="card w-80 bg-[#bbe0f1] ">
            <div className="card-body">
              <h2>
                Total Users: <span>1500 +</span>{" "}
              </h2>
              <h2>
                Total Users: <span>1500 +</span>
              </h2>
            </div>
          </div>

          <div className="card rounded-md mt-10">
            <h2 className="text-teal-600 font-semibold text-lg mb-4">
              New Users
            </h2>
            <div className="overflow-x-auto">
              <table className="table bg-[#bbe0f1] ">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>place</th>
                    <th>status</th>
                    <th>discount</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="card  bg-[#bbe0f1] ">
          <div className="card-body">
            <h2>Month OVerview</h2>

            <BarChart width={400} height={300} data={data}>
              <Bar  dataKey="uv" fill="#8884d8" />
              <Tooltip />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
