import React from "react";
import Container from "../../../LayOut/Container";
import { useActionData } from "react-router-dom";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";

const Favorite = () => {
  const { logOut, user } = useAuth();
  const [favoritePackage, setFavoritePackage] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:1000/getFavoritePackage/${user?.email}/favorite-packages`)
      .then((res) => {
        setFavoritePackage(res.data);
      });
  }, [user]);
  console.log(favoritePackage);
  return (
    <div className="">
      <Container>
        <div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 md:p-4">
           {
            favoritePackage.map(favoritePackage =><div className="card card-compact  bg-white shadow-xl">
            <figure>
              <img
                src={favoritePackage?.picture}
                alt="favorite item picture"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{favoritePackage?.title}</h2>
              <p>{favoritePackage?.description.slice(0,100)}...</p>
              <div className="">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>)
           }
            
            
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Favorite;
