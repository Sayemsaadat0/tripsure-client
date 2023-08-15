import React from 'react';

const ManageBookings = () => {
    return (
        <div>
              <div className='w-full'>
            <h2 className='text-center mb-10'> Manage Bookings </h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
          <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Manage Books</th>
                        <th>Action</th>
                    </tr>
                </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="tour image" />
              </div>
            </div>
          </div>
        </td>
        <td>Mdshihab @gmail.com</td>
        <td>handle</td>
        <th>
          <button className="btn btn-outline bg-pink-700  text-white">delete</button>
        </th>
      </tr>
      
     
      
    </tbody>
    
    
  </table>
</div>
        </div>
        </div>
    );
};

export default ManageBookings;