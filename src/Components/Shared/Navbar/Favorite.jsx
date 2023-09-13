import React from "react";
import Container from "../../../LayOut/Container";
import useAuth from "../../../Hooks/useAuth";
import { BsTrash } from 'react-icons/bs';
import { useGetYourFavoritItemsQuery, useRemoveFavoriteItemMutation } from "../../../Features/favorite/favoriteApi";
import { Link } from "react-router-dom";

const Favorite = () => {
  const { user } = useAuth();
  const { data: favoritePackage, refetch } = useGetYourFavoritItemsQuery(user?.email);
  const [remove_from_favorite] = useRemoveFavoriteItemMutation();
  
  console.log(favoritePackage);
  // Handle remove from my favorite
  const handleRemoveFromFavorite = (id) => {
    remove_from_favorite(id);
    refetch();
  }

  return (
    <Container>
      <div className="min-h-screen">
        <div className="mt-24">
          {favoritePackage?.length === 0 ? (
            <p className="text-center text-xl mt-32">You do not have any saved place.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:p-4">
              {favoritePackage?.map(favoriteItem => (
                <div key={favoriteItem._id} className="card card-compact bg-white shadow-xl">
                  <img src={favoriteItem.picture} alt="favorite item picture" />
                  <div className="card-body">
                    <h2 className="card-title">{favoriteItem.title}</h2>
                    <div className="flex justify-between items-center">
                      <Link to={`/travelDeals/${favoriteItem.hotelId}`}>
                        <button className="btn">View Details</button>
                      </Link>
                      <button
                        onClick={() => handleRemoveFromFavorite(favoriteItem._id)}
                        className={`rounded-full bg-red-600 p-2 text-white`}>
                        <BsTrash className="text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Favorite;
