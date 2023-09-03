import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../../LayOut/Container';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { GoStarFill } from 'react-icons/go';

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

      <section className='grid overflow-x-auto lg:grid-cols-4 gap-12 px-5 pb-20 pt-12'>

        {TopDestinations.map((todo, index) => (
          <Link key={index} to={`/top-destination-details/${todo?._id}`}>
            <div className=" card ">
              <img
                className="h-40 w-full object-cover rounded-xl hover:scale-105 duration-700 overflow-hidden"
                src={todo.picture}
                alt="" />
              <h2 className="font-semibold mt-3 hover:text-blue-400 duration-500">
                {todo.placetitle}
              </h2>
              <div className='flex justify-between'>
                <p>{todo.costperperson}$/ <span className='text-xs'>per person</span> </p>
                <p className='flex items-center gap-2'><GoStarFill className='text-red-500'></GoStarFill>  {todo.ratings}</p>
              </div>

            </div>
          </Link>
        ))}
      </section>
    </Container>
  );
};

export default TopDestinations;



