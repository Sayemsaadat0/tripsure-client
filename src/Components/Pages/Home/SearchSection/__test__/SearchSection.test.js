import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import { Provider } from 'react-redux'; // If using Redux
 // Adjust the import path as needed
import store from '../../../../../App/Store';
import SearchSection from '../SearchSection';
// import store from './your-redux-store'; // Import your Redux store

// Mock Axios
jest.mock('axios');

describe('SearchSection', () => {
  it('should render the component', () => {
    render(
      <Provider store={store}>
        <SearchSection />
      </Provider>
    );

    // Assert that the component renders without errors
    expect(screen.getByText('Search All')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    // Add more assertions as needed
  });

  it('should handle search form submission', async () => {
    const mockData = [
      // Mock your API response data here
    ];

    axios.get.mockResolvedValueOnce({ data: mockData });

    render(
      <Provider store={store}>
        <SearchSection />
      </Provider>
    );

    // Find the input field and submit button
    const inputField = screen.getByPlaceholderText('Hotel name or destination');
    const submitButton = screen.getByText('Search');

    // Simulate user input and form submission
    fireEvent.change(inputField, { target: { value: 'Example Search' } });
    fireEvent.click(submitButton);

    // Wait for Axios request to complete
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('Example Search'));
      expect(axios.get).toHaveBeenCalledTimes(1);
    });

    // Assert that the search results are displayed
    expect(screen.getByText('Search results')).toBeInTheDocument();
    // Add more assertions based on your component's behavior
  });

  it('should handle different active categories', () => {
    render(
      <Provider store={store}>
        <SearchSection />
      </Provider>
    );

    // Find the category buttons
    const hotelsButton = screen.getByText('Hotels');
    const thingsToDoButton = screen.getByText('Things To Do');

    // Simulate clicking different category buttons
    fireEvent.click(hotelsButton);
    expect(screen.getByText('Search for Hotels')).toBeInTheDocument();

    fireEvent.click(thingsToDoButton);
    expect(screen.getByText('Search for Things To Do')).toBeInTheDocument();
  });

  it('should handle form submission with different active categories', async () => {
    render(
      <Provider store={store}>
        <SearchSection />
      </Provider>
    );

    const axiosGetSpy = jest.spyOn(axios, 'get');

    // Find the category buttons and search input
    const hotelsButton = screen.getByText('Hotels');
    const thingsToDoButton = screen.getByText('Things To Do');
    const inputField = screen.getByPlaceholderText('Hotel name or destination');

    // Simulate clicking the category buttons and submitting the form
    fireEvent.click(hotelsButton);
    fireEvent.change(inputField, { target: { value: 'Hotel Search' } });
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      expect(axiosGetSpy).toHaveBeenCalledWith(expect.stringContaining('Hotel Search'));
      expect(axiosGetSpy).toHaveBeenCalledTimes(1);
    });

    fireEvent.click(thingsToDoButton);
    fireEvent.change(inputField, { target: { value: 'Activity Search' } });
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      expect(axiosGetSpy).toHaveBeenCalledWith(expect.stringContaining('Activity Search'));
      expect(axiosGetSpy).toHaveBeenCalledTimes(2);
    });

    axiosGetSpy.mockRestore();
  });

  // Add more test cases as needed
});
