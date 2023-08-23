import axios from "axios"


export const saveUser = async(user) => {
    const currentUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
    }
    console.log(user)
    const data = await axios.put(`http://localhost:1000/users/${user?.email}`, currentUser)
    console.log(data)
}
