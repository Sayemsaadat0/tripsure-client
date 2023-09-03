import React, { useEffect, useState } from "react";
import Container from "../../../../LayOut/Container";
import { Link } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const TopThingsToDo = () => {
  const [TopThingsTodo, setTopThingsTodo] = useState([]);

  useEffect(() => {
    fetch("x.json")
      .then((res) => res.json())
      .then((data) => setTopThingsTodo(data));
  }, []);
  return (
    <Container>
      <SectionTitle text={'Top Things to Do for Every Adventurer'} subText={'Worldwide Escapes'}></SectionTitle>

      <section className='grid overflow-x-auto lg:grid-cols-4 gap-12 px-5 pb-20 pt-12'>

        {
          TopThingsTodo.map((todo, index) => (

            <Link key={index} to={`/travelerChoose-thingsToDo/${todo?.categoryName}`}>
              <div className="">
                <img className='h-40 hover:scale-110 duration-700 rounded-lg w-full  
                relative 
                object-cover'
                  src={todo.picture} alt="" />
                <h2 className='font-bold mt-3  '>{todo.categoryName}</h2>
              </div>
            </Link>
          ))}

      </section>
    </Container>
  );
};

export default TopThingsToDo;


/* 



const TopDestinations = () => {
  const [TopDestinations, setTopDestinations] = useState([]);

  useEffect(() => {
    fetch("https://tripsure-server-sayemsaadat0.vercel.app/top-destinations")
      .then((res) => res.json())
      .then((data) => setTopDestinations(data));
  }, []);
  return (
   
  );
};

export default TopDestinations;



 */



/* 






 */

/* 


   
*/