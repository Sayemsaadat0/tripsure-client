import React, { useState, useEffect } from "react";
import Container from "../../../LayOut/Container";
import { useActionData } from "react-router-dom";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

const Favorite = () => {
  const { user } = useAuth();
  const [favoritePackage, setFavoritePackage] = useState([]);

  useEffect(() => {
    axios.get(`https://tripsure-server-sayemsaadat0.vercel.app/getFavoritePackage/${user?.email}/favorite-packages`)
      .then((res) => {
        setFavoritePackage(res.data);
      });
  }, [user]);

  const handleRemoveFromFavorite = (packageId) => {
    axios.put(`https://tripsure-server-sayemsaadat0.vercel.app/removeFromFavorite/${user?.email}`, { "packageId": packageId })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setFavoritePackage(prevFavoritePackage => prevFavoritePackage.filter(item => item._id !== packageId));
        }
      });
  }

  const isItemInFavorites = (itemId) => {
    return favoritePackage.some(item => item._id === itemId);
  };

  return (
    <Container>
      <div className="min-h-screen">
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 md:p-4">
          {favoritePackage.map(favoritePackage =>
            <div key={favoritePackage._id} className="card card-compact  bg-white shadow-xl">
              <img src={favoritePackage?.picture} alt="favorite item picture" />
              <div className="card-body">
                <h2 className="card-title">{favoritePackage?.title}</h2>
                <p>{favoritePackage?.description.slice(0, 100)}...</p>
                <div className="">
                  <button className="btn">Buy Now</button>
                
                
                  <button className="absoulte top-2 right-2" onClick={() => handleRemoveFromFavorite(favoritePackage._id)}>
                    {isItemInFavorites(favoritePackage._id) ? (
                      <BsSuitHeartFill className="text-lg" />
                    ) : (
                      <BsSuitHeart className="text-lg" />
                    )}
                  </button>
                

                
                

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Favorite;
