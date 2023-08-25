import axios from "axios"


export const saveUser = async (user, countryName, phone, gender) => {
    const currentUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        countryName,
        phone,
        gender,
        coverPhoto: ''
    }
    console.log(user)
    const data = await axios.put(`http://localhost:1000/users/${user?.email}`, currentUser)
    console.log(data)
}
// add cover photo 
export const addCoverPhoto = async (email, coverPhoto) => {
    const response = await axios.patch(`http://localhost:1000/users/${email}`, coverPhoto)
    return response
}
export const findUserbyEmail = async (email) => {
    const response = await axios.get(`http://localhost:1000/users/${email}`)
    // console.log(response)
    return response.data
}