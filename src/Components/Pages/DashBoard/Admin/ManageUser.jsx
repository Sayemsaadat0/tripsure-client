import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ManageUser = () => {
  const [selectedRole, setSelectedRole] = useState("select");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div className="w-full">
      <h2 className="text-center mb-10"> Manage Users </h2>
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
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/Hr6khp9/author3.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>Basu SIkder</td>
              <td>MDshihab @gmail.com</td>
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
                <button className="btn btn-outline btn-circle bg-teal-700  text-white">
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </th>
            </tr>
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/Hr6khp9/author3.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>Basu SIkder</td>
              <td>MDshihab @gmail.com</td>
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
                <button className="btn btn-outline btn-circle bg-teal-700  text-white">
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </th>
            </tr>
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/Hr6khp9/author3.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>Basu SIkder</td>
              <td>MDshihab @gmail.com</td>
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
                <button className="btn btn-outline btn-circle bg-teal-700  text-white">
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </th>
            </tr>
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/Hr6khp9/author3.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>Basu SIkder</td>
              <td>MDshihab @gmail.com</td>
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
                <button className="btn btn-outline btn-circle bg-teal-700  text-white">
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </th>
            </tr>
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/Hr6khp9/author3.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>Basu SIkder</td>
              <td>MDshihab @gmail.com</td>
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
                <button className="btn btn-outline btn-circle bg-teal-700  text-white">
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </th>
            </tr>
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/Hr6khp9/author3.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>Basu SIkder</td>
              <td>MDshihab @gmail.com</td>
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
                <button className="btn btn-outline btn-circle bg-teal-700  text-white">
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;