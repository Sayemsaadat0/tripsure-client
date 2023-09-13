import React from 'react';
import { render } from '@testing-library/react';
import FlightCard from '../FlightCard';
describe('FlightCard Component', () => {
  it('renders without crashing', () => {
    const searchResults = [
      
      {
        departure_airport: {
          name: 'Departure Airport',
          country: 'Departure Country',
        },
        departure_time: 'Departure Time',
        arrival_airport: {
          name: 'Arrival Airport',
          country: 'Arrival Country',
        },
        arrival_time: 'Arrival Time',
        total_time: 'Total Flight Time',
        prices: {
          economy: 100,
          business: 200,
          first_class: 300,
        },
      },
    ];

    render(<FlightCard searchResults={searchResults} />);
  });
});
