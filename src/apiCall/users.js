import axios from "axios"


export const saveUser = async(user) => {
    const currentUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role :"user"
    }
    console.log(user)
    const data = await axios.put(`https://tripsure-server-sayemsaadat0.vercel.app/users/${user?.email}`, currentUser)
    console.log(data)
}
