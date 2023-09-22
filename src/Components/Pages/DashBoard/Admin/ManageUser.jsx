import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserCheck, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import UserStatus from "../../../Shared/Status/UserStatus";
import UserDetailsModal from "./UserDetailsModal";

const ManageUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [operator, setOperator] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColumn, setSortColumn] = useState("name");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleOpenUserDetailsModal = (email) => {
    setUserEmail(email);
    setIsOpen(true);
  };

  const { data: usersData = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  useEffect(() => {
    let filteredAndSortedUsers = [...usersData];

    if (operator === "admin") {
      filteredAndSortedUsers = filteredAndSortedUsers.filter(
        (user) => user.role === "admin"
      );
    } else if (operator === "guide") {
      filteredAndSortedUsers = filteredAndSortedUsers.filter(
        (user) => user.role === "guide"
      );
    }

    filteredAndSortedUsers.sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortColumn]?.localeCompare(b[sortColumn]);
      } else {
        return b[sortColumn]?.localeCompare(a[sortColumn]);
      }
    });

    setFilteredUsers(filteredAndSortedUsers);
  }, [usersData, operator, sortColumn, sortOrder]);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

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
        fetch(`${import.meta.env.VITE_BACKEND_API}/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

  const updateRole = ({ user, role }) => {
    // console.log(user, role)
    fetch(`${import.meta.env.VITE_BACKEND_API}/users/updateRole/${user._id}`, {
      method: 'PUT',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify({ role: role })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data?.modifiedCount > 0) {
          refetch();
          Swal.fire({
            icon: 'success',
            title: ' WOW update user role successfull',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/users?email=${searchTerm}`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error searching for users:", error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mr-10 mt-4">
        <h2 className="text-center mb-6 ml-4 font-bold text-2xl">
          Total Users :{" "}
          <span className="text-red-500">{usersData.length}</span>
        </h2>
        <div>
          <UserStatus />
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="flex justify-between mr-10">

          <select
            className="select shadow-lg w-40 focus:outline-none"
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          >
            <option value="">All Users</option>
            <option value="admin">Admin</option>
            <option value="guide">Guide</option>
          </select>
        </div>

        <table className="table w-full table-zebra mt-5">
          <thead>
            <tr className="bg-[#85c8f7] text-lg text-white shadow-md">
              <th>Index</th>
              <th>Image</th>
              <th onClick={() => handleSort("name")}>Name</th>
              <th>Role</th>
              <th>Admin</th>
              <th>Guide</th>
              <th>Delete</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((user, i) => (
              <tr key={user._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center ">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <span className="font-semibold text-lg">{user?.name}</span>
                  <br />
                  <span>{user?.email}</span>
                </td>
                <td>{user?.role ? user.role : "User Not Set"}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => updateRole({ user, role: 'admin' })}
                      disabled={user.role === "operator"}
                      className="btn btn-ghost bg-orange-600  text-white"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "guide" ? (
                    "Guide"
                  ) : (
                    <button
                      onClick={() => updateRole({ user, role: 'guide' })}
                      disabled={user.role === "admin"}
                      className="btn btn-ghost bg-teal-800  text-white"
                    >
                      <FaUserCheck></FaUserCheck>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn mr-4"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleOpenUserDetailsModal(user.email)}
                    className="btn mr-4"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <UserDetailsModal
          userEmail={userEmail}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        ></UserDetailsModal>
      </div>
    </div>
  );
};

export default ManageUser;
