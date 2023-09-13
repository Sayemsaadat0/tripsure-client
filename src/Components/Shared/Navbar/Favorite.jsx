import React, { useState, useEffect } from "react";
import Container from "../../../LayOut/Container";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import { BsSuitHeart, BsSuitHeartFill, BsTrash } from 'react-icons/bs';
import { useGetYourFavoritItemsQuery, useRemoveFavoriteItemMutation } from "../../../Features/favorite/favoriteApi";
import { Link } from "react-router-dom";

const Favorite = () => {
  const { user } = useAuth();
  // const [favoritePackage, setFavoritePackage] = useState([]);
  const { data: favoritePackage,isLoading, refetch } = useGetYourFavoritItemsQuery(user?.email)
  const [remove_from_favorite] = useRemoveFavoriteItemMutation()
  console.log(favoritePackage)
  // useEffect(() => {
  //   axios.get(`http://localhost:1000/getFavoritePackage/${user?.email}/favorite-packages`)
  //     .then((res) => {
  //       setFavoritePackage(res.data);
  //     });
  // }, [user]);

  // const handleRemoveFromFavorite = (packageId) => {
  //   axios.put(`http://localhost:1000/removeFromFavorite/${user?.email}`, { "packageId": packageId })
  //     .then((res) => {
  //       if (res.data.modifiedCount > 0) {
  //         setFavoritePackage(prevFavoritePackage => prevFavoritePackage.filter(item => item._id !== packageId));
  //       }
  //     });
  // }

  // const isItemInFavorites = (itemId) => {
  //   return favoritePackage.some(item => item._id === itemId);
  // };

  // handle remove from my faborite
  const handleRemoveFromFavorite = (id) => {
    remove_from_favorite(id)
    refetch()
  }

  return (
    <Container>
      <div className="min-h-screen">
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 md:p-4">
          {favoritePackage?.map(favoritePackage =>
            <div key={favoritePackage._id} className="card card-compact  bg-white shadow-xl">
              <img src={favoritePackage?.picture} alt="favorite item picture" />
              <div className="card-body">
                <h2 className="card-title">{favoritePackage?.title}</h2>
                {/* <p>{favoritePackage?.description.slice(0, 100)}...</p> */}
                <div className="flex justify-between items-center">
                  <Link to={`/travelDeals/${favoritePackage.id}`}>
                    <button className="btn">View Details</button>
                  </Link>
                  {/* <button className="absoulte top-2 right-2" onClick={() => handleRemoveFromFavorite(favoritePackage._id)}>
                    {isItemInFavorites(favoritePackage._id) ? (
                      <BsSuitHeartFill className="text-lg" />
                    ) : (
                      <BsSuitHeart className="text-lg" />
                    )}
                  </button> */}
                  <button
                    onClick={() => handleRemoveFromFavorite(favoritePackage._id)}
                    className={` rounded-full bg-red-600 p-2 text-white`}>
                    <BsTrash className="text-lg" />
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
