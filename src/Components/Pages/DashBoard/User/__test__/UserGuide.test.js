import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';

import UserGuide from '../UserGuide.jsx'
import axios from 'axios';

// Mock Axios
jest.mock('axios');

describe('UserGuide', () => {
  it('should render user guide data', async () => {
    // Mock Axios response
    const mockData = [
      {
        name: 'Guide 1',
        language: 'English',
        experience: '5 years',
        availability: 'Available',
      },
      {
        name: 'Guide 2',
        language: 'Spanish',
        experience: '3 years',
        availability: 'Not Available',
      },
    ];

    axios.get.mockResolvedValueOnce({ data: mockData });

    // Render the component
    render(<UserGuide />);

    // Wait for data to load
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(`${import.meta.env.VITE_BACKEND_API}/allguide`);
      expect(axios.get).toHaveBeenCalledTimes(1);
    });

    // Check if the component is rendered
    expect(screen.getByText('User Guide Information')).toBeInTheDocument();

    // Check if guide data is displayed
    mockData.forEach((guide) => {
      expect(screen.getByText(guide.name)).toBeInTheDocument();
      expect(screen.getByText(guide.language)).toBeInTheDocument();
      expect(screen.getByText(guide.experience)).toBeInTheDocument();
      expect(screen.getByText(guide.availability)).toBeInTheDocument();
    });
  });

  it('should handle error when fetching data', async () => {
    // Mock Axios error
    axios.get.mockRejectedValueOnce(new Error('Error fetching data'));

    // Render the component
    render(<UserGuide />);

    // Wait for data to load
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(`${import.meta.env.VITE_BACKEND_API}/allguide`);
      expect(axios.get).toHaveBeenCalledTimes(1);
    });

    // Check if an error message is displayed
    expect(screen.getByText('User Guide Information')).toBeInTheDocument();
    expect(screen.getByText('No guide data available.')).toBeInTheDocument();
    expect(screen.getByText('Error fetching data')).toBeInTheDocument();
  });
});
