import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import Container from '../../../LayOut/Container';
import { AutoComplete } from 'antd';

const { Meta } = Card;

const TravelGuides = () => {
  const [guides, setGuides] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedGuide, setSelectedGuide] = useState(null); 

  
  useEffect(() => {
    fetch('/guides.json')
      .then((res) => res.json())
      .then((data) => setGuides(data));
  }, []);

  const options = guides.map((guide) => ({
    value: guide.country,
    label: `${guide.country}`,
  }));

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  // Function to open the modal and set the selected guide
  const openGuideDetails = (guide) => {
    setSelectedGuide(guide);
    const modal = document.getElementById('guide_modal');
    modal.open = true; 
  };

  return (
    <div className='mt-20 min-h-screen'>
      <Container>
        <div className='md:pt-10 px-10 text-center md:text-left md:flex justify-between'>
          <h3 className='font-bold mb-4 text-xl tracking-widest underline underline-offset-2'>
            Meet Our Guides
          </h3>

          <div className='flex justify-start my-5'>
            <AutoComplete
              className=''
              style={{ width: 250 }}
              options={options}
              placeholder='Search by country or name'
              filterOption={(inputValue, option) =>
                option.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              onChange={handleSelectChange}
            />
          </div>
        </div>

        {/* card */}
        <div className='place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          {guides
            .filter((guide) =>
              !selectedValue ||
              guide.country.toLowerCase().includes(selectedValue.toLowerCase()) ||
              guide.name.toLowerCase().includes(selectedValue.toLowerCase())
            )
            .map((guide, index) => (
              <Card
                key={index}
                hoverable
                style={{
                  width: 260,
                  padding: 0,
                }}>
                <img
                  className='w-full object-cover p-0'
                  src={guide.picture}
                  alt='example'
                  onClick={() => openGuideDetails(guide)}
                  style={{ cursor: 'pointer' }}
                />
                <div className='p-4'>
                  <p className='font-semibold text-lg tracking-widest' onClick={() => openGuideDetails(guide)}>
                    {guide.name}
                  </p>
                  <p>{guide.country}</p>
                  <p>Occupation : {guide.occupation}</p>
                  <p>ratings : {guide.rating}</p>
                </div>
              </Card>
            ))}
        </div>
      </Container>

      {/* Guide Details Modal */}
      {selectedGuide && (
        <dialog id="guide_modal" className="modal bg-white">
          <form method="dialog" className="modal-box">
            <button
              className="hover:text-white w-8 h-8 rounded-full absolute duration-500 right-2 top-2 hover:bg-[#79c7ff]"
              onClick={() => setSelectedGuide(null)}>
              ✕
            </button>
            <div className="">
              <h3 > <span className="font-bold text-lg my-2">{selectedGuide.name} </span>Details</h3>

              <div className='my-4'>
                <img
                  className="w-32 md:rounded-full"
                  src={selectedGuide.picture}
                  alt="Guide's picture"
                />

              </div>
              <div>
                <h2 className="font-bold"></h2>
                <p><span className='font-bold'>Speaks: </span>{selectedGuide.speaks.join(', ')}</p>
                <p><span className='font-bold'>Age: </span> {selectedGuide.age}</p>
                <p>Gender: {selectedGuide.gender}</p>
                <p>Guiding Locations: {selectedGuide.guiding_locations.join(', ')}</p>
                <p>Specialties: {selectedGuide.specialties.join(', ')}</p>
                <p>Description: {selectedGuide.description}</p>
                <p>Rating: {selectedGuide.rating}</p>
              </div>
            </div>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default TravelGuides;
