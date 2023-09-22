import { Card } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../../../LayOut/Container";

const HospitalsFilterBySpeciality = () => {
  const { text } = useParams();

  const [filterSpeciality, setFilterSpeciality] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_API}/medicals/disease/${text}`).then((data) => {
      setFilterSpeciality(data.data);
    });
  }, []);
  console.log(filterSpeciality);
  return (
    <div className="mt-20 h-screen">
      <Container>
        {filterSpeciality &&
          filterSpeciality.map((speciality) => (
            <Card
              className="relative"
              key={speciality._id}
              hoverable
              style={{
                width: 260,
                padding: 0,
                height: 400,
              }}
            >
              <img
                className="w-full object-cover p-0"
                src={speciality?.pictures[0]}
                alt={speciality.hospital_name}
                style={{ cursor: "pointer" }}
              />
              <div className="p-4">
                <p className="font-semibold text-lg tracking-widest">
                  {speciality.hospital_name}
                </p>
                <p>Location: {speciality.location}</p>
                <p>Rating: {speciality.ratings}</p>
                <div className="pt-4  absolute bottom-3">
                  <Link to={`/madicalDetails/${speciality._id}`} className="">
                    <button className="btn-primary">Learn More</button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
      </Container>
    </div>
  );
};

export default HospitalsFilterBySpeciality;
