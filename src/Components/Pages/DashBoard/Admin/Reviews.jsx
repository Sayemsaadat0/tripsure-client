import React from "react";

const Reviews = () => {
  return (
    <div>
      <div className="w-full">
        <h2 className="text-center mb-10 font-bold text-xl"> Reviews </h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Feedback</th>
                <th>status</th>
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
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Author Image"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>Mdshihab @gmail.com</td>
                <td>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, ipsum!
                  </p>
                </td>
                <th className="flex">
                  <button className="btn btn-xs bg-teal-300">approved</button>
                  <button className="btn btn-xs bg-teal-300">deined</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
