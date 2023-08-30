import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserCheck, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const ManageUser = () => {


  const [axiosSecure] = useAxiosSecure();
  const { data: usersdata = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
  })


  const [operator, setOperator] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortColumn, setSortColumn] = useState('name');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    let filteredAndSortedUsers = [...usersdata];

    if (operator === 'admin') {
      filteredAndSortedUsers = filteredAndSortedUsers.filter(user => user.role === 'admin');
    } else if (operator === 'operator') {
      filteredAndSortedUsers = filteredAndSortedUsers.filter(user => user.role === 'operator');
    }

    // Sort users based on sortColumn and sortOrder
    filteredAndSortedUsers.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortColumn].localeCompare(b[sortColumn]);
      } else {
        return b[sortColumn].localeCompare(a[sortColumn]);
      }
    });

    setFilteredUsers(filteredAndSortedUsers);
  }, [usersdata, operator, sortColumn, sortOrder]);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };





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

  const handleMakeOperator = (user) => {
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

  // search 
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://tripsure-server-sayemsaadat0.vercel.app/users?email=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error searching for users:", error);
    }
  };


  return (
    <div className="w-full">
      <div className="flex justify-end mr-10 mt-4">
        <h2 className="text-center mb-6 font-bold text-2xl">
          Total Users : <span className="text-red-500">{usersdata.length}</span>
        </h2>
      </div>


      <div className="overflow-x-auto">
        <div className="flex justify-between  mr-10 ">
          {/* search  */}
          <div className="form-control ml-3">
            <div className="input-group">
              <input value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Enter Email" className="input input-bordered" />
              <button className="btn" onClick={handleSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

            </div>
          </div>
          {/* sort */}
          <select className="select shadow-lg w-40 focus:outline-none"
            value={operator} onChange={(e) => setOperator(e.target.value)}>
            <option value="">All Users</option>
            <option value="admin">Admin</option>
            <option value="operator">Operator</option>
          </select>

        </div>


        <table className="table w-full table-zebra mt-5" >
          {/* head */}
          <thead>
            <tr className="bg-[#85c8f7] text-lg text-white shadow-md">
              <th>Index</th>
              <th>image</th>
              <th onClick={() => handleSort('name')}>Name</th>
              <th>Role</th>
              <th>Admin</th>
              <th>Operator</th>
              <th>Delete</th>

            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((user, i) => (
              <tr key={user._id} >
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center ">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td>
                  <span className="font-semibold text-lg">{user?.name}</span>
                  <br />
                  <span>{user?.email}</span>
                </td>
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
                <td >
                  {user.role === "operator" ? (
                    "operator"
                  ) : (
                    <button
                      onClick={() => handleMakeOperator(user)}
                      disabled={user.role === "admin"}
                      className="btn btn-ghost bg-teal-800  text-white"
                    >
                      <FaUserCheck></FaUserCheck>
                    </button>
                  )}
                </td>
                <th   >
                  <button
                    onClick={() => handleDelete(user)}
                    className=" btn mr-4" >
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