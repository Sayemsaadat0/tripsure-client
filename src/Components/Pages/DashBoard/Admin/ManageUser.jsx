import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserCheck, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageUser = () => {


  const [axiosSecure] = useAxiosSecure();
  const { data: usersdata = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
  })

  // delete make

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tripsure-server-sayemsaadat0.vercel.app/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  //  make role handlling

  const handleMakeAdmin = user => { 
    console.log(user)
    fetch(`https://tripsure-server-sayemsaadat0.vercel.app/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data?.acknowledged) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `WOW is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  const handleMakeInstructor = (user) =>{
    console.log(user)
    fetch(`https://tripsure-server-sayemsaadat0.vercel.app/users/operator/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          refetch();
          Swal.fire({
           
            icon: 'success',
            title: `WOW is an operator Now!`,
            showConfirmButton: false,
            timer: 1000
          })
        }
      })

  }
  return (
    <div className="w-full">
      <h2 className="text-center mb-10 font-bold text-2xl">
        {" "}
        {usersdata.length}{" "}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>admin</th>
              <th>operation</th>
            </tr>
          </thead>
          <tbody>
            {usersdata?.map((user, i) => (

              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role ? user.role : 'userNotset'}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      disabled={user.role === "operator"}
                      className="btn btn-ghost bg-orange-600  text-white"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "operator" ? (
                    "operator"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      disabled={user.role === "admin"}
                      className="btn btn-ghost bg-teal-800  text-white"
                    >
                      <FaUserCheck></FaUserCheck>
                    </button>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-outline btn-circle bg-pink-700 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;