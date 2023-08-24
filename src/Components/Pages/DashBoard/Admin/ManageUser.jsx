import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
const ManageUser = () => {


  const [usersdata, setUsersData] = useState([]);

  useEffect(() => {
    axios.get('https://tripsure-server-sayemsaadat0.vercel.app/users')
      .then(response => {
        setUsersData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log('shihab', usersdata);






  const [selectedRole, setSelectedRole] = useState("select");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };


// delete make

const handleDelete = user => {
   console.log(user)
  Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
      if (result.isConfirmed) {
          fetch(`https://tripsure-server-sayemsaadat0.vercel.app/users/${user._id}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  if (data.deletedCount > 0) {
                     
                      Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                      )
                  }
              })
      }
  })
}


  return (
    <div className="w-full">
      <h2 className="text-center mb-10 font-bold text-2xl"> {usersdata.length} </h2>
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
              <th>Handle</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            usersdata?.map(( user,i) => <>
            <tr key={user._id}>
              <th>{i+ 1}</th>
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
              <td> {selectedRole && <p>{selectedRole}</p>}</td>
              <td className="">
                <select
                  className="px-4 py-2 rounded bg-gray-300 text-gray-700"
                  value={selectedRole}
                  onChange={handleRoleChange}
                >
                  <option value="user">select</option>
                  <option value="admin">Admin</option>
                  <option value="operator">operator</option>
                </select>
              </td>
              <th>
                <button onClick={() => handleDelete(user)}  className="btn btn-outline btn-circle bg-pink-700 text-white">
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </th>
            </tr>
            </>)
          }
            
         
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
