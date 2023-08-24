export const addRoom = async roomData => {
    const response = await fetch(`https://tripsure-server-sayemsaadat0.vercel.app/dashboard/addhotels`, {
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
    const response = await fetch(`https://tripsure-server-sayemsaadat0.vercel.app/dashboard/addresturants`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(resturantsData),
    })
  
    const data = await response.json()
    return data
  }