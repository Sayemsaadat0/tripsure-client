import React, { useState } from "react";
    import {
        BarChart,
        Bar,
        XAxis,
        YAxis,
        CartesianGrid,
        Tooltip,
        Legend
      } from "recharts";
      
const VisitedChart = () => {

  const [selectedYear, setSelectedYear] = useState("2023");
  const [selectedMonth, setSelectedMonth] = useState("August");

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
      const data = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        
      ];
      const data2 = [
        {
          name: "January 2023",
          uv: 3000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: "February 2023",
          uv: 2500,
          pv: 1398,
          amt: 2210,
        },
        {
          name: "March 2023",
          uv: 4000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: "April 2023",
          uv: 4000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: "May 2023",
          uv: 4000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: "June 2023",
          uv: 4000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: "July 2023",
          uv: 4000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: "August 2023",
          uv: 4000,
          pv: 900,
          amt: 2290,
        },
        // ... Add more entries for different months and years
      ];

  const filteredData = data2.filter(
    (entry) =>
      entry.name === `${selectedMonth} ${selectedYear}` // Adjust as per your data structure
  );
  const allMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return (
    <div className="card">
      <div className="card-title">
        <h2>Monthly Visited Overviews</h2>
      </div>
      <div className="flex space-x-4">

        <select className="rounded px-2 py-1 bg-transparent" id="year" value={selectedYear} onChange={handleYearChange}>
          <option value="2023">2023</option>
          {/* Add more options for different years */}
        </select>
        <select className="rounded px-2 py-4 bg-transparent" id="month" value={selectedMonth} onChange={handleMonthChange}>
          {allMonths.map(month => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>
      <BarChart
        width={430}
        height={400}
        data={data} // Use filtered data
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default VisitedChart;
