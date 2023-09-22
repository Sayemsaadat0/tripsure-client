import React from 'react';
import ShareModal from '../../Modal/ShareModal';

const EditGuideDetails = ({isOpen, setIsOpen}) => {
    return (
      <ShareModal isOpen={isOpen} setIsOpen={setIsOpen} title={'edit guide details'}>
        hello guide
      </ShareModal>
    );
};

export default EditGuideDetails;