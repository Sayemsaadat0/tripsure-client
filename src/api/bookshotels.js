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



export const addresturants = async resturantsData => {
    const response = await fetch(`http://localhost:1000/dashboard/addresturants`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(resturantsData),
    })
  
    const data = await response.json()
    return data
  }
export const addpackages = async packageData => {
    const response = await fetch(`http://localhost:1000/dashboard/packages`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(packageData),
    })
  
    const data = await response.json()
    return data
  }