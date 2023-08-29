import React, { useState } from "react";
import ShareModal from "../../Modal/ShareModal";

const PlaceDetails = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <ShareModal title={"About info"} isOpen={isOpen} setIsOpen={setIsOpen}>
        Veluvana is a unique bamboo house with a wonderful view of Sidemen
        Valley, a genuine tropical landscape with Mount Agung peak on its back.
        This getaway spot is a great place to bring into reality the dream
        adventure of the true wanderer. We invite you to feel the magnificent
        vibes of the entire house to escape the life that is full of drama into
        a journey with ultimate joys
      </ShareModal>
    </div>
  );
};

export default PlaceDetails;
