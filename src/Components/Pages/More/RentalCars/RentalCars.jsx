import React, { useState } from "react";
import BottomSection from "./Tabs/BottomSection";
import FindRentalCars from "./Tabs/FindRentalCars";
import RentalSingleCard from "./Tabs/RentalSingleCard/RentalSingleCard";

const RentalCars = () => {
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOutDate, setDropOutDate] = useState("");
  const [unavailableDate, setUnavailableDate] = useState([]);
  const [allCards, setAllCards] = useState([]);
  console.log(allCards);

  const handleFindRentalCardSearch = () => {
    console.log(pickUpDate, pickUpLocation, dropOutDate);

    fetch(
      `http://localhost:1000/rentalcards/search?location=${pickUpLocation}&pickUpDate=${pickUpDate}&dropOffDate=${dropOutDate}&UnavailableDate=${unavailableDate}`
    )
      .then((response) => response.json())
      .then((data) => setAllCards(data))
      .catch((error) => console.error("Error fetching search results:", error));
  };

  return (
    <div className="mt-12">
      <h3 className="md:text-4xl mt-20 text-2xl tracking-widest text-slate-600 font-bold text-center">
        Search for the Best Rental Car Deals
      </h3>
      <div className=" h-auto mt-12">
        <div className="h-auto">
          <div className="">
            <FindRentalCars
              setPickUpLocation={setPickUpLocation}
              setPickUpDate={setPickUpDate}
              setDropOutDate={setDropOutDate}
              handleFindRentalCardSearch={handleFindRentalCardSearch}
            />
          </div>
          <RentalSingleCard data={allCards}></RentalSingleCard>
          <BottomSection />
        </div>
      </div>
    </div>
  );
};

export default RentalCars;
