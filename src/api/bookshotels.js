export const addRoom = async roomData => {
    const response = await fetch(`http://localhost:1000/dashboard/addhotels`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(roomData),
    })
  
    const data = await response.json()
    return data
  }