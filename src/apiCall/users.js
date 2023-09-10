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
    }
    console.log(user)
    const data = await axios.put(`${import.meta.env.VITE_BACKEND_API}/users/${user?.email}`, currentUser)
    console.log(data)
}
// add cover photo 
/* export const addCoverPhoto = async (email, coverPhoto) => {
    console.log(coverPhoto)
    const response = await axios.patch(`${import.meta.env.VITE_BACKEND_API}/users/${email}`, {coverPhoto})
    return response
} */
// update details 
export const updateUserDeatails = async (email, details) => {
    console.log(details)
    const response = await axios.put(`${import.meta.env.VITE_BACKEND_API}/users/${email}`, details)
    console.log(response)
    return response
}

export const findUserbyEmail = async (email) => {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/users/${email}`)
    // console.log(response)
    return response.data
}
// get user role
export const getRole = async email => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/users/${email}`)
    const user = await response.json()
    // console.log(user)
    return user?.role
  }
