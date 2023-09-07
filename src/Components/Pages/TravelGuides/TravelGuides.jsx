import React from 'react';
import { Card } from 'antd';
import Container from '../../../LayOut/Container';
const { Meta } = Card;
import { AutoComplete } from 'antd';

const TravelGuides = () => {
  const options = [
    {
      value: 'Burns Bay Road',
    },
    {
      value: 'Downing Street',
    },
    {
      value: 'Wall Street',
    },
  ];

  return (
    <div className='mt-20 min-h-screen'>

      <Container>
        <div className='md:pt-10 px-10 text-center md:text-left md:flex justify-between'>
          <h3 className='font-bold mb-4 text-xl tracking-widest  underline underline-offset-2'>Meet Our Guides</h3>

          <div className='flex gap-10  items-center'>
            <AutoComplete
              className=''
              style={{
                width: 250,
              }}
              options={options}
              placeholder="try to type `b`"
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 }/>

            <select className="select select-bordered">
              <option disabled selected>Country</option>
              <option>Bangladesh</option>
              <option>India</option>
            </select>
          </div>


        </div>
        <div className='pt-16 px-10'>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img className='h-[300px]' alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <p>Name</p>
            <p>Location</p>
            <p>Ocupation</p>
            <p></p>
            <p>Rating</p>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default TravelGuides;


// todo  make guide data with
// search by name or email implement 
// sort by country 
/* 
 {
  "name": "Mizanur Rahman",
  "rating": 4.7,
  "residence": "Dhaka, Bangladesh",
  "guiding_locations": ["Dhaka", "Cox's Bazar", "Sundarbans"],
  "occupation": "Local Culture and Nature Guide",
  "languages": ["Bengali", "English"],
  "specialties": ["Cultural Heritage", "Eco-Tourism"],
  "description": "Explore the rich cultural heritage and breathtaking natural beauty of Bangladesh with me. From bustling Dhaka to the serene Sundarbans, I'll be your guide to this remarkable land.",
  "image": "bangladeshi-guide.jpg"
  "age" : 30 ,


*/