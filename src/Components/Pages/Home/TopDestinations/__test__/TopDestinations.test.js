// TopDestinations.test.js
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import TopDestinations from '../TopDestinations';
// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([{ _id: '1', picture: 'image1.jpg', cardtitle: 'Destination 1' }]),
  })
);

describe('TopDestinations Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock calls between tests
  });

  it('renders without crashing', () => {
    render(<TopDestinations />);
    const sectionTitle = screen.getByText('Explore the Ultimate Top Destinations Journey to Perfection');
    expect(sectionTitle).toBeInTheDocument();
  });

  it('fetches data and renders destinations', async () => {
    render(<TopDestinations />);

    // Wait for the component to fetch data and render
    await waitFor(() => screen.getByText('Destination 1'));

    // Assert that the data has been fetched and rendered
    const destinationLink = screen.getByRole('link', { name: /destination 1/i });
    expect(destinationLink).toBeInTheDocument();

    // You can add more assertions to verify the rendering of other elements as needed
  });

  // Add more test cases as needed
});
