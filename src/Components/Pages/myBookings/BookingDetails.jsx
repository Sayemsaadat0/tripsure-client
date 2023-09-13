import React from 'react';
import ShareModal from '../../Modal/ShareModal';

const BookingDetails = ({isOpen, setIsOpen,bookinId}) => {
    return (
        <ShareModal isOpen={isOpen} setIsOpen={setIsOpen} title='Booking Details'></ShareModal>
    );
};

export default BookingDetails;