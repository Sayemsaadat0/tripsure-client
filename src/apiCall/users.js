import axios from "axios"


export const saveUser = async (user, countryName, phone, gender) => {
    const currentUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role :"user",
        countryName,
        phone,
        gender,
        coverPhoto: ''
    }
    console.log(user)
    const data = await axios.put(`https://tripsure-server-sayemsaadat0.vercel.app/users/${user?.email}`, currentUser)
    console.log(data)
}
// add cover photo 
export const addCoverPhoto = async (email, coverPhoto) => {
    console.log(coverPhoto)
    const response = await axios.patch(`https://tripsure-server-sayemsaadat0.vercel.app/users/${email}`, {coverPhoto})
    return response
}
// update details 
export const updateUserDeatails = async (email, details) => {
    console.log(details)
    const response = await axios.put(`https://tripsure-server-sayemsaadat0.vercel.app/users/${email}`, details)
    console.log(response)
    return response
}

export const findUserbyEmail = async (email) => {
    const response = await axios.get(`https://tripsure-server-sayemsaadat0.vercel.app/users/${email}`)
    // console.log(response)
    return response.data
}
// get user role
export const getRole = async email => {
    const response = await fetch(`http://localhost:1000/users/${email}`)
    const user = await response.json()
    // console.log(user)
    return user?.role
  }
