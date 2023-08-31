import React, { useEffect, useState } from "react";
import axios from "axios";

const UserGuide = () => {
  const [guideData, setGuideData] = useState(null);

  useEffect(() => {
    async function fetchGuideData() {
      try {
        const response = await axios.get("https://tripsure-server-sayemsaadat0.vercel.app/allguide");
        setGuideData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchGuideData();
  }, []);

 
  return (
    <div className="w-full">
      <h2  className="text-xl font-bold mt-20 mb-15 text-center">User Guide Information</h2>
      {guideData ? (
        <div className="overflow-x-auto">
          <table className="table w-full mt-32">
           <thead>
             <tr className="text-base text-black ">
              <th>#</th>
              <th>Guide Name</th>
              <th>Language</th>
              <th>Experience</th>
              <th>Availability</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {guideData.map((guide, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{guide.name}</td>
                <td>{guide.language}</td>
                <td className="text-center">{guide.experience}</td>
                <td>{guide.availability}</td>
                <td>
                  <button className="btn btn-secondary">button</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      ) : (
        <p className="text-pink-700 text-center mt-20 ">No guide data available.</p>
      )}
    </div>
  );
};

export default UserGuide;
