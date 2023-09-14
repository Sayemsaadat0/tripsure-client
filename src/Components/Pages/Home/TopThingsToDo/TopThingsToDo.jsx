import React, { useEffect, useState } from "react";
import Container from "../../../../LayOut/Container";
import { Link } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import LazyLoad from "react-lazy-load";

const TopThingsToDo = () => {
  const [TopThingsTodo, setTopThingsTodo] = useState([]);

  useEffect(() => {
    fetch("x.json")
      .then((res) => res.json())
      .then((data) => setTopThingsTodo(data));
  }, []);
  return (
    <Container>
      <SectionTitle text={'Top Travel Categories & Destinations'} subText={'Things to Do for Every Adventurer'}></SectionTitle>

      <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-2'>

        {
          TopThingsTodo.map((todo, index) => (

            <Link key={index} to={`/travelerChoose-thingsToDo/${todo?.categoryName}`}>
              <div className="overflow-hidden rounded-xl">
                <LazyLoad>
                  <img className='h-40 
                hover:scale-110 duration-700 
                rounded-lg w-full   
                object-cover'
                    src={todo.picture} alt="" />
                </LazyLoad>
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
    fetch("${import.meta.env.VITE_BACKEND_API}/top-destinations")
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