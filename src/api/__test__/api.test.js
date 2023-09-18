
import { addRoom,addresturants,addpackages } from '../bookshotels'; //Replace with the correct path to your API file


// Mock fetch function

global.fetch = jest.fn();

describe('API Functions', () => {
  // Test for addRoom
  it('should send a POST request for addRoom with the correct data', async () => {
    // Arrange
    const roomData = { /* Replace with your test data for addRoom */ };
    global.fetch.mockResolvedValueOnce({ json: () => Promise.resolve({ success: true }) });

    // Act
    const result = await addRoom(roomData);

    // Assert
    expect(fetch).toHaveBeenCalledWith(`${import.meta.env.VITE_BACKEND_API}/dashboard/addhotels`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(roomData),
    });
    expect(result).toEqual({ success: true });
  });

  // Test for addresturants
  it('should send a POST request for addresturants with the correct data', async () => {
    // Arrange
    const restaurantData = { /* Replace with your test data for addresturants */ };
    global.fetch.mockResolvedValueOnce({ json: () => Promise.resolve({ success: true }) });

    // Act
    const result = await addresturants(restaurantData);

    // Assert
    expect(fetch).toHaveBeenCalledWith('https://tripsure-server-sayemsaadat0.vercel.app/dashboard/addresturants', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(restaurantData),
    });
    expect(result).toEqual({ success: true });
  });

  // Test for addpackages
  it('should send a POST request for addpackages with the correct data', async () => {
    // Arrange
    const packageData = { /* Replace with your test data for addpackages */ };
    global.fetch.mockResolvedValueOnce({ json: () => Promise.resolve({ success: true }) });

    // Act
    const result = await addpackages(packageData);

    // Assert
    expect(fetch).toHaveBeenCalledWith('https://tripsure-server-sayemsaadat0.vercel.app/dashboard/packages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(packageData),
    });
    expect(result).toEqual({ success: true });
  });
});


// irfan test by ---passs the three called the book












