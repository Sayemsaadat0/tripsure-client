import React from 'react';
import ShareModal from '../../Modal/ShareModal';

const BookingDetails = ({isOpen, setIsOpen,bookinId,viewBookingDetails}) => {
    return (
        <ShareModal isOpen={isOpen} setIsOpen={setIsOpen} viewBookingDetails={viewBookingDetails} title={"modal details"}></ShareModal>
    );
};

export default BookingDetails;