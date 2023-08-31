import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../../LayOut/Container';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const TopDestinations = () => {
  const [TopDestinations, setTopDestinations] = useState([]);

  useEffect(() => {
    fetch("https://tripsure-server-sayemsaadat0.vercel.app/top-destinations")
      .then((res) => res.json())
      .then((data) => setTopDestinations(data));
  }, []);
  return (
    <Container>
      <SectionTitle
        text={"Explor the Ultimate Top Destinations"}
        subText={"Journey to Perfection"}>
      </SectionTitle>

      <section className='grid overflow-x-auto lg:grid-cols-4 gap-12 px-5 py-20 text-center'>

        {TopDestinations.map((todo, index) => (
          <Link key={index} to={`/top-destination-details/${todo?._id}`}>
            <div className=" card hover:scale-110 duration-700">
              <img
                className="h-64 w-full object-cover"
                src={todo.picture}
                alt="" />

              <h2 className="  font-extrabold text-xl    ">
                {todo.cardtitle}
              </h2>
            </div>
          </Link>
        ))}
      </section>
    </Container>
  );
};

export default TopDestinations;



