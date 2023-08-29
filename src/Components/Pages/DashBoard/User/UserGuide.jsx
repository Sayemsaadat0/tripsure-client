import React, { useEffect, useState } from "react";
import axios from "axios";

const UserGuide = () => {
  const [guideData, setGuideData] = useState(null);

  useEffect(() => {
    async function fetchGuideData() {
      try {
        const response = await axios.get("http://localhost:1000/allguide");
        setGuideData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchGuideData();
  }, []);

  return (
    <div className="w-full">
      <h2>User Guide Information</h2>
      {guideData ? (
        <table>
          <thead>
            <tr>
              <th>Guide Name</th>
              <th>Language</th>
              <th>Experience</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {guideData.map((guide, index) => (
              <tr key={index}>
                <td>{guide.name}</td>
                <td>{guide.language}</td>
                <td>{guide.experience}</td>
                <td>{guide.availability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No guide data available.</p>
      )}
    </div>
  );
};

export default UserGuide;
